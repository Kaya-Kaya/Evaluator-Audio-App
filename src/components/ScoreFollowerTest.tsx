import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { ScoreFollower } from '../audio/ScoreFollower';
import { file_to_np_cens } from '../audio/features';
import { Audio } from 'expo-av';

// Paths to public WAV assets and tempo
const REF_AUDIO_PATH = '/air_on_the_g_string/100bpm/instrument_0.wav';
const LIVE_AUDIO_PATH = '/air_on_the_g_string/110bpm/instrument_0.wav';
const BPM = 100; // reference tempo in beats per minute

export default function ScoreFollowerTest({ state, dispatch }: { state: { estimatedBeat: number }, dispatch: Function }) {
  const [estimatedTime, setEstimatedTime] = useState<number>(0);
  const [playbackSound, setPlaybackSound] = useState<Audio.Sound | null>(null);
  const [processing, setProcessing] = useState<boolean>(false);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      playbackSound?.unloadAsync();
    };
  }, [playbackSound]);

  const runFollower = async () => {
    try {
      setProcessing(true);
      console.log('[ScoreFollowerTest] Loading reference audio features...');
      const follower = await ScoreFollower.create(REF_AUDIO_PATH);
      console.log('[ScoreFollowerTest] Reference loaded.');

      console.log('[ScoreFollowerTest] Loading live audio features...');
      const rawFeatures = await file_to_np_cens(LIVE_AUDIO_PATH, {
        sr: follower.sampleRate,
        n_fft: follower.winLength,
        ref_hop_len: follower.winLength,
      });
      const M = rawFeatures[0]?.length || 0;
      const liveFeatures = Array.from({ length: M }, (_, i) => rawFeatures.map(row => row[i]));
      console.log('[ScoreFollowerTest] Frames count:', liveFeatures.length);

      (follower as any).getChroma = (chroma: number[]) => chroma;

      console.log('[ScoreFollowerTest] Starting playback and follower...');
      const { sound } = await Audio.Sound.createAsync(
        { uri: LIVE_AUDIO_PATH },
        { shouldPlay: true }
      );
      setPlaybackSound(sound);

      const hopMs = (follower.winLength / follower.sampleRate) * 1000;
      let lastIdx = -1;

      sound.setOnPlaybackStatusUpdate(status => {
        if (!status.isLoaded) return;
        if (status.isPlaying) {
          const idx = Math.floor(status.positionMillis / hopMs);
          if (idx !== lastIdx && idx < liveFeatures.length) {
            lastIdx = idx;
            const chromaFrame = liveFeatures[idx];
            const timeSec = follower.step(chromaFrame);
            setEstimatedTime(timeSec);
            // compute beat position
            const beatPos = timeSec * (BPM / 60);
            dispatch({ type: 'SET_ESTIMATED_BEAT', payload: beatPos });
            console.log(`[Frame ${idx}] Time: ${timeSec.toFixed(3)}s, Beat: ${beatPos.toFixed(2)}`);
          }
        }
        if (status.didJustFinish) {
          console.log('[ScoreFollowerTest] Playback finished');
          setProcessing(false);
          sound.setOnPlaybackStatusUpdate(null);
        }
      });

    } catch (err) {
      console.error('[ScoreFollowerTest] Error:', err);
      setProcessing(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button
        title={processing ? 'Listening...' : 'Run Score Follower'}
        onPress={runFollower}
        disabled={processing}
      />
      <Text style={{ marginTop: 10, fontSize: 16 }}>
        Estimated Reference Time: {estimatedTime.toFixed(2)}s
      </Text>
      <Text style={{ marginTop: 5, fontSize: 16 }}>
        Estimated Reference Beat: {(state.estimatedBeat ?? 0).toFixed(2)}
      </Text>
      <Text style={{ marginTop: 5, fontSize: 14, fontStyle: 'italic' }}>
        Live audio playing; updates reflect current alignment.
      </Text>
    </View>
  );
}
