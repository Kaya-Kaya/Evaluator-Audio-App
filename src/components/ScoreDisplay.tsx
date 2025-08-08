import { ScrollView, StyleSheet, Text, View, Platform, useWindowDimensions} from "react-native";
import { useRef, useEffect, useState} from "react";
import { Cursor, OpenSheetMusicDisplay, Fraction} from "opensheetmusicdisplay";
import scoresData from "../score_name_to_data_map/scoreToMusicxmlMap"; // Local mapping of score filenames to XML content
import { WebView } from "react-native-webview";
import React from "react";
import { ActivityIndicator } from "react-native";
import { advanceToNextBeat, buildOsmdHtmlForNative, initOsmdWeb, onHandleOsmdMessageForNative, peekAtCurrentBeat, peekAtNextBeat } from "../utils/osmdUtils";

export default function ScoreDisplay({
  state,
  dispatch,
}: {
  state: any;
  dispatch: any;
}) {
  
  const osmContainerRef = useRef<HTMLDivElement | null>(null); // Reference for the SVG container
  const cursorRef = useRef<Cursor | null>(null);  // Create ref to the cursor 
  const osdRef = useRef<OpenSheetMusicDisplay | null>(null); // Create ref to the OSDiv
  const webviewRef = useRef<WebView>(null);  // Native-only ref (Used to inject html code into since OSMD is only supported through browser)
  const scrollViewRef = useRef<ScrollView>(null); // reference to scroll view component
  const [steps, setSteps] = useState<string>(""); // state for declaring number of intended cursor iterations
  const [speed, setSpeed] = useState<string>(""); // state for speed of cursor update
  const movedBeats = useRef<number>(0); // ref to store current beat position (used ref instead of state to prevent multiple refreshes)
  const animRef = useRef<number | null>(null);; // ref to store current animation id 
  const overshootBeats = useRef<number>(0);

  // Determine if we need to update styles if screen is below a certain threshold
  const { width, height } = useWindowDimensions()
  const isSmallScreen = width < 960;


  const moveCursorByBeats = () => {

    const targetBeats = parseFloat(steps); // Beat value that we want the cursor to be at

    // Cancel any previous animation frame before starting a new one
    if (animRef.current !== null) {
      cancelAnimationFrame(animRef.current);
    }

    if (Platform.OS !== 'web') {
      webviewRef.current?.injectJavaScript(
        `window.stepCursor(${parseFloat(steps)}); true;`
      );
      return;
    }

    // --- WEB branch ---
    if (!osdRef.current!.IsReadyToRender()) {
      console.warn("Please call load() and render() before stepping cursor."); //  Make sure the OSD system is ready before moving the cursor
      return;
    }
    const measures = osdRef.current!.GraphicSheet.MeasureList; // Get the list of measures from the rendered music sheet
    if (!measures.length || !measures[0].length) return;     // Exit if no measures are found


    // Get the denominator of the current time signature (e.g., 4 for 4/4)
    const denom = measures[0][0].parentSourceMeasure.ActiveTimeSignature!.denominator;

    let initialBeats = movedBeats.current;

    // Get the voices currently under the cursor for the first instrument (only 1 instrument - Evaluator)
    if (movedBeats.current === 0) {
      initialBeats = peekAtCurrentBeat(cursorRef.current!, osdRef.current!.Sheet.Instruments, denom); 
    }

    movedBeats.current = initialBeats;
    console.log("movedBeats :", movedBeats)

    // Calculate how many beats we need to move forward
    const toMove = Math.max(0, targetBeats);

    // Initialize moved beats from React state (current beat position)
    let moved = movedBeats.current + overshootBeats.current;
    overshootBeats.current = 0;

    // Recursive function to advance the cursor step-by-step
    const stepFn = () => {

      let delta = peekAtNextBeat(
        cursorRef.current!,
        osdRef.current!.Sheet.Instruments,
        denom
      );

      // Stop if we've moved enough beats
      if (moved >= toMove) {
        const leftover = moved - toMove
        overshootBeats.current = leftover;
        movedBeats.current = toMove;
        osdRef.current!.render(); // Re-render the music sheet
        return;
      }

      delta = advanceToNextBeat(
        cursorRef.current!,
        osdRef.current!.Sheet.Instruments,
        denom
      );

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


  // Web-only initialization
  useEffect(() => {
    initOsmdWeb(osmContainerRef, osdRef, cursorRef, state, dispatch, isSmallScreen);
  }, [dispatch, state.score, state.scores])

  const selectedXml = (state.scoreContents && state.scoreContents[state.score]) || scoresData[state.score] || "";

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
            source={{ html: buildOsmdHtmlForNative(selectedXml) }}
            onMessage={e => onHandleOsmdMessageForNative(e.nativeEvent.data, dispatch)} // Call function when page inside this Webview calls postMessage
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