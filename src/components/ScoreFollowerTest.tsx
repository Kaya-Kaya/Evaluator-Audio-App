import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { decode } from 'wav-decoder';
import { ScoreFollower } from '../audio/ScoreFollower';
import { CENSFeatures } from '../audio/FeaturesCENS';
import { FeaturesConstructor } from '../audio/Features';
import { Platform } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import TempoGraph from './TempoGraph';
import { resampleAudio, toMono } from '../utils/audioUtils';
import { calculateWarpedTimes } from '../utils/alignmentUtils';

// Hash map - score name -> score's wav file (expo implementation using require)
const refAssetMap: Record<string, any> = {
  'air_on_the_g_string': require('../../assets/air_on_the_g_string/baseline/aotgs_solo_ref.wav'),
};

// Hash map - score name -> score's csv file (expo implementation using require)
const csvAssetMap: Record<string, any> = {
  'air_on_the_g_string': require('../../assets/air_on_the_g_string/baseline/aotgs_tempo.csv'),
};

interface ScoreFollowerTestProps {
  score: string; // Selected score name
  dispatch: (action: { type: string; payload?: any }) => void; // Dispatch function used to update global state
  bpm?: number; // Optional BPM number,
  FeaturesCls?: FeaturesConstructor<any>;
  state: any;
}

interface CSVRow { // Interface used to store CSV info 
  beat: number; // Start beat value of current row's note
  refTime: number; // Reference audio timestamp of when current row's note will be played
  liveTime: number; // Live audio timestamp of when current row's note will be played - used for testing purposes only
  predictedTime: number; // Estimated live audio timestamp of when current row's note will be played
}

