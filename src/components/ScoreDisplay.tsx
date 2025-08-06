import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View, Platform, useWindowDimensions} from "react-native";
import { useRef, useEffect, useState} from "react";
import { Cursor, OpenSheetMusicDisplay, Fraction} from "opensheetmusicdisplay";
import scoresData from "../musicxml/scores"; // Local mapping of score filenames to XML content
import { WebView } from "react-native-webview";
import React from "react";
import { ActivityIndicator } from "react-native";

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

    // instead of inlining the closure every time, you now do:
    if (Platform.OS !== 'web') {
      webviewRef.current?.injectJavaScript(
        `window.stepCursor(${parseFloat(steps)}); true;`
      );
      return;
    }

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
    console.log("movedBeats :", movedBeats)

    // Calculate how many beats we need to move forward
    const toMove = Math.max(0, targetBeats);

    // Initialize moved beats from React state (current beat position)
    let moved = movedBeats.current + overshootBeats.current;
    overshootBeats.current = 0;
    // console.log("movedBeats + overshootBeats :", moved)

    // Recursive function to advance the cursor step-by-step
    const stepFn = () => {

      // get beat value of next note 
      cursorRef.current!.next();
      let cur = cursorRef.current!.VoicesUnderCursor(
        osdRef.current!.Sheet.Instruments[0]
      );
      let delta = 0;
      if (cur.length && cur[0].Notes.length) {
        const len = cur[0].Notes[0].Length as Fraction;
        const num = len.Numerator === 0 ? 1 : len.Numerator;
        delta = (num / len.Denominator) * denom;
      }else {
        console.log("No note under cursor.");
      }
      cursorRef.current!.previous(); 

      // Stop if we've moved enough beats
      if (moved >= toMove) {
        // console.log("moved:" ,moved, ">", toMove) 
        const leftover = moved - toMove
        overshootBeats.current = leftover;
        movedBeats.current = toMove;
        // console.log("leftover: ", leftover)
        osdRef.current!.render(); // Re-render the music sheet
        return;
      }

      // Move the cursor to the next note
      cursorRef.current!.next();

      // Get the new note under the cursor
      cur = cursorRef.current!.VoicesUnderCursor(
        osdRef.current!.Sheet.Instruments[0]
      );

      delta = 0;
      // If there's a note, compute how many beats it represents
      if (cur.length && cur[0].Notes.length) {
        const len = cur[0].Notes[0].Length as Fraction;
        const num = len.Numerator === 0 ? 1 : len.Numerator;
        delta = (num / len.Denominator) * denom;
      }else {
        // console.log("No note under cursor.");
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


  const buildHtml = (xml: string, defaultZoom = 0.45) => {
    const escaped = xml
      .replace(/`/g, "\\`")
      .replace(/<\/script>/g, "<\\/script>");

    return `<!DOCTYPE html>
  <html>
    <head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
    <body>
      <div id="osmd-container"></div>
      <script src="https://unpkg.com/opensheetmusicdisplay@latest/build/opensheetmusicdisplay.min.js"></script>
      <script>
        // 1) State holders for moved / overshoot, and the loop ID
        window.__movedBeats = 0;
        window.__overshootBeats = 0;
        window.__stepLoopId = null;

        (async () => {
          // 2) Load & render once
          const osm = new opensheetmusicdisplay.OpenSheetMusicDisplay(
            document.getElementById('osmd-container'),
            { autoResize: true, followCursor: true }
          );
          await osm.load(\`${escaped}\`);
          osm.render();

          // 3) Expose osm & cursor
          window.osm = osm;
          osm.zoom = ${defaultZoom};
          window.cursor = osm.cursor;
          cursor.show();
          cursor.CursorOptions = { ...cursor.CursorOptions, follow: true };

          // 4) Expose a single stepCursor function
          window.stepCursor = function(targetBeats) {
            // Cancel any previous loop
            if (window.__stepLoopId !== null) {
              cancelAnimationFrame(window.__stepLoopId);
            }

            // Web‑version’s readiness check
            if (!osm.IsReadyToRender()) {
              console.warn("Please call load() and render() before stepping cursor.");
              return;
            }

            const measures = osm.GraphicSheet.MeasureList;
            if (!measures.length || !measures[0].length) return;
            const denom = measures[0][0].parentSourceMeasure.ActiveTimeSignature.denominator;

            // Initial‑only beat calc
            let initialBeats = window.__movedBeats;
            if (initialBeats === 0) {
              const init = cursor.VoicesUnderCursor(osm.Sheet.Instruments[0]);
              if (init.length && init[0].Notes.length) {
                const len = init[0].Notes[0].Length;
                const num = len.Numerator === 0 ? 1 : len.Numerator;
                initialBeats = (num / len.Denominator) * denom;
              }
            }
            window.__movedBeats = initialBeats;

            const toMove = Math.max(0, targetBeats);
            let moved = window.__movedBeats + window.__overshootBeats;
            window.__overshootBeats = 0;

            // Step logic exactly as web version
            function stepFn() {
              // peek next delta
              cursor.next();
              let cur = cursor.VoicesUnderCursor(osm.Sheet.Instruments[0]);
              let delta = 0;
              if (cur.length && cur[0].Notes.length) {
                const len = cur[0].Notes[0].Length;
                const num = len.Numerator === 0 ? 1 : len.Numerator;
                delta = (num / len.Denominator) * denom;
              }
              cursor.previous();

              // if we’ve already reached the target
              if (moved >= toMove) {
                const leftover = moved - toMove;
                window.__overshootBeats = leftover;
                window.__movedBeats = toMove;
                osm.render();
                return;
              }

              // actually advance once
              cursor.next();
              cur = cursor.VoicesUnderCursor(osm.Sheet.Instruments[0]);
              delta = 0;
              if (cur.length && cur[0].Notes.length) {
                const len = cur[0].Notes[0].Length;
                const num = len.Numerator === 0 ? 1 : len.Numerator;
                delta = (num / len.Denominator) * denom;
              }
              moved += delta;
              window.__movedBeats = moved;

              osm.render();
              // schedule the next frame
              window.__stepLoopId = requestAnimationFrame(stepFn);
            }

            // start it
            window.__stepLoopId = requestAnimationFrame(stepFn);
          };

          const ts = cursor.Iterator.CurrentMeasure.ActiveTimeSignature;

          // get raw xml
          const rawXML = ${JSON.stringify(escaped)};

          // extract ref tempo given xml
          function extractTempoFromXML(xmlString) {
            try {
              const parser = new DOMParser();
              const xmlDoc = parser.parseFromString(xmlString, "application/xml");

              const sound = xmlDoc.querySelector("sound[tempo]");
              if (sound?.getAttribute("tempo")) {
                return parseFloat(sound.getAttribute("tempo"));
              }

              const perMin = xmlDoc.querySelector("metronome > per-minute");
              if (perMin?.textContent) {
                return parseFloat(perMin.textContent);
              }

              return null;
            } catch (e) {
              console.warn("Tempo extraction failed:", e);
              return null;
            }
          }

          const tempo = extractTempoFromXML(rawXML); // call helper function to get ref tempo 

          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'loaded',
            time_signature: { numerator: ts.numerator, denominator: ts.denominator },
            beatsPerMeasure: ts.numerator,
            tempo: tempo
          }));
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
      const tempo = extractTempo(xmlContent); // Extract tempo from selected score (via musicxml)
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
          
          dispatch({
            type: "update_piece_info",
            time_signature:
              cursorRef.current.Iterator.CurrentMeasure.ActiveTimeSignature,
            tempo: tempo,
            beatsPerMeasure: cursorRef.current.Iterator.CurrentMeasure.ActiveTimeSignature.Numerator
          });
        })
        .catch((error) => {
            // Handle errors in loading the music XML file
            console.error("Error loading music XML:", error);
        });

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
        tempo: data.tempo, // Update ref tempo in global state
        beatsPerMeasure: data.beatsPerMeasure, // Update beats per measure in global state

      });
    }
  } catch (e) {
    // Catch and log any errors during message parsing or if expected fields are missing
    console.error('Failed to parse WebView message', e);
  }
};

  const selectedXml = (state.scoreContents && state.scoreContents[state.score]) || scoresData[state.score] || "";

  const extractTempo = (xml: string): number | null => {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, "application/xml");

      const sound = xmlDoc.querySelector("sound[tempo]");
      if (sound?.getAttribute("tempo")) {
        return parseFloat(sound.getAttribute("tempo")!);
      }

      const perMin = xmlDoc.querySelector("metronome > per-minute");
      if (perMin?.textContent) {
        return parseFloat(perMin.textContent);
      }

      return null;
    } catch (error) {
      console.warn("Failed to extract tempo from XML:", error);
      return null;
    }
};

  return (
    <>
      {/* Temporary inputs for testing cursor movement */}
      {/* <TextInput
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
      </TouchableOpacity> */}

      {/* Reference ScrollView Component for controlling scroll */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator
        ref={scrollViewRef}
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

        {state.loadingPerformance && ( // Loading overlay
          <View style={styles.overlay}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Loading…</Text>
          </View>
        )}
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
  },

  sheetWrapper: {
    position: "relative", // to contain overlay
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    padding: 16,
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: "#333",
    fontWeight: 700
  }
});