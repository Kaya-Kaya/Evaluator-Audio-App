// # The MIT License (MIT)

// Copyright (c) 2016 PART <info@gordonlesti.com>, <https://fheyen.github.io/>

// > Permission is hereby granted, free of charge, to any person obtaining a copy
// > of this software and associated documentation files (the "Software"), to deal
// > in the Software without restriction, including without limitation the rights
// > to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// > copies of the Software, and to permit persons to whom the Software is
// > furnished to do so, subject to the following conditions:
// >
// > The above copyright notice and this permission notice shall be included in
// > all copies or substantial portions of the Software.
// >
// > THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// > IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// > FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// > AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// > LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// > OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// > THE SOFTWARE.

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { decode } from 'wav-decoder';
import { ScoreFollower } from '../audio/ScoreFollower';
import { CENSFeatures } from '../audio/FeaturesCENS';
import { FeaturesConstructor } from '../audio/Features';
import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import TempoGraph from './TempoGraph';
import { resampleAudio, toMono } from '../utils/audioUtils';
import { calculateWarpedTimes, precomputeAlignmentPath } from '../utils/alignmentUtils';
import { LiveFile, parseWebWavFile, pickMobileWavFile } from '../utils/fileSelectorUtils';
import { loadCsvInfo, CSVRow } from '../utils/csvParsingUtils';
import DynamicTimeWarping from "dynamic-time-warping-ts";
import { dot } from '../audio/FeaturesCENS';
import { calculateIntonation } from '../audio/Intonation'

// Hash map - score name -> score's wav file (expo implementation using require)
const refAssetMap: Record<string, any> = {
  'air_on_the_g_string': require('../../assets/air_on_the_g_string/baseline/instrument_0.wav'),
  'schumann_melodyVLCduet': require('../../assets/schumann_melodyVLCduet/baseline/instrument_0.wav'),
  'ode_to_joy': require('../../assets/ode_to_joy/baseline/instrument_0.wav'),
};

// Hash map - score name -> score's csv file (expo implementation using require)
const csvAssetMap: Record<string, any> = {
  'air_on_the_g_string': require('../../assets/air_on_the_g_string/baseline/aotgs_solo_100bpm.csv'),
  'schumann_melodyVLCduet': require('../../assets/schumann_melodyVLCduet/baseline/schumann_melody_4sec.csv'),
  'ode_to_joy': require('../../assets/ode_to_joy/baseline/ode_to_joy_300bpm.csv'),
};

interface ScoreFollowerTestProps {
  score: string; // Selected score name
  dispatch: (action: { type: string; payload?: any }) => void; // Dispatch function used to update global state
  bpm?: number; // Optional BPM number,
  FeaturesCls?: FeaturesConstructor<any>;
  state: any;
}

