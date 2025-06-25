import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { ScoreFollower } from '../audio/ScoreFollower';
import { file_to_np_cens } from '../audio/features';

interface ScoreFollowerProps {
  score: string;
  dispatch: Function;
  bpm?: number;
}

export default function ScoreFollowerTest({
  score,
  dispatch,
  bpm = 100
}: ScoreFollowerProps) {
  const [processing, setProcessing] = useState(false);
  const [estimatedBeat, setEstimatedBeat] = useState<number>(0);
  const [estimatedTime, setEstimatedTime] = useState<number>(0);

  // clean up audio when unmount
  useEffect(() => {
    return () => {
    };
  }, []);

  const runFollower = async () => {
    if (!score) return;
    setProcessing(true);

    const base = score.replace(/\.musicxml$/, '');
    const refUri = `/${base}/${bpm}bpm/instrument_0.wav`;
    const liveUri = `/${base}/${bpm + 10}bpm/instrument_0.wav`;

    try {
      const follower = await ScoreFollower.create(refUri);
      const raw = await file_to_np_cens(liveUri, {
        sr: follower.sampleRate,
        n_fft: follower.winLength,
        ref_hop_len: follower.winLength,
      });
      const M = raw[0]?.length || 0;
      const liveFeatures = Array.from({ length: M }, (_, i) => raw.map(row => row[i]));

      (follower as any).getChroma = (c: number[]) => c;

      // kick off playback
      const { sound } = await Audio.Sound.createAsync(
        { uri: liveUri },
        { shouldPlay: true }
      );

      const hopMs = (follower.winLength / follower.sampleRate) * 1000;
      let lastIdx = -1;

      sound.setOnPlaybackStatusUpdate(status => {
        if (!status.isLoaded) return;
        if (status.isPlaying) {
          const idx = Math.floor(status.positionMillis / hopMs);
          if (idx !== lastIdx && idx < liveFeatures.length) {
            lastIdx = idx;
            const timeSec = follower.step(liveFeatures[idx]);
            setEstimatedTime(timeSec);
            const beatPos = timeSec * (bpm / 60);
            setEstimatedBeat(beatPos);
            dispatch({ type: 'SET_ESTIMATED_BEAT', payload: beatPos });
          }
        }
        if (status.didJustFinish) {
          sound.setOnPlaybackStatusUpdate(null);
          setProcessing(false);
        }
      });
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

      <Text style={styles.label}>
        Time: {estimatedTime.toFixed(2)}s {'→'} Beats: {estimatedBeat.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  button: {
    padding: 10,
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
  label: {
    marginTop: 8,
    fontSize: 16,
  },
});
