import { PitchDetector } from 'pitchy'

const OCTAVE_OFF_THRESHOLD = 2;
const SEMITONE_THRESHOLD = 2;

function listMedian(numbers: number[]): number | null {
    if (numbers.length === 0) return null;

    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

function hzToMidi(frequency: number): number {
  if (frequency <= 0) {
    throw new Error("Frequency must be a positive number.");
  }

  const midi = 69 + 12 * Math.log2(frequency / 440);
  return midi;
}

function calculateF0s(audioSamples: Float32Array, sampleRate: number, winLen: number, hopLen: number = winLen) {
    const mcleod = PitchDetector.forFloat32Array(winLen);

    let numWins = Math.floor((audioSamples.length - winLen) / hopLen) + 1;
    if (numWins < 0) numWins = 0;        
    console.log(`${audioSamples.length} -> ${numWins}`);

    const f0s: number[] = [];
    for (let m = 0; m < numWins; m++) {
        const position = m * hopLen;
        const window = audioSamples.slice(position, position + winLen);

        const [mcleodFrequency, mcleodFrequencyClarity] = mcleod.findPitch(window, sampleRate);
        f0s.push(mcleodFrequency);
    }

    return f0s;
}

function estimatePitchesAtTimestamps(
    tsList: number[],
    pitches: number[],
    scorePitches: number[],
    sampleRate: number,
    hopLength: number,
    logging: boolean) {
    
    // Convert timestamp -> sample no., sample no. -> window no. using hop len
    const _windowNums = tsList.map((ts) => Math.floor((ts * sampleRate) / hopLength));
    
    const estimatedPitches = []
    for (let idx = 0; idx < tsList.length; idx++) {
        const windowNum = _windowNums[idx];
        const directPitch = pitches[windowNum];
        const scorePitch = scorePitches[idx];
        
        let aggregateSize = 10
        if (idx + 1 < _windowNums.length) {
            const nxtWinNum = _windowNums[idx + 1];
            aggregateSize = Math.floor((nxtWinNum - windowNum) / 2);
        }
        if (windowNum + aggregateSize > pitches.length) {
            aggregateSize = pitches.length - windowNum;
        }

        const rawAggregate = pitches.slice(windowNum, windowNum + aggregateSize)
        let diffAggregate = rawAggregate.map((candidate) => {
            if (isNaN(candidate)) return undefined;
            
            let diff = candidate - scorePitch;
            if (Math.abs(diff) > 12) {
                if (Math.floor(diff / 12) > OCTAVE_OFF_THRESHOLD) return undefined;
                diff = diff % 12; 
            }

            if (diff > SEMITONE_THRESHOLD) return undefined;   
            diffAggregate.push(diff);
        });

        diffAggregate = diffAggregate.filter(element => element !== undefined);
        const pitchEstimate = scorePitches[idx] + listMedian(diffAggregate);

        if (logging) {
            console.log(`Pitch #${idx}: Window num: ${windowNum} -> Direct Pitch: ${directPitch}`)
            console.log(`Median ${diffAggregate}, Aggr ${diffAggregate}`)
            console.log(`Score Pitch: `, scorePitches[idx])
            console.log(`... Aggregate length ${aggregateSize}, Median /${pitchEstimate}`)
        }

        estimatedPitches.push(pitchEstimate);
    }

    return estimatedPitches;
}

export function calculateIntonation(
    audioSamples: Float32Array,
    csvDataRef,
    sampleRate: number,
    winLen: number,
    hopLen: number = winLen
) {
    const refTimes = csvDataRef.current.map(r => r.refTime);
    let refPitches = calculateF0s(audioSamples, sampleRate, winLen, hopLen);
    refPitches = refPitches.map(frq => hzToMidi(frq));
    const scorePitches = csvDataRef.current.map(r => r.midi);
    
    return estimatePitchesAtTimestamps(
        refTimes,
        refPitches,
        scorePitches,
        sampleRate,
        hopLen,
        true,
    );
}