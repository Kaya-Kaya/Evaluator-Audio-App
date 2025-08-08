import { extractTempo } from './fileSelectorUtils';
import { OpenSheetMusicDisplay, Cursor, Fraction } from 'opensheetmusicdisplay';
import { Platform } from 'react-native';
import scoresData from '../score_name_to_data_map/scoreToMusicxmlMap';

export const initOsmdWeb = (osmContainerRef: React.RefObject<HTMLDivElement>,
  osdRef: React.MutableRefObject<OpenSheetMusicDisplay | null>,
  cursorRef: React.MutableRefObject<Cursor | null>,
  state: any,
  dispatch: Function,
  isSmallScreen: boolean) => 
{
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
    } 
} 

export const peekAtNextBeat = (
  cursor: Cursor,
  instruments: any[],
  timeDenominator: number
): number => 
{
  let delta = 0;
  cursor.next();
  const current = cursor.VoicesUnderCursor(instruments[0]);
  if (current.length && current[0].Notes.length) {
    const len = current[0].Notes[0].Length as Fraction;
    const num = len.Numerator === 0 ? 1 : len.Numerator;
    delta = (num / len.Denominator) * timeDenominator;
  } else {
    console.log("No note under cursor.");
  }
  cursor.previous();
  return delta;
}

export const advanceToNextBeat = (
  cursor: Cursor,
  instruments: any[],
  timeDenominator: number
): number => {
  cursor.next();
  const current = cursor.VoicesUnderCursor(instruments[0]);
  let delta = 0;
  if (current.length && current[0].Notes.length) {

    const len = current[0].Notes[0].Length as Fraction;
    const num = len.Numerator === 0 ? 1 : len.Numerator;
    delta = (num / len.Denominator) * timeDenominator;

  } else {
    console.log("No note under cursor.");
  }
  return delta;
}

export const peekAtCurrentBeat = (
  cursor: Cursor,
  instruments: any[],
  timeDenominator: number
): number => 
{
  let delta = 0;
  const current = cursor.VoicesUnderCursor(instruments[0]);
  if (current.length && current[0].Notes.length) {
    const len = current[0].Notes[0].Length as Fraction;
    const num = len.Numerator === 0 ? 1 : len.Numerator;
    delta = (num / len.Denominator) * timeDenominator;
  } else {
    console.log("No note under cursor.");
  }
  return delta;
}

export const buildOsmdHtmlForNative = (xml: string, defaultZoom = 0.45): string => {
    const escaped = xml.replace(/`/g, "\\`").replace(/<\/script>/g, "<\\/script>");

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

// Define the handler to catch messages sent from the WebView back to React Native
export const onHandleOsmdMessageForNative = (raw: string, dispatch: any) => {
  try {
    // Extract the message string sent via window.ReactNativeWebView.postMessage(...)
    const data = JSON.parse(raw);

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

