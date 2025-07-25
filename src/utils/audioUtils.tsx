import waveResampler from 'wave-resampler';

/**
 * Converts an array of Float32Array channel data into a single mono Float32Array.
 * If input is already mono (length === 1), returns the channel data unchanged.
 *
 * @param channelData - Array of Float32Array, one per channel
 * @returns A Float32Array containing the mono audio data
 */
export function toMono(channelData: Float32Array[]): Float32Array {
  // If already mono, just return the single channel
  if (channelData.length === 1) {
    return channelData[0];
  }

  const numChannels = channelData.length;
  const frameCount = channelData[0].length;
  const mono = new Float32Array(frameCount);

  for (let i = 0; i < frameCount; i++) {
    let sum = 0;
    for (let ch = 0; ch < numChannels; ch++) {
      sum += channelData[ch][i];
    }
    mono[i] = sum / numChannels;
  }

  return mono;
}

/**
 * Resamples a Float32Array of audio data from one sample rate to another.
 * If source and target rates are the same, returns the original data.
 *
 * @param audioData - The Float32Array of PCM samples
 * @param srcRate - The original sample rate of the audio data
 * @param destRate - The desired sample rate
 * @returns A Float32Array containing the resampled audio data
 */
export function resampleAudio(
  audioData: Float32Array,
  srcRate: number,
  destRate: number
): Float32Array {
  if (srcRate === destRate) {
    return audioData;
  }

  const resampled = waveResampler.resample(
    audioData,
    srcRate,
    destRate
  );

  return resampled instanceof Float32Array
    ? resampled
    : Float32Array.from(resampled as number[]);
}
/**
 * Download the first 1000 samples of `audioData` in Python‑style text format.
 */

export function downloadFullPCM(
    audioData: Float32Array, 
    filename = 'ts_first100_pcm.txt'
): void {
    // 1) Grab the first 1000 samples
    const slice100 = audioData.slice(0, 1000);

    // 2) Format like Python does
    const text = Array.from(slice100)
      .map(pythonFormat)
      .join('\n');

    // 3) Trigger download in browser
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

export function pythonFormat(
    v : number
): string {
    // Python prints "0.0" for zero
    if (Object.is(v, 0)) return '0.0';

    const absV = Math.abs(v);
    const expVal = Math.floor(Math.log10(absV));

    // Python repr/str uses exponential for exp < -4 or exp >= 17
    if (expVal < -4 || expVal >= 17) {
    // Generate a long exponential, then strip unneeded zeros
    let [mant, exp] = v.toExponential(16).split('e');

    // Trim trailing zeros from mantissa, then any stray dot
    mant = mant.replace(/(\.\d*?[1-9])0+$/, '$1').replace(/\.$/, '');

    // Normalize exponent sign and pad to 2 digits
    let sign = exp[0];
    let digits = exp.slice(1);
    if (sign !== '+' && sign !== '-') {
        // unlikely, but just in case
        digits = sign + digits;
        sign = '+';
    }
    if (digits.length < 2) digits = '0' + digits;

    return mant + 'e' + sign + digits;
    } else {
    // Fixed decimal: JS’s toString gives the shortest fixed repr for 1e‑4 ≤ |v| < 1e17
    return v.toString();
    }
  }