export default function ScoreFollowerTest({
  score,
  dispatch,
  bpm = 100, // Default BPM if not provided in props
  FeaturesCls = CENSFeatures,
  state
}: ScoreFollowerTestProps) {
  const [processing, setProcessing] = useState(false); // Boolean for if score follower is running
  const [liveFile, setLiveFile] = useState<{ uri: string; name: string } | null>(null);
  const nextIndexRef = useRef<number>(0);  // Track next CSV index to dispatch

  const soundRef = useRef<Audio.Sound | null>(null); // Reference to Audio Component
  const followerRef = useRef<ScoreFollower | null>(null); // Reference to score follower instance
  const audioDataRef = useRef<Float32Array>(new Float32Array()); // Reference to decoded audio sample data
  const pathRef = useRef<Array<[number, number]>>([]); // Reference to alignment path
  const inputRef = useRef<HTMLInputElement>(null); // Reference to the file select HTML element 
  const frameSecRef = useRef<number>(0);
  const csvDataRef = useRef<CSVRow[]>([]);
  const [warpingPath, setWarpingPath] = useState<[number, number][]>([]);
  const[frameSize, setFrameSize] = useState<number>(0);
  const[sampleRate, setSampleRate] = useState<number>(0);
  const [performanceComplete, setPerformanceComplete] = useState(false);

  // Unload the sound when the component unmounts to free up memory
  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync().catch(() => {});
      }
    };
  }, []);

  // Web versin of wav file upload 
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const file = e.target.files?.[0] ?? null;
    if (file && file.name.toLowerCase().endsWith('.wav')) {
      const uri = URL.createObjectURL(file);
      setLiveFile({ uri, name: file.name });
    } else {
      setLiveFile(null);
    }
  };

  // Mobile version of wav file upload usign DocumentPicker
  const handleMobileFileChange = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({ type: 'audio/wav', copyToCacheDirectory: true });
      if (!res.canceled && res.assets && res.assets.length > 0) {
        const asset = res.assets[0];
        setLiveFile({ uri: asset.uri, name: asset.name });
      } else {
        setLiveFile(null);
      }
    } catch (err) {
      console.error('DocumentPicker Error:', err);
    }
  };

  const runFollower = async () => {
    if (!score) return; // Do nothing if no score is selected 
    setProcessing(true); // Turn on processing boolean state
    setPerformanceComplete(false);
    try {
      const base = score.replace(/\.musicxml$/, ''); // Retrieve score name (".musicxml" removal)
      const isWeb = Platform.OS === 'web'; // Boolean indicating if user is on website version or not
      const refUri = isWeb ? `/${base}/baseline/instrument_0.wav` : Asset.fromModule(refAssetMap[base]).uri; // Path to reference wav file of selected score depending on web or expo go version
      followerRef.current = await ScoreFollower.create(refUri, FeaturesCls); // Initialize score follower instance (default parameters from ScoreFollower.tsx)
      const follower = followerRef.current!; 

      // Extract sample rate and window length from the ScoreFollower instance
      const sampleRate = follower.sr;
      const winLength = follower.winLen 

      setSampleRate(follower.sr)
      setFrameSize(follower.winLen)

      const frameSize = winLength; // Set framesize to window length property of scorefollower
      frameSecRef.current = frameSize / sampleRate; 

      let buffer: ArrayBuffer; // Define an array buffer

      if (isWeb) {
        buffer = await fetch(liveFile.uri).then(r => r.arrayBuffer()); // Web version of initializing array buffer given live uri 
      }
       else {  // Expo go version of initializing array buffer given live uri 
        const b64 = await FileSystem.readAsStringAsync(liveFile.uri, { encoding: FileSystem.EncodingType.Base64 });
        const binaryString = atob(b64);
        const bytes = Uint8Array.from(binaryString, c => c.charCodeAt(0));
        buffer = bytes.buffer;
      }

      const result = await decode(buffer, { symmetric: true }); // Decode the WAV buffer into PCM audio data  - passed in symmetric = TRUE for better PCM samples when compared to the Python version
      let audioData = toMono(result.channelData);
      audioData = resampleAudio(audioData, result.sampleRate, sampleRate)

      audioDataRef.current = audioData;

      // downloadFullPCM(audioDataRef.current)

      const totalFrames = Math.ceil(audioData.length / frameSize); // Compute total frames for computing alignment path 
      pathRef.current = []; // Initialize alignment path reference 

      // Precompute full alignment path offline
      for (let i = 0; i < totalFrames; i++) {

        const start = i * frameSize; // Get starting frame 
        let frame = audioData.subarray(start, start + frameSize); // Extract the audio frame from the buffer

        // Pad the frame if it's shorter than expected
        if (frame.length < frameSize) {
          const pad = new Float32Array(frameSize);
          pad.set(frame);
          frame = pad;
        }
        follower.step(Array.from(frame)); // Pass frame into score follower's step function to populate path
        const last = follower.path[follower.path.length - 1]; // Get last updated frame from path
        pathRef.current.push(last); // Insert frame into our path reference 
      }

      {
        const base = score.replace(/\.musicxml$/, ''); // Retrieve score name (".musicxml" removal)
        const csvUri = isWeb ? `/${base}/baseline/ode_to_joy_300bpm_NEW.csv` : Asset.fromModule(csvAssetMap[base]).uri; // Path the CSV given score name (web and alternative expo go version)
        const text = isWeb ? await fetch(csvUri).then(r => r.text()) : await FileSystem.readAsStringAsync(csvUri, { encoding: FileSystem.EncodingType.UTF8 }); // fetch the CSV text
        const lines = text.trim().split('\n'); // Split the CSV into lines (one line per row)

        const rows: CSVRow[] = lines.slice(1).map(line => { // Parse each data row (skipping the header at index 0)
          const cols = line.split(','); // Split a single CSV line into its comma-separated columns
          const beat = parseFloat(cols[0]) + 1;  // Column 0: beat index (add 1 to convert from zero-based to 1-based counting - NOTE: Beat movement logic was made to work with starting beat of 1 insteaf of beat 0)
          const refTime = parseFloat(cols[5]); // Column 5: reference time for this beat (in seconds)
          const liveTime = parseFloat(cols[6]);  // Column 6: actual live performance time for this beat (in seconds)
          const predictedTime = 0 // Set to 0 for now, will populate later (need array of ref times)
          return { beat, refTime, liveTime, predictedTime };

        });
        csvDataRef.current = rows; // Save the parsed CSV rows for downstream use
        const stepSize  = frameSecRef.current; // Duration of each frame in seconds
        const warpingPath = pathRef.current; // The Dynamic Time Warping path: an array of [referenceIndex, liveIndex] pairs
        const refTimes = csvDataRef.current.map(r => r.refTime); // Pull out just the reference times from each row to feed into the calculateWarpedTimes()

        const predictedTimes = calculateWarpedTimes( // Obtain array of ESTIMATED timestamps of when each note is played in the live audio
          warpingPath,
          stepSize,
          refTimes
        );

        // Update CSV Interface with predicted live times for each note 
        csvDataRef.current = csvDataRef.current.map((row, i) => ({
          ...row,
          predictedTime: predictedTimes[i],
        }));

        nextIndexRef.current = 0;
      }
      // Show full path
      console.log(pathRef.current)
      // return
      setWarpingPath(pathRef.current);
       
      const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => { // Callback to handle audio playback status updates
        if (!status.isLoaded) return;  // Exit early if sound isn't loaded
        const currentTimeSec = status.positionMillis / 1000;  // Convert current playback time from milliseconds to samples

        while (  // Process only if the frame is within bounds and we have passed a predicted time of current csv row 
          nextIndexRef.current < csvDataRef.current.length &&
          currentTimeSec >= csvDataRef.current[nextIndexRef.current].predictedTime
        ) {
          const beat = csvDataRef.current[nextIndexRef.current].beat; // Get beat of that note
          dispatch({ type: 'SET_ESTIMATED_BEAT', payload: beat }); // Update beat to move cursor
          nextIndexRef.current++; // Go to next row of csv 
        }

        // Handle end of playback
        if (status.didJustFinish) {
          setProcessing(false);
          setPerformanceComplete(true);
          soundRef.current?.setOnPlaybackStatusUpdate(null);
        }
      };

      const soundSource = { uri: liveFile.uri };

      // Create and load the sound object from the live audio URI
      const { sound } = await Audio.Sound.createAsync(
        soundSource, // Audio source
        {
          shouldPlay: true, // Automatically start playback once loaded
          progressUpdateIntervalMillis: 20, // Set how often status updates are triggered 
        },
        onPlaybackStatusUpdate // Callback to handle playback progress (frame processing, alignment, etc.)
      );
      soundRef.current = sound;
      

    } catch (err) {
      console.error('ScoreFollower Error:', err);
      setProcessing(false);
    }
  };

  

  return (
    <View>
      {bpm ? (
        <Text style={styles.tempoText}>Reference Tempo: {bpm} BPM</Text>
      ):
      (
        <></>
      )
      }
      {/* Render wav upload button for web version */}
      {Platform.OS === 'web' ? (
        <>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 4 }}>
          <input
            ref={inputRef}
            type="file"
            accept=".wav"
            style={styles.hiddenInput}
            disabled={processing}
            onChange={handleFileChange}
          />
          {/* Visable web file picker - actual button shown*/}
          <TouchableOpacity
            style={[styles.fileButton, processing && styles.disabledButton]}
            onPress={() => inputRef.current?.click()}
            disabled={processing}
          >
            <Text style={styles.buttonText}>
              {liveFile ? `Selected: ${liveFile.name}` : 'Upload a Performance'} 
            </Text>
          </TouchableOpacity>

          <TempoGraph
            refTempo={bpm}
            beatsPerMeasure={state.beatsPerMeasure}
            warpingPath={warpingPath}
            scoreName={score.replace(/\.musicxml$/, '')}
            disabled={!performanceComplete || liveFile == null}
            frameSize={frameSize}
            sampleRate={sampleRate}
            
          />
        </View>
          
        </>
        
      ): ( 
        // Render wav upload button for expo go version 
        <TouchableOpacity
          style={[styles.fileButton, processing && styles.disabledButton]}
          onPress={handleMobileFileChange}
          disabled={processing}
        >
          <Text style={styles.buttonText}>
            {liveFile ? `Selected: ${liveFile.name}` : 'Select WAV File'}
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={[styles.button, (processing || !liveFile) && styles.disabledButton]}
        onPress={runFollower}
        disabled={processing || !liveFile}
      >
        <Text style={styles.buttonText}>
          {processing ? 'Running...' : 'Play'}
        </Text>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    padding: 12,
    backgroundColor: '#2C3E50',
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  status: {
    marginTop: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  tempoText: {
    fontSize: 18,
    color: "#2C3E50",
     fontWeight: "bold",
    // Text shadow properties
    textShadowColor: 'rgba(0, 0, 0, 0.1)', // Shadow color with transparency
    textShadowOffset: { width: 1, height: 1 }, // Slight offset
    textShadowRadius: 4,
    textAlign: 'left',
    marginBottom: 8,
  },
   hiddenInput: {
    display: 'none',
  },
  fileButton: {
    padding: 12,
    backgroundColor: '#2C3E50',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },

});

