import React, { useState, useMemo } from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet, Text, ScrollView, Switch } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface TempoGraphProps {
  warpingPath: [number, number][]; // Array of [refIdx, liveIdx]
  refTempo: number;                 // Reference tempo in BPM
  beatsPerMeasure: number;          // Number of beats per measure
  scoreName: string;                // Title of the musical score
}

const SAMPLE_RATE = 44100;
const FRAME_SIZE = 4096;

// Bounds for BPM - made for BPM spikes
const MIN_BPM = 40;
const MAX_BPM = 240;

// Constant used for running average of measures
const SMOOTH_RADIUS = 1; 

const TempoGraph: React.FC<TempoGraphProps> = ({ warpingPath, refTempo, beatsPerMeasure, scoreName }) => {

  const [showGraph, setShowGraph] = useState(false); // Boolean for showing graph
  const [applySmoothing, setApplySmoothing] = useState(true); // Boolean for smoothing option

  // 1) Map DTW path -> fractional beats + live times
  const beatTimes = useMemo(
    () => warpingPath.map(([refIdx, liveIdx]) => {
      const refTimeSec  = (refIdx  * FRAME_SIZE) / SAMPLE_RATE; // Convert ref index into ref time
      const liveTimeSec = (liveIdx * FRAME_SIZE) / SAMPLE_RATE; // Convert live index into live time
      const refBeats    = (refTimeSec * refTempo) / 60; // Convert ref time into ref beats
      return { refBeats, liveTimeSec }; // Return ref beat paired with respective live time
    }),
    [warpingPath, refTempo]
  );

  // 2) Interpolate -> exact event time per integer beat
  const beatEventTimes = useMemo(() => {
    if (!beatTimes.length) return []; 
    const events: number[] = []; // Stores live time for each whole beat
    const lastBeat = Math.floor(beatTimes[beatTimes.length - 1].refBeats); // Find max ref beat stored
    let idx = 0; // Initialize iterator

    for (let b = 0; b <= lastBeat; b++) { // Go from beat 0 to max ref beat
      while (idx < beatTimes.length && beatTimes[idx].refBeats < b) idx++; // Go to ref beat with live time pair that is just after beat b
      if (idx < beatTimes.length) {

        const curr = beatTimes[idx]; // Current ref beat - live time pair
        const prev = idx > 0 ? beatTimes[idx - 1] : curr; // Previous pair of current (pair with ref beat just less than beat b)

        const beatDiff = curr.refBeats - prev.refBeats; // Calculate ref beat difference
        const timeDiff = curr.liveTimeSec - prev.liveTimeSec; // Calculate live time difference

        const ratio    = beatDiff > 0 ? (b - prev.refBeats) / beatDiff : 0; // Get ratio needed for finding exact live time
        events.push(prev.liveTimeSec + ratio * timeDiff); // Find the exact live time for that whole beat 
      }
    }
    return events;
  }, [beatTimes]);

  // 3) Compute raw tempo per measure
  const rawTempoByMeasure = useMemo(() => {

    const events = beatEventTimes; // Array of live times matched to each integer beat i
    const count  = Math.floor(events.length / beatsPerMeasure); // Calculate how many measures based on max beats / beats per measure
    const arr: { measure: number; tempo: number }[] = []; // Data structure used to store BPM for each measure number 

    for (let m = 0; m < count; m++) { // Iterate through each measure 

      const t0 = events[m * beatsPerMeasure]; // Find live time that the first note of that measure is played 
      const t1 = events[(m + 1) * beatsPerMeasure]; // Find live time that the first note of the next measure is played

      if (t1 > t0) {
        const bpm = (beatsPerMeasure / (t1 - t0)) * 60; // Calculate BPM based on beats per measure over time of measure times 60
        arr.push({ measure: m + 1, tempo: Math.min(Math.max(bpm, MIN_BPM), MAX_BPM) }); // Store BPM of measure in data structure 
      }
    }
    return arr;
  }, [beatEventTimes, beatsPerMeasure]);

  // 4) Smooth tempo curve
  const smoothTempo = useMemo(() => {
    const bpms = rawTempoByMeasure.map(m => m.tempo); // Get BPMs for each measure
    return bpms.map((_, i) => { // Go through each BPM 
      const start = Math.max(0, i - SMOOTH_RADIUS); // Find index of BPM of the measure before it
      const end   = Math.min(bpms.length, i + SMOOTH_RADIUS + 1); // Find index of BPM of the measure ahead of it
      const window = bpms.slice(start, end); // Array of 3 BPM elements 
      const avg = window.reduce((sum, v) => sum + v, 0) / window.length; // Find average of the 3
      return avg; // Return avg as BPM of current measure
    });
  }, [rawTempoByMeasure]);

  // 5) Overall tempo
  const overallTempo = useMemo(() => {
    if (beatEventTimes.length < 2) return 0;

    const totalBeats = beatEventTimes.length - 1; // Get total beats 
    const totalTime  = beatEventTimes[beatEventTimes.length - 1] - beatEventTimes[0]; // Get total time 
    return totalTime ? (totalBeats / totalTime) * 60 : 0; // Calculate overall BPM based on (total beats / total time) * 60

  }, [beatEventTimes]);

  const labels = rawTempoByMeasure.map(m => m.measure.toString()); // X axis labels

  const bpms   = applySmoothing ? smoothTempo : rawTempoByMeasure.map(m => m.tempo); // Get correct BPM values per measure based on if smoothing option is on or not
  const data   = bpms.map(t => Number(t.toFixed(1))); // Round those values to 1 decimal place

  const screenW = Dimensions.get('window').width; // Get width of screen
  const chartW  = Math.max(screenW - 32, labels.length * 40); // Build chart's min width based on that value

  return (
    <View style={styles.container}>

      {/* Button for showing / hiding tempo by measure graph */}
      <TouchableOpacity style={styles.button} onPress={() => setShowGraph(v => !v)}>
        <Text style={styles.buttonText}>{showGraph ? 'Hide Tempo Graph' : 'Show Tempo Graph'}</Text>
      </TouchableOpacity>

      {/* Tempo by measure graph */}
      {showGraph && (
        <>
          {/* Smoothing Filter */}
          <View style={styles.filterContainer}>
            <Text style={styles.filterLabel}>Smoothing:</Text>
            <Switch value={applySmoothing} onValueChange={setApplySmoothing} />
            <Text style={styles.filterLabel}>{applySmoothing ? 'On' : 'Off'}</Text>
          </View>

          {/* Score info - ref tempo, overall soloist tempo, etc.*/}
          <View style={styles.chartWrapper}>
            <Text style={styles.title}>{`${scoreName} — Tempo by Measure`}</Text>
            <Text style={styles.infoText}>Ref Tempo: {refTempo.toFixed(1)} BPM</Text>
            <Text style={styles.infoText}>Overall: {overallTempo.toFixed(1)} BPM</Text>
            <View style={styles.chartArea}>


              {/* Y label */}
              <Text style={styles.yAxisLabel}>Tempo (BPM)</Text>

              {/* Actual chart with horizontal scroll */}
              <ScrollView horizontal showsHorizontalScrollIndicator>
                <LineChart
                  data={{ labels, datasets: [{ data }] }}
                  width={chartW}
                  height={240}
                  chartConfig={chartConfig}
                  bezier
                  style={styles.chart}
                  fromZero
                  yLabelsOffset={10}
                  xLabelsOffset={-10}
                  renderDotContent={({ x, y, index }) => (
                    <Text key={index} style={[styles.dotLabel, { left: x - 12, top: y - 16 }]}>
                      {data[index]}
                    </Text>
                  )}
                />
              </ScrollView>
            </View>
            {/* X label*/}
            <Text style={styles.xAxisLabel}>Measure Number</Text>
          </View>
        </>
      )}
    </View>
  );
};

// Chart configuration info 
const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(30,144,255,${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  propsForDots: { r: '4', strokeWidth: '1', stroke: '#1e90ff' }
};
// Styles for UI
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 8, 
    backgroundColor: '#fff'
  },
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#2C3E50',
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  filterLabel: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  chartWrapper: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  chartArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yAxisLabel: {
    transform: [{ rotate: '-90deg' }],
    fontSize: 8,
    fontWeight: 'bold',
    marginLeft: -12,
  },
  chart: {
    borderRadius: 12,
  },
  dotLabel: {
    position: 'absolute',
    fontSize: 8,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 1,
    borderRadius: 3,
  },
  xAxisLabel: {
    marginTop: 4,
    fontSize: 8,
    fontWeight: 'bold',
  },
});

export default TempoGraph;
