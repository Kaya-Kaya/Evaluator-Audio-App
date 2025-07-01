import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { decode } from 'wav-decoder';
import { ScoreFollower } from '../audio/ScoreFollower';

interface ScoreFollowerTestProps {
  score: string; // Selected score name
  dispatch: (action: { type: string; payload?: any }) => void; // Dispatch function used to update global state
  bpm?: number; // Optional BPM number
}

export default function ScoreFollowerTest({
  score,
  dispatch,
  bpm = 100, // Default BPM if not provided in props
}: ScoreFollowerTestProps) {

  const [processing, setProcessing] = useState(false); // Boolean for if score follower is running
  const [estimatedTime, setEstimatedTime] = useState(0); // Local state for storing estimated time
  const [estimatedBeat, setEstimatedBeat] = useState(0); // Local state for storing estimated beats

  const soundRef = useRef<Audio.Sound | null>(null); // Reference to Audio Component
  const followerRef = useRef<ScoreFollower | null>(null); // Reference to score follower instance
  const audioDataRef = useRef<Float32Array>(new Float32Array()); // Reference to decoded audio sample data
  const lastFrameRef = useRef<number>(-1); // Reference to last frame that was processed

  // Unload the sound when the component unmounts to free up memory
  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync().catch(() => {});
      }
    };
  }, []);

  const runFollower = async () => {
    if (!score) return; // Do nothing if no score is selected 
    setProcessing(true); // Turn on processing boolean state

    try {
      const base = score.replace(/\.musicxml$/, ''); // Retrieve score name (".musicxml" removal)
      const refUri = `/${base}/${bpm}bpm/instrument_0.wav`; // Path to reference wav file of selected score 
      const liveUri = `/${base}/${bpm + 10}bpm/instrument_0.wav`; // Path to live/prerecorded wav file of selected score 

      followerRef.current = await ScoreFollower.create(refUri); // Initialize score follower instance (default parameters from ScoreFollower.tsx)
      const follower = followerRef.current!; 
      const { sampleRate, winLength } = follower; // Extract sample rate and window length from the ScoreFollower instance
      const frameSize = winLength; // Set framesize to window length property of scorefollower

      const resp = await fetch(liveUri); // Fetch the live WAV audio file from the specified URI
      if (!resp.ok) throw new Error(`Fetch failed: ${resp.status}`); // Throw an error if the response is not successful
      const buffer = await resp.arrayBuffer(); // Read the response as an ArrayBuffer (binary data)
      const decoded = await decode(buffer); // Decode the WAV buffer into PCM audio data
      const ch0 = decoded.channelData[0]; // Extract the first audio channel (mono)
      const audioData = ch0 instanceof Float32Array ? ch0 : Float32Array.from(ch0); // Ensure the data is a Float32Array
      audioDataRef.current = audioData; // Store the decoded audio data in a ref for frame-by-frame access

      const hopMs = (frameSize / sampleRate) * 1000; // Calculate the hop size in milliseconds based on frame size and sample rate
      const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => { // Callback to handle audio playback status updates
        if (!status.isLoaded) return;  // Exit early if sound isn't loaded

        if (status.isPlaying) {

          // Convert current playback time from milliseconds to samples
          const playedMs = status.positionMillis;
          const playedSamples = (playedMs / 1000) * sampleRate;

          // Calculate the current audio frame index
          const frameIdx = Math.floor(playedSamples / frameSize);

          // Process only if the frame is new and within bounds
          if ( frameIdx !== lastFrameRef.current && frameIdx * frameSize < audioDataRef.current.length) {

            lastFrameRef.current = frameIdx; // Updat new last frame index

            // Extract the audio frame from the buffer
            let frame = audioDataRef.current.subarray(frameIdx * frameSize, frameIdx * frameSize + frameSize);

            // Pad the frame if it's shorter than expected
            if (frame.length < frameSize) {
              const pad = new Float32Array(frameSize);
              pad.set(frame);
              frame = pad;
            }

            // Pass the audio frame to the score follower and get estimated time
            const timeSec = follower.step(Array.from(frame));
            setEstimatedTime(timeSec);

            // Log current alignment indices (ref vs. live)
            const [refIdx, liveIdx] = follower.path[follower.path.length - 1];
            console.log(
              `Alignment path (indices, ref vs. live): (${refIdx}, ${liveIdx})`
            );

            // Convert time to musical beat and dispatch it
            const beatPos = (timeSec / 60) * bpm;
            setEstimatedBeat(beatPos);
            dispatch({ type: 'SET_ESTIMATED_BEAT', payload: beatPos });
          }
        }

        // Handle end of playback
        if (status.didJustFinish) {
          setProcessing(false); // Set processing boolean state to false (end of score follower run)
          console.log('Full alignment path:', follower.path); // Print the full alignment path for debugging/analysis
          soundRef.current?.setOnPlaybackStatusUpdate(null); // Remove the playback status listener
        }
      };

      // Create and load the sound object from the live audio URI
      const { sound } = await Audio.Sound.createAsync(
        { uri: liveUri }, // Audio source
        {
          shouldPlay: true, // Automatically start playback once loaded
          progressUpdateIntervalMillis: Math.floor(hopMs), // Set how often status updates are triggered (aligned to frame hop size)
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
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, processing && styles.disabledButton]}
        onPress={runFollower}
        disabled={processing}
      >
        <Text style={styles.buttonText}>
          {processing ? 'Running...' : 'Run Score Follower'}
        </Text>
      </TouchableOpacity>

      <View style={styles.status}>
        <Text style={styles.label}>
          Time: {estimatedTime.toFixed(2)} s → Beat: {estimatedBeat.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 12, padding: 10 },
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
});
