import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Platform, useWindowDimensions} from "react-native";
import { useRef, useEffect, useState} from "react";
import { Cursor, OpenSheetMusicDisplay, Fraction, SourceMeasure } from "opensheetmusicdisplay";
import Icon from "react-native-vector-icons/FontAwesome";
import scoresData from "../musicxml/scores"; // Local mapping of score filenames to XML content
import { WebView } from "react-native-webview";
import AudioGenerator from "../audio/AudioGenerator";
import React from "react";
export default function ScoreDisplay({
  state,
  dispatch,
}: {
  state: any;
  dispatch: any;
}) {
  
  // Web-only refs
  const osmContainerRef = useRef<HTMLDivElement | null>(null); // Reference for the SVG container
  // Create refs to the cursor and to the OSDiv
  const cursorRef = useRef<Cursor | null>(null);
  const osdRef = useRef<OpenSheetMusicDisplay | null>(null);

  // Native-only ref (Used to inject html code into since OSMD is only supported through browser)
  const webviewRef = useRef<WebView>(null);

  const scrollViewRef = useRef<ScrollView>(null); // reference to scroll view component
  const scrollPositionRef = useRef<number>(0); // ref to keep track of current y position of scroll view (used ref instead of state to prevent rerender when scroll)
  const [steps, setSteps] = useState<string>(""); // state for declaring number of intended cursor iterations
  const [speed, setSpeed] = useState<string>(""); // state for speed of cursor update
  const movedBeats = useRef<number>(0); // ref to store current beat position (used ref instead of state to prevent multiple refreshes)
  const animRef = useRef<number | null>(null);; // ref to store current animation id 
  const overshootBeats = useRef<number>(0);

  const { width, height } = useWindowDimensions()
  const isSmallScreen = width < 960;


  const moveCursorByBeats = () => {
    const targetBeats = parseFloat(steps);

    // cancel any previous animation frame before starting a new one
    if (animRef.current !== null) {
      cancelAnimationFrame(animRef.current);
    }

    // Mobile approach
    // if (Platform.OS !== "web") {
    //   if (!webviewRef.current) {
    //     console.error("WebView not initialized.");
    //     return;
    //   }

    //   const script = `
    //     (function() {
    //       const osd = window.osm;
    //       const cursor = window.cursor;
    //       if (!osd.IsReadyToRender()) return;

    //       const measures = osd.GraphicSheet.MeasureList;
    //       if (!measures.length || !measures[0].length) return;
    //       const denom = measures[0][0].parentSourceMeasure.ActiveTimeSignature.denominator;

    //       // Compute current absolute beats under cursor
    //       let initialBeats = 0;
    //       const init = cursor.VoicesUnderCursor(osd.Sheet.Instruments[0]);
    //       if (init.length && init[0].Notes.length) {
    //         const len = init[0].Notes[0].Length;
    //         const num = len.Numerator === 0 ? 1 : len.Numerator;
    //         initialBeats = (num / len.Denominator) * denom;
    //       }
    //       console.log('   initialBeats:', initialBeats.toFixed(3));

    //       const toMove = Math.max(0, ${targetBeats} - initialBeats);
    //       console.log('   toMove:', toMove.toFixed(3), '(targetBeats - initialBeats)');

    //       let moved = 0;

    //       function stepFn() {
    //         console.log(' >> stepFn()', { moved, toMove });
    //         if (moved >= toMove) {
    //           console.log('reached target beats:', moved.toFixed(3));
    //           osd.render();
    //           return;
    //         }
    //         cursor.next();
    //         const cur = cursor.VoicesUnderCursor(osd.Sheet.Instruments[0]);
    //         let delta = 0;
    //         if (cur.length && cur[0].Notes.length) {
    //           const len = cur[0].Notes[0].Length;
    //           const num = len.Numerator === 0 ? 1 : len.Numerator;
    //           delta = (num / len.Denominator) * denom;
    //         }
    //         console.log('    next note delta:', delta.toFixed(3));
    //         moved += delta;
    //         console.log('    moved now:', moved.toFixed(3));
    //         osd.render();
    //         setTimeout(stepFn, ${parseInt(speed)});
    //       }
    //       stepFn();
    //     })(); true;
    //   `;
    //   webviewRef.current.injectJavaScript(script);
    //   return;
    // }

    // --- WEB branch ---
    if (!osdRef.current!.IsReadyToRender()) {
      //  Make sure the OSD system is ready before moving the cursor
      console.warn("Please call load() and render() before stepping cursor.");
      return;
    }

    // Get the list of measures from the rendered music sheet
    const measures = osdRef.current!.GraphicSheet.MeasureList;
    // Exit if no measures are found
    if (!measures.length || !measures[0].length) return;

    // Get the denominator of the current time signature (e.g., 4 for 4/4)
    const denom = measures[0][0].parentSourceMeasure.ActiveTimeSignature!.denominator;

    let initialBeats = movedBeats.current;

    // Get the voices currently under the cursor for the first instrument (only 1 instrument - Evaluator)
    if (movedBeats.current === 0) {
      const init = cursorRef.current!.VoicesUnderCursor(
      osdRef.current!.Sheet.Instruments[0]
      );
      if (init.length && init[0].Notes.length) {
        const len = init[0].Notes[0].Length as Fraction;
        const num = len.Numerator === 0 ? 1 : len.Numerator;
        initialBeats = (num / len.Denominator) * denom;
      }
    }
    movedBeats.current = initialBeats;

    // Calculate how many beats we need to move forward
    const toMove = Math.max(0, targetBeats);

    // Initialize moved beats from React state (current beat position)
    let moved = movedBeats.current + overshootBeats.current;
    overshootBeats.current = 0;

    // Recursive function to advance the cursor step-by-step
    const stepFn = () => {

      // Stop if we've moved enough beats
      if (moved >= toMove) {
        const leftover = moved - toMove
        overshootBeats.current = leftover;
        movedBeats.current = toMove;
        osdRef.current!.render(); // Re-render the music sheet
        return;
      }

      // Move the cursor to the next note
      cursorRef.current!.next();

      // Get the new note under the cursor
      const cur = cursorRef.current!.VoicesUnderCursor(
        osdRef.current!.Sheet.Instruments[0]
      );

      let delta = 0;
      // If there's a note, compute how many beats it represents
      if (cur.length && cur[0].Notes.length) {
        const len = cur[0].Notes[0].Length as Fraction;
        const num = len.Numerator === 0 ? 1 : len.Numerator;
        delta = (num / len.Denominator) * denom;
      }else {
      console.log("No note under cursor.");
    }

      moved += delta; // Accumulate the moved beats
      movedBeats.current = moved; // Update state to reflect progress

      osdRef.current!.render(); // Re-render to reflect the cursor's new position

      animRef.current = requestAnimationFrame(stepFn); // Schedule a new animation frame and store its ID (better alternative to setTimeout)
    };
    stepFn(); // Start the step loop
  };

  useEffect(() => {
    const beat = state.estimatedBeat;
    if (typeof beat !== "number") return;  // Only proceed if beat is valid
    setSteps(String(beat));                // Update step queue when beat changes
  }, [state.estimatedBeat]);

  useEffect(() => {
    if (steps === "") return;       // chained useeffect to have steps state updated properly before running the cursor movement logic
    moveCursorByBeats();            // cursor movement using the latest step & speed
  }, [steps, speed]);


  // Build HTML for native WebView, exposing window.osm & window.cursor for moving cursor logic for mobile when injecting the js script above
  const buildHtml = (xml: string) => {
    const escaped = xml
      // Escape every backtick so that embedding this string in a JS template literal
      // won’t accidentally terminate the literal early.
      .replace(/`/g, "\\`")
      // Escape every closing </script> tag so that, when injected into our <script> block,
      // it can’t break out of that block and end our script prematurely.
      .replace(/<\/script>/g, "<\\/script>"); 
      return `<!DOCTYPE html>
                <html>
                  <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  </head>
                  <body>
                    <div id="osmd-container"></div>
                    <script src="https://unpkg.com/opensheetmusicdisplay@latest/build/opensheetmusicdisplay.min.js"></script>
                    <script>
                      (async () => {
                        const osm = new opensheetmusicdisplay.OpenSheetMusicDisplay(
                          document.getElementById('osmd-container'),
                          { autoResize: true, followCursor: true }
                        );
                        try {
                          await osm.load(\`${escaped}\`);
                          osm.render();
                          // expose for RN->WebView injection
                          window.osm = osm;
                          window.osm.zoom = .45;
                          window.cursor = osm.cursor;
                          window.cursor.show();
                          window.cursor.CursorOptions = {
                            ...window.cursor.CursorOptions,
                            follow: true
                          };
                          window.ReactNativeWebView.postMessage(JSON.stringify({
                            type: 'loaded',
                            time_signature: window.cursor.Iterator.CurrentMeasure.ActiveTimeSignature,
                            tempo: 100
                          }));
                        } catch (err) {
                          console.error(err);
                        }
                      })();
                    </script>
                  </body>
                </html>`;
  };

  // Web-only initialization
  useEffect(() => {
    if (Platform.OS === "web" && osmContainerRef.current && state.score) {
      // Remove any previously-loaded music
      if (osmContainerRef.current) {
        while (osmContainerRef.current.children[0]) {
          osmContainerRef.current.removeChild(
            osmContainerRef.current.children[0],
          );
        }
      }

      // Create an instance of OpenSheetMusicDisplay, passing the reference to the container
      const osm = new OpenSheetMusicDisplay(osmContainerRef.current as HTMLElement, {
        autoResize: true , // Enable automatic resizing of the sheet music display
        followCursor: true, // And follow the cursor

      });
      osdRef.current = osm; 
      // If score name is a key within ScoreContents use the xml content value within that key, otherwise access xml content through the static key value mapping defined within scores.ts
      const xmlContent = (state.scoreContents && state.scoreContents[state.score]) || scoresData[state.score];

      // Error handling if no xml content for selected score is found
      if (!xmlContent) {
        console.error("Score content not found for:", state.score);
        return;
      }

      // Load and render the XML content.
      osm
        .load(xmlContent)
        .then(() => {
          // Render the sheet music
          osm.render();
          cursorRef.current = osm.cursor;
          cursorRef.current.show(); // Ensure the cursor is visible
          cursorRef.current.CursorOptions = {
            ...cursorRef.current.CursorOptions,
            follow: true,
          };
          osdRef.current!.zoom = .65
          if (isSmallScreen) {
            osdRef.current!.zoom = .45
          }

          // TODO!  Find the piece's tempo and send that instead of constant 100
          dispatch({
            type: "update_piece_info",
            time_signature:
              cursorRef.current.Iterator.CurrentMeasure.ActiveTimeSignature,
            tempo: 100,
          });
        })
        .catch((error) => {
            // Handle errors in loading the music XML file
            console.error("Error loading music XML:", error);
        });

        // // Fetch the MusicXML file from the backend
        // fetch(`http://127.0.0.1:5000/score/${state.score}`) // Replace with your actual API endpoint
        //   .then((response) => {
        //     if (!response.ok) {
        //       throw new Error(`HTTP error! status: ${response.status}`);
        //     }
        //     return response.text(); // Return the XML content as a string
        //   })
        //   .then((xmlContent) => {
        //     // Load the fetched XML content into OpenSheetMusicDisplay
        //     return osm.load(xmlContent);
        //   })
        //   .then(() => {
        //     // Render the sheet music
        //     osm.render();
        //     console.log("Music XML loaded successfully");

        //     cursorRef.current = osm.cursor;
        //     cursorRef.current.show(); // Ensure the cursor is visible
        //     cursorRef.current.CursorOptions = {
        //       ...cursorRef.current.CursorOptions,
        //       follow: true,
        //     };
        //     // TODO!  Find the piece's tempo and send that instead of constant 100
        //     dispatch({
        //       type: "update_piece_info",
        //       time_signature:
        //         cursorRef.current.Iterator.CurrentMeasure.ActiveTimeSignature,
        //       tempo: 100,
        //     });
        //   })
        //   .catch((error) => {
        //     // Handle errors in loading the music XML file
        //     console.error("Error loading music XML:", error); // Log the error message
        //   });
    } // Dependency array means this effect runs once when the component mounts and again when a new score is selected
  }, [dispatch, state.score, state.scores])

// Define the handler to catch messages sent from the WebView back to React Native
const onMessage = (event: any) => {
  try {
    // Extract the message string sent via window.ReactNativeWebView.postMessage(...)
    const data = JSON.parse(event.nativeEvent.data);

    // We expect a message of type 'loaded' sent after OSMD has finished rendering
    if (data.type === 'loaded') {
      dispatch({
        type: 'update_piece_info',
        time_signature: data.time_signature,
        tempo: data.tempo,
      });
    }
  } catch (e) {
    // Catch and log any errors during message parsing or if expected fields are missing
    console.error('Failed to parse WebView message', e);
  }
};

  const selectedXml = (state.scoreContents && state.scoreContents[state.score]) || scoresData[state.score] || "";

  // Function used for scrolling vertically through the OSM Container based on passed in value
  const scrollUp = (amount: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: amount, animated: false });
    }
  };

  // Function used to listen to scroll on OSM container and saves current Y position
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    // console.log('Current Scroll Position (Y):', yOffset);
    scrollPositionRef.current = yOffset; // update ref immediately
  };

  /////////////////////////////////////////////////////////////////////////////////
  // useEffect to tie the cursor position to the state
  /////////////////////////////////////////////////////////////////////////////////
