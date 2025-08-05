import { ScoreFollower } from "../audio/ScoreFollower";

/**
 * Given a DTW warping path and reference audio timestamps, compute estimated live audio timestamps.
 *
 * @param warpingPath - Array of [refFrameIndex, liveFrameIndex] pairs from dynamic time warping
 * @param frameSec - Duration of each frame in seconds (step size)
 * @param refTimes - Array of reference audio timestamps (in seconds)
 * @returns Array of estimated live audio timestamps aligned to the reference
 */
export const calculateWarpedTimes = (
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


/**
 * Computes the full dynamic time warping alignment path for the given audio data.
 *
 * @param audioData - Mono PCM audio data as Float32Array
 * @param frameSize - Number of samples per frame (window length)
 * @param follower - Initialized ScoreFollower instance
 * @returns An array of [refFrameIndex, liveFrameIndex] pairs representing the alignment path
 */
export function precomputeAlignmentPath(
  audioData: Float32Array,
  frameSize: number,
  follower: ScoreFollower
): [number, number][] {
  const totalFrames = Math.ceil(audioData.length / frameSize);
  console.log(`precomputeAlignmentPath: totalFrames = ${totalFrames}, frameSize = ${frameSize}`);

  const path: [number, number][] = [];

  for (let i = 0; i < totalFrames; i++) {
    const start = i * frameSize;
    let frame = audioData.subarray(start, start + frameSize);

    // Pad the frame if it's shorter than expected
    if (frame.length < frameSize) {
      const pad = new Float32Array(frameSize);
      pad.set(frame);
      frame = pad;
    }

    console.log(`    Calling follower.step() on frame ${i}`);

    // Step the follower with a plain number[]
     const timeSec = follower.step(Array.from(frame));
    console.log(`    → step returned timeSec = ${timeSec.toFixed(3)}s`);

    // Capture the last updated warping step
    const last = follower.path[follower.path.length - 1] as [number, number];
    console.log(`    Latest path entry [refIdx, liveIdx] = [${last[0]}, ${last[1]}]`);

    path.push(last);
  }
  console.log(`precomputeAlignmentPath: completed, path length = ${path.length}`);

  return path;
}
