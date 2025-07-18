import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { decode } from 'wav-decoder';
import { ScoreFollower } from '../audio/ScoreFollower';
import { CENSFeatures } from '../audio/FeaturesCENS';
import { FeaturesConstructor } from '../audio/Features';
import waveResampler from 'wave-resampler';

interface ScoreFollowerTestProps {
  score: string; // Selected score name
  dispatch: (action: { type: string; payload?: any }) => void; // Dispatch function used to update global state
  bpm?: number; // Optional BPM number,
  FeaturesCls?: FeaturesConstructor<any>;
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
}: ScoreFollowerTestProps) {
  const [processing, setProcessing] = useState(false); // Boolean for if score follower is running
  const [liveFile, setLiveFile] = useState<File | null>(null); // Local state for storing liveFile
  const nextIndexRef = useRef<number>(0);  // Track next CSV index to dispatch

  const soundRef = useRef<Audio.Sound | null>(null); // Reference to Audio Component
  const followerRef = useRef<ScoreFollower | null>(null); // Reference to score follower instance
  const audioDataRef = useRef<Float32Array>(new Float32Array()); // Reference to decoded audio sample data
  const lastFrameRef = useRef<number>(-1); // Reference to last frame that was processed
  const pathRef = useRef<Array<[number, number]>>([]); // Reference to alignment path
  const inputRef = useRef<HTMLInputElement>(null); // Reference to the file select HTML element 
  const frameSecRef = useRef<number>(0);
  const csvDataRef = useRef<CSVRow[]>([]);

  // Unload the sound when the component unmounts to free up memory
  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync().catch(() => {});
      }
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Web handle file change function
    const file = e.target.files?.[0] ?? null;
    setLiveFile(file && file.name.toLowerCase().endsWith('.wav') ? file : null);
  };

  // Given warped path and an array of timestamps of when each note is played in the reference audio, it will return array of ESTIMATED timestamps of when each note is played in the live audio
  const calculateWarpedTimes = (
    warpingPath: number[][],
    stepSize: number,
    refTimes: number[], 
  ): number[] => {
    const warpedTimes: number[] = [];

    // Apply step size to both axes of the warping path
    const pathTimes = warpingPath.map(([refIdx, liveIdx]) => [refIdx * stepSize, liveIdx * stepSize] as [number, number]);
    const refPathTimes = pathTimes.map(pt => pt[0]);
    const livePathTimes = pathTimes.map(pt => pt[1]);

    for (const queryTime of refTimes) {
      // Compute diffs from every refPathTime
      const diffs = refPathTimes.map(t => t - queryTime);
      // Find index of the minimum absolute diff
      let idx = 0;
      let minAbs = Math.abs(diffs[0]);
      for (let i = 1; i < diffs.length; i++) {
        const absDi = Math.abs(diffs[i]);
        if (absDi < minAbs) {
          minAbs = absDi;
          idx = i;
        }
      }

      // Choose a pair of points to interpolate between
      let leftIdx: number, rightIdx: number;
      if (diffs[idx] >= 0 && idx > 0) {
        leftIdx = idx - 1;
        rightIdx = idx;
      } else if (idx + 1 < livePathTimes.length) {
        leftIdx = idx;
        rightIdx = idx + 1;
      } else {
        leftIdx = rightIdx = idx;
      }

      // If no interpolation needed, just take the point
      if (leftIdx === rightIdx) {
        warpedTimes.push(livePathTimes[leftIdx]);
        continue;
      }

      // Linear interpolation fraction along the ref‐path segment
      const queryRefOffset = queryTime - refPathTimes[leftIdx];  // ≥ 0
      const queryOffsetNorm = queryRefOffset === 0
        ? 0
        : queryRefOffset / stepSize;

      // Project that fraction into the live‐path segment
      const liveMaxOffset = livePathTimes[rightIdx] - livePathTimes[leftIdx];
      const queryOffsetLive = liveMaxOffset * queryOffsetNorm;

      warpedTimes.push(livePathTimes[leftIdx] + queryOffsetLive);
    }

    return warpedTimes;
  }


  const runFollower = async () => {
    if (!score) return; // Do nothing if no score is selected 
    setProcessing(true); // Turn on processing boolean state

    try {
      const base = score.replace(/\.musicxml$/, ''); // Retrieve score name (".musicxml" removal)
      const refUri = `/${base}/baseline/instrument_0.wav`; // Path to reference wav file of selected score 
      followerRef.current = await ScoreFollower.create(refUri, FeaturesCls); // Initialize score follower instance (default parameters from ScoreFollower.tsx)
      const follower = followerRef.current!; 

      // Extract sample rate and window length from the ScoreFollower instance
      const sampleRate = follower.sr;
      const winLength = follower.winLen 

      const frameSize = winLength; // Set framesize to window length property of scorefollower
      frameSecRef.current = frameSize / sampleRate; 
      const buffer = await liveFile.arrayBuffer(); // Read the response as an ArrayBuffer (binary data)
      const result = await decode(buffer, { symmetric: true }); // Decode the WAV buffer into PCM audio data  - passed in symmetric = TRUE for better PCM samples when compared to the Python version

      let audioData = result.channelData[0]

      // Convert to mono if needed
      if (result.channelData.length > 1) {
          const numCh = result.channelData.length;
          const len = audioData.length;
          const mono = new Float32Array(len);
          for (let i = 0; i < len; i++) {
              let sum = 0;
              for (let ch = 0; ch < numCh; ch++) sum += result.channelData[ch][i];
              mono[i] = sum / numCh;
          }
          audioData = mono;
      }

      // Resample if sample rates differ
      if (result.sampleRate !== sampleRate) {
          const resampled = waveResampler.resample(
              audioData,
              result.sampleRate,
              sampleRate
          );
          audioData =
              resampled instanceof Float32Array
                  ? resampled
                  : Float32Array.from(resampled as number[]);
      }

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
        const csvUri = `/${base}/baseline/ode_to_joy_300bpm_NEW.csv`; // Path the CSV given score name
        const text = await fetch(csvUri).then(r => r.text()); // Fetch the CSV file and read its text
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
          soundRef.current?.setOnPlaybackStatusUpdate(null);
        }
      };

      const liveUrl = URL.createObjectURL(liveFile); // Extract url from liveFile state 

      // Create and load the sound object from the live audio URI
      const { sound } = await Audio.Sound.createAsync(
        { uri: liveUrl }, // Audio source
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

  // function downloadFullPCM(audioData, filename = 'ts_first100_pcm.txt') {
  //   // 1) Grab the first 100 samples (300 since your SAMPLE_RATE is 3× the frame-count)
  //   const slice100 = audioData.slice(0, 1000);

  //   // 2) Format like Python does
  //   const text = Array.from(slice100)
  //     .map(pythonFormat)
  //     .join('\n');

  //   // 3) Trigger download in browser
  //   const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = filename;
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url);
  // }

  // function pythonFormat(v) {
  //   // Python prints "0.0" for zero
  //   if (Object.is(v, 0)) return '0.0';

  //   const absV = Math.abs(v);
  //   const expVal = Math.floor(Math.log10(absV));

  //   // Python repr/str uses exponential for exp < -4 or exp >= 17
  //   if (expVal < -4 || expVal >= 17) {
  //     // Generate a long exponential, then strip unneeded zeros
  //     let [mant, exp] = v.toExponential(16).split('e');

  //     // Trim trailing zeros from mantissa, then any stray dot
  //     mant = mant.replace(/(\.\d*?[1-9])0+$/, '$1').replace(/\.$/, '');

  //     // Normalize exponent sign and pad to 2 digits
  //     let sign = exp[0];
  //     let digits = exp.slice(1);
  //     if (sign !== '+' && sign !== '-') {
  //       // unlikely, but just in case
  //       digits = sign + digits;
  //       sign = '+';
  //     }
  //     if (digits.length < 2) digits = '0' + digits;

  //     return mant + 'e' + sign + digits;
  //   } else {
  //     // Fixed decimal: JS’s toString gives the shortest fixed repr for 1e‑4 ≤ |v| < 1e17
  //     return v.toString();
  //   }
  // }

  return (
    <View style={styles.container}>
      {bpm ? (
        <Text style={styles.tempoText}>Reference Tempo: {bpm} BPM</Text>
      ):
      (
        <></>
      )
      }
      {/* Web file picker - hidden for styling purposes*/}
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

      <TouchableOpacity
        style={[styles.button, (processing || !liveFile) && styles.disabledButton]}
        onPress={runFollower}
        disabled={processing || !liveFile}
      >
        <Text style={styles.buttonText}>
          {processing ? 'Running...' : 'Play'}
        </Text>
      </TouchableOpacity>

      {/* <View style={styles.status}>
        <Text style={styles.label}>
          Time: {estimatedTime.toFixed(2)} s → Beat: {estimatedBeat.toFixed(2)}
        </Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    marginVertical: 12
  },
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

