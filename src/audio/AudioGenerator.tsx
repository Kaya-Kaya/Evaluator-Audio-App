import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

const AudioGenerator: React.FC<{ midiModule: number | null }> = ({ midiModule }) => { // MIDI module reference number passed in as prop (maps to MIDI file)

  const webviewRef = useRef<WebView>(null);  // Ref to the hidden WebView so we can post messages into it
  const [base64, setBase64] = useState<string | null>(null);  // Holds our Base64-encoded MIDI data once loaded


  // The HTML/JS payload for the WebView:
  // - Loads Soundfont-Player and Tonejs as scripts
  // - Creates an AudioContext
  // - Loads a 'violin' instrument using SoundFont
  // - Waits for messages of type 'play-midi', decodes the MIDI and finds the lowest-pitch track to play
  const html = `
    <!DOCTYPE html>
    <html>
      <head><meta name="viewport" content="initial-scale=1.0" /></head>
      <body>
        <script src="https://unpkg.com/soundfont-player/dist/soundfont-player.js"></script>
        <script src="https://unpkg.com/@tonejs/midi"></script>
        <script>
          (function() {

            // Create native Web Audio context
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            let instr;

            // Load a violin SoundFont
            Soundfont.instrument(ctx, 'violin').then(i => {
              instr = i;

              // Notify React Native that its ready
              window.ReactNativeWebView.postMessage('ready');
            });

            // Handle incoming play requests
            function handleMessage(event) {

              try {
                const msg = JSON.parse(event.data); // Parse the incoming message into a JavaScript object

                if (msg.type === 'play-midi' && instr) { 

                  const bin = atob(msg.data); // Decode Base64 to binary MIDI data
                  const buf = new Uint8Array(bin.length); // New byte buffer with same size as binary MIDI data

                  // Convert each character in the Base64-decoded string to its corresponding byte value
                  for (let i = 0; i < bin.length; i++) {
                    buf[i] = bin.charCodeAt(i);
                  }

                  // Create a MIDI object by parsing the binary buffer using the tonejs library
                  const midi = new Midi(buf.buffer);

                  // Compute average pitch per track
                  const tracks = midi.tracks.map(t => ({
                    track: t,
                    avg: t.notes.length
                      ? t.notes.reduce((sum, n) => sum + n.midi, 0) / t.notes.length
                      : Infinity
                  }));

                  // Sort in ascending order and pick the first track 
                  tracks.sort((a, b) => a.avg - b.avg);
                  const bottom = tracks[0].track;

                  // Schedule each note to play (start with small delay)
                  const now = ctx.currentTime + .1; 
                  bottom.notes.forEach(n =>
                    instr.play(n.name, now + n.time, { duration: n.duration })
                  );
                }
              } catch (e) {
                console.error(e);
              }
            }

            // Listen for both React Native and window.postMessage
            document.addEventListener('message', handleMessage);
            window.addEventListener('message', handleMessage);
          })();
        </script>
      </body>
    </html>
  `;

  // Runs on component mounts or midiModule changes:
  useEffect(() => {

    if (!midiModule) return; // No reference to MIDI file, do nothing

    // Define async function to load and encode the MIDI file
    const loadMidi = async () => {
      const asset = Asset.fromModule(midiModule); // Gets MIDI asset reference
      await asset.downloadAsync(); // Makes the MIDI file is available on disk
      const uri = asset.localUri || asset.uri; // Gets the local URI but falls back to remote URI if needed
      // Read the MIDI file from the device's file system and encode it as a Base64 string. (Sent the WebView)
      const b64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setBase64(b64); // Save the Base64-encoded string in component state
    };

    loadMidi(); // Call function

  }, [midiModule]);

  // Send the Base64-encoded MIDI into the WebView for playback
  const handlePlay = () => {
    if (!base64) return; 
    webviewRef.current?.postMessage(
      JSON.stringify({ type: 'play-midi', data: base64 })
    );
  };

  // While Base64 is loading, render nothing
  if (!base64) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Play button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: "#2C3E50" }]} onPress={handlePlay}>
        <Text style={styles.button_text}>Play Bottom Voice</Text>
      </TouchableOpacity>      
    
      {/* Hidden WebView doing the audio work */}
      <WebView
        ref={webviewRef}                           // Allows sending messages to the WebView (e.g., play MIDI)
        originWhitelist={['*']}                    // Allow loading any origin (required for local HTML string)
        source={{ html }}                          // Inject the HTML audio engine defined in the component
        allowsInlineMediaPlayback                  // Enable inline audio playback without fullscreen controls
        mediaPlaybackRequiresUserAction={false}    // Allow audio to play automatically without user interaction
        mixedContentMode="always"                  // Allow both HTTP and HTTPS content 
        style={styles.webview}                     // Keep the WebView hidden (0x0 and transparent)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,           
  },
  webview: {
    width: 0,
    height: 0,
    opacity: 0,           
  },
    // Primary button styles
  button: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
    // Shadow style found online
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  // Primary button text
  button_text: {
    textAlign: "center",
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default AudioGenerator;
