import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

/**
 * Represents a selected WAV file with URI and name.
 */
export interface LiveFile {
  uri: string;
  name: string;
}

/**
 * Parses a web-based file input change event to extract a WAV file reference.
 * @param e - Change event from an <input type="file" accept=".wav" />
 * @returns LiveFile object or null if no valid WAV file was selected
 */
export function parseWebWavFile(
  e: React.ChangeEvent<HTMLInputElement>
): LiveFile | null {
  const file = e.target.files?.[0] ?? null;
  if (file && file.name.toLowerCase().endsWith('.wav')) {
    return { uri: URL.createObjectURL(file), name: file.name };
  }
  return null;
}

/**
 * Opens the mobile document picker to select a WAV file (Expo).
 * @returns Promise resolving to LiveFile or null if selection was canceled or invalid
 */
export async function pickMobileWavFile(): Promise<LiveFile | null> {
  try {
    const res = await DocumentPicker.getDocumentAsync({
      type: 'audio/wav',
      copyToCacheDirectory: true,
    });
    if (!res.canceled && res.assets && res.assets.length > 0) {
      const asset = res.assets[0];
      return { uri: asset.uri, name: asset.name };
    }
  } catch (err) {
    console.error('DocumentPicker Error:', err);
  }
  return null;
}


// Web file upload handler
export const musicXmlUploadWeb = (e: React.ChangeEvent<HTMLInputElement>, stateScores: string[], dispatch: Function) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const xmlContent = ev.target?.result as string;
      const fileName = file.name; // extract the file name 
      if (!stateScores.includes(fileName)) { // only add new score if the new uploaded score's name isn't already stored within scores
        const newScore = {
          filename: fileName,
          piece: fileName.replace(".musicxml", ""),
          content: xmlContent,
        };
        dispatch({ type: "new_score_from_upload", score: newScore });
      }
    };
    reader.onerror = (e) => {
      console.error("Error reading file:", e);
    };      
    reader.readAsText(file);
  } else {
    console.log("No file selected");
  }
};

// mobile file upload handler
export const musicXmlUploadNative = async (stateScores: string[], dispatch: Function): Promise<void> => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: '*/*', // Alllow any file
      copyToCacheDirectory: true, // Save to cache for performance
    });

    if (result.canceled || !result.assets || result.assets.length === 0) { // Error handling  
      console.log("No file selected or canceled");
      return;
    }
    // Extract the file URI and name from the result
    const { uri, name: fileName } = result.assets[0];
    console.log("lets goooo!", fileName);
    
    // Error handling if file is not type .musicxml 
    if (!fileName.toLowerCase().endsWith('.musicxml')) {
      alert('Please select a .musicxml file');
      return;
    }
    // Only read from URI if file name is not already in the available scores
    if (!stateScores.includes(fileName)) {
      const xmlContent = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      
      // Setup payload  (object containing: filename, piecename (filtered out .musicxml), and the loaded xml content)
      const newScore = {
        filename: fileName,
        piece: fileName.replace(/\.musicxml$/, ''),
        content: xmlContent,
      };

      dispatch({ type: 'new_score_from_upload', score: newScore });
    }
    // Catch any errors (e.g. getting file using DocumentPicker or reading using FileSystem)
  } catch (err) {
    console.error('Error picking document:', err);
    alert('Something went wrong. Check console.');
  }
};

export const extractTempo = (xml: string): number | null => {
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