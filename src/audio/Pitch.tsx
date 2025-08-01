import { Amdf, Asdf, Yin } from '@dipscope/pitch-detector';
import { PitchDetector } from 'pitchy'

const Pitchfinder = require("pitchfinder");
export async function testPitches(audioSamples: Float32Array, sampleRate: number, winLen: number, hopLen: number = winLen) {
    const pitchfinder_amdf = Pitchfinder.AMDF({ sampleRate: sampleRate, minFrequency: 60, maxFrequency: 800 });
    const pitchfinder_yin = Pitchfinder.YIN({ sampleRate: sampleRate, threshold: 0.15, probabilityThreshold: 0.0 });
    const pitchfinder_dwvlt = Pitchfinder.DynamicWavelet({ sampleRate: sampleRate });

    const pitchy_mcleod = PitchDetector.forFloat32Array(winLen)

    const dipscope_amdf = new Amdf({ minFrequency: 60, maxFrequency: 800, threshold: 0.2 });
    const dipscope_asdf = new Asdf({ minFrequency: 60, maxFrequency: 800, threshold: 0.2 });
    const dipscope_yin = new Yin({ bufferSize: winLen, threshold: 0.15 });
    
    const f0Estimations = {
        pitchfinder_amdf: [],
        pitchfinder_yin: [],
        pitchfinder_dwvlt: [],
        pitchy_mcleod: [],
        dipscope_amdf: [],
        dipscope_asdf: [],
        dipscope_yin: [],
    }
    
    let numWins = Math.floor((audioSamples.length - winLen) / hopLen) + 1;
    if (numWins < 0) numWins = 0;        
    console.log(`${audioSamples.length} -> ${numWins}`)

    for (let m = 0; m < numWins; m++) {
        const position = m * hopLen;
        const window = audioSamples.slice(position, position + winLen);
        const ts_data = detectPitches(window);
    }

    console.log(f0Estimations)
    function detectPitches(window: Float32Array){ 
        f0Estimations.pitchfinder_amdf.push(pitchfinder_amdf(window));
        f0Estimations.pitchfinder_dwvlt.push(pitchfinder_dwvlt(window));
        f0Estimations.pitchfinder_yin.push(pitchfinder_yin(window));
        const [mcleodFrequency, mcleodFrequencyClarity] = pitchy_mcleod.findPitch(window, sampleRate);
        f0Estimations.pitchy_mcleod.push(mcleodFrequency)
        f0Estimations.dipscope_amdf.push(dipscope_amdf.detect(window, sampleRate));
        f0Estimations.dipscope_asdf.push(dipscope_asdf.detect(window, sampleRate));
        f0Estimations.dipscope_yin.push(dipscope_yin.detect(window, sampleRate));
    }
}