//   useEffect(() => {
//     let ct = state.cursorTimestamp; // current timestamp of cursor's note(s) in seconds
//     var dt = new Fraction();
//     console.log("ct:", ct);
//     if (cursorRef.current?.Iterator.CurrentSourceTimestamp !== undefined) {
//       var ts_meas = Fraction.createFromFraction(
//         cursorRef.current?.Iterator.CurrentSourceTimestamp,
//       ); // current timestamp of iterator as a fraction
//       console.log("ts_meas:", ts_meas.RealValue);
//       if (ct > state.timestamp) {
//         // If timestamp is older, go back to beginning, b/c probably reset
//         console.log("Moving ct back to beginning.");
//         ct = 0;
//         cursorRef.current?.reset();
//         ts_meas = new Fraction();
//       }

//       // while timestamp is less than desired, update it
//       while (ct <= state.timestamp) {
//         cursorRef.current?.Iterator.moveToNextVisibleVoiceEntry(false);
//         dt = Fraction.minus(
//           cursorRef.current?.Iterator.CurrentSourceTimestamp,
//           ts_meas,
//         );
//         // dt is a fraction indicating how much - in whole notes - the iterator moved

//         ct +=
//           (60 * dt.RealValue * state.time_signature.Denominator) /
//           state.synth_tempo;
//         console.log("ct:", ct);
//         ts_meas = Fraction.plus(ts_meas, dt);
//       }
//       cursorRef.current?.Iterator.moveToPreviousVisibleVoiceEntry(false);
//       console.log("Cursor should be updating");
//       cursorRef.current?.update();
//       dispatch({
//         type: "cursor_update",
//         time:
//           (60 *
//             cursorRef.current?.Iterator.CurrentSourceTimestamp.RealValue *
//             state.time_signature.Denominator) /
//           state.synth_tempo,
//       });
//     }
//   },
// [state.timestamp]);

  return (
    <>
      {/* Temporary inputs for testing cursor movement */}
      <TextInput
        value={steps}
        onChangeText={setSteps}
        keyboardType="numeric"
        placeholder="Number Of Steps"
      />
      <TextInput
        value={speed}
        onChangeText={setSpeed}
        keyboardType="numeric"
        placeholder="Cursor Update Speed (ms)"
      />

      <TouchableOpacity 
      onPress={moveCursorByBeats}
      >
        <Text>Start</Text>
      </TouchableOpacity>

      {/* Reference ScrollView Component for controlling scroll */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* If on web, render the OSMD container like normal */}
        {Platform.OS === "web" ? (
          <div ref={osmContainerRef} style={styles.osmContainer} />
        ) : (

          // Otherwise use WebView component to render OSMD since it only has web base support so injecting html is the only way
          <WebView
            ref={webviewRef}
            originWhitelist={["*"]}
            source={{ html: buildHtml(selectedXml) }}
            onMessage={onMessage} // Call function when page inside this Webview calls postMessage
            style={{ backgroundColor: "transparent", height: 400 }}
          />
        )}

        {/* <Text style={styles.text}>
          <Icon name="music" size={20} color="#2C3E50" /> Reference to the SVG
          container for sheet music{" "}
          <Icon name="music" size={20} color="#2C3E50" />
        </Text> */}
      </ScrollView>
    </>
  );
}

// Define styles for the components using StyleSheet
const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%", // Make the scroll container fill the width of the parent
    height: "100%", // Set a specific height for scrolling (adjust as needed)
  },
  osmContainer: {
    width: "100%", // Make the sheet music container fill the width of the parent
    borderWidth: 1, // Add border to the sheet music container
    borderColor: "black", // Set border color to black
    overflow: "hidden", // Ensure content doesn't overflow outside this container
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#2C3E50"
  }
});