export default function ScoreFollowerTest({
  score,
  dispatch,
  bpm = 100, // Default BPM if not provided in props
  FeaturesCls = CENSFeatures,
  state
}: ScoreFollowerTestProps) {

  const [processing, setProcessing] = useState(false); // Boolean for if score follower is running
  const [liveFile, setLiveFile] = useState<LiveFile | null>(null);
  const nextIndexRef = useRef<number>(0);  // Track next CSV index to dispatch
  const soundRef = useRef<Audio.Sound | null>(null); // Reference to Audio Component
  const followerRef = useRef<ScoreFollower | null>(null); // Reference to score follower instance
  const audioDataRef = useRef<Float32Array>(new Float32Array()); // Reference to decoded audio sample data
  const pathRef = useRef<Array<[number, number]>>([]); // Reference to alignment path
  const inputRef = useRef<HTMLInputElement>(null); // Reference to the file select HTML element 
  const frameSecRef = useRef<number>(0); // Reference to duration of each frame in seconds
  const csvDataRef = useRef<CSVRow[]>([]); // Array that contains CSV rows (CSV row == info on a note in a selected score)
  const [warpingPath, setWarpingPath] = useState<[number, number][]>([]); // State to store warping path when computed 
  const[frameSize, setFrameSize] = useState<number>(0); // State to store frame size of score follower 
  const[sampleRate, setSampleRate] = useState<number>(0); // State to store sample rate of score follower
  const [performanceComplete, setPerformanceComplete] = useState(false); // State to determine if plackback of a score is finished or not 
  const isWeb = Platform.OS === 'web'; // Boolean indicating if user is on website version or not

  // Unload the sound when the component unmounts to free up memory
  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync().catch(() => {});
      }
    };
  }, []);

  // Web versin of wav file upload 
  function onWebChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = parseWebWavFile(e);
    setLiveFile(file);
  }
  // Mobile version of wav file upload using DocumentPicker
  async function onMobilePress() {
    const file = await pickMobileWavFile();
    setLiveFile(file);
  }

  const runFollower = async () => {
    if (!score) return; // Do nothing if no score is selected 
    setProcessing(true); // Turn on processing boolean state
    setPerformanceComplete(false);

    try {
      
      const base = score.replace(/\.musicxml$/, ''); // Retrieve score name (".musicxml" removal)
      const refUri = isWeb ? `/${base}/baseline/instrument_0.wav` : Asset.fromModule(refAssetMap[base]).uri; // Path to reference wav file of selected score depending on web or expo go version

      console.log('-- Creating ScoreFollower...');

      // Initialize score follower instance (default parameters from ScoreFollower.tsx)
      followerRef.current = await ScoreFollower.create(refUri, FeaturesCls);
      console.log('-- ScoreFollower created');
 
      const follower = followerRef.current!; 
      const refFeatures = follower.ref.featuregram;
      // console.log("ref f : ",refFeatures)

      // Extract and set sample rate and window length from the ScoreFollower instance
      const { sr, winLen } = follower;
      setSampleRate(sr)
      setFrameSize(winLen)
      
      
      const frameSize = winLen; // Set framesize to window length property of scorefollower
      const sampleRate = sr; // Set sampleRate property of scorefollower
      frameSecRef.current = frameSize / sampleRate; // Duration of each frame in seconds

      let buffer: ArrayBuffer; // Define an array buffer
      console.log('-- Loading live audio buffer...');

      buffer = await fetch(liveFile.uri).then(r => r.arrayBuffer()); // Web and mobile version of initializing array buffer given live uri 

      console.log('-- Buffer loaded, byteLength=', buffer.byteLength);

      console.log('-- Decoding WAV buffer...');

      const result = await decode(buffer, { symmetric: true }); // Decode the WAV buffer into PCM audio data  - passed in symmetric = TRUE for better PCM samples when compared to the Python version

      console.log('-- Decoded: channels=', result.channelData.length, 'origSR=', result.sampleRate);

      let audioData = toMono(result.channelData); // Convert these PCM audio data to mono if needed 
      audioData = resampleAudio(audioData, result.sampleRate, sampleRate) // Resample the resulting audio data if needed
      audioDataRef.current = audioData;
      console.log('-- Audio data prepared, length=', audioData.length);

      console.log('-- Computing alignment path...');
      pathRef.current = precomputeAlignmentPath(audioData, frameSize, follower); // Compute alignment path 

      
    console.log('-- Alignment path length=', pathRef.current.length);


      // Get live features
      // const liveExtractor = new FeaturesCls(
      //   sr,
      //   winLen,
      //   audioData,  
      //   winLen     
      // );
      // const liveFeatures = liveExtractor.featuregram;
      // // console.log("live f : ",liveFeatures)
      

      // // Define distance function for Offline DTW
      // const censDistance = (a: number[], b: number[]) => 1 - dot(a, b);

      // // Run Offline DTW given full features
      // const dtw = new DynamicTimeWarping(
      //   refFeatures,    // Full ref features
      //   liveFeatures,   // Full live features
      //   censDistance // Distance function
      // );
      // const rawPath = dtw.getPath() // Get full path after run
      // console.log("raw path: ", rawPath) // Just print to console log for now
      

      // downloadFullPCM(audioDataRef.current)

      {
        const base = score.replace(/\.musicxml$/, ''); // Retrieve score name (".musicxml" removal)
        console.log('-- precompute CSV block: score=', score, '→ base=', base);
        const csvUri = isWeb ? `/${base}/baseline/aotgs_solo_100bpm.csv` : Asset.fromModule(csvAssetMap[base]).uri; // Path the CSV given score name (web and alternative expo go version)
        console.log('-- CSV URI =', csvUri);

        console.log('-- Calling loadCsvInfo(csvUri, isWeb=', isWeb, ')…');
        const rows = await loadCsvInfo(csvUri, isWeb); // Obtain rarray of csv rows (info on each note of score such as beat value, ref time when note is played, etc.)
        console.log('-- Loaded CSV rows count =', rows.length);

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

          const audioSamples = audioData; // use "live" for testing
          const scorePitches = csvDataRef.current.map(r => r.midi)
          const audioTimes = csvDataRef.current.map(r => r.liveTime);
          const intonation = calculateIntonation(
            audioSamples,
            scorePitches,
            audioTimes,
            sampleRate,
            1024,
            512
          );
          console.log(intonation)
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
            onChange={onWebChange}
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
          onPress={onMobilePress}
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