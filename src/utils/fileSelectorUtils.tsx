import * as DocumentPicker from 'expo-document-picker';

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
