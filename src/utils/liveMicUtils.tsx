import { Platform } from "react-native";
import { CENSFeatures } from "../audio/FeaturesCENS";
import { ExpoMicProcessor } from "../audio/ExpoMicProcessor";

let audioCtx: AudioContext | null = null; // Declare a reference to the AudioContext, which manages all audio processing
let micStream: MediaStream | null = null; // Declare a reference to the MediaStream from the user's microphone

export const initWebAudio = async (
    setChroma: (vec: number[]) => void,
    chromaMaker: CENSFeatures
) => {
    try {
    micStream = await navigator.mediaDevices.getUserMedia({ audio: true }); // Request access to user's microphone
    audioCtx = new AudioContext(); // Create a new AudioContext for audio processing
    await audioCtx.audioWorklet.addModule('./utils/mic-processor.js'); // Load the custom AudioWorkletProcessor
    const source = audioCtx.createMediaStreamSource(micStream); // Create a source node from the microphone stream
    const workletNode = new AudioWorkletNode(audioCtx, 'mic-processor');  // Create an AudioWorkletNode linked to our custom 'mic-processor'
    source.connect(workletNode); // Connect the mic source to the worklet
    workletNode.connect(audioCtx.destination); // connect worklet to output 


    // Handle incoming audio chunks from the worklet
    workletNode.port.onmessage = (event) => {
        const audioChunk = event.data as number[];
        try {
        // Extract chroma features and update state
        const chromaResult = chromaMaker.insert(audioChunk);
        setChroma(chromaResult);
        } catch (e) {
        console.error('Chroma extraction error:', e);
        }
    };
    } catch (err) {
    console.error('Failed to initialize audio:', err);
    }
};

// Mobile version of intializing miccrophone (Uses ExpoMicProcessor)
export const initNativeAudio = async (
    setChroma: (vec: number[]) => void,
    processor: ExpoMicProcessor,
    chromaMaker: CENSFeatures
) => {
    try {
        await processor.init(); // ExpoMicProcessor intialization

        processor.onmessage = ({ data }) => { // Once we get buffer of size 4096
        const vec = chromaMaker.insert(Array.from(data));  // Insert with ChromaMaker to get chroma vector
        setChroma(vec); // Set chroma vector
        };

        await processor.start(); // Start recording 
    } catch (err) {
        console.error('Failed to initialize Native audio:', err);
    }
};

export function stopLiveAudio(processor: ExpoMicProcessor) {
  if (Platform.OS === "web") {
    if (micStream) {
      micStream.getTracks().forEach((t) => t.stop());
      micStream = null;
    }
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
  } else {
    if (processor) {
      processor.stop();
    }
  }
}