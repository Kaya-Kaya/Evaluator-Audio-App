import { XMLParser, XMLBuilder } from "fast-xml-parser";
import fs from "fs";

interface NoteRef {
  note_id: number;
  part_index: number;
  xmlRef: any;
}

export function indexNotesFromMusicXML(xmlString: string): {
  xmlObj: any;
  notes: NoteRef[];
} {
  const parser = new XMLParser({ ignoreAttributes: false });
  const xmlObj = parser.parse(xmlString);

  const parts = xmlObj["score-partwise"]["part"];
  const notes: NoteRef[] = [];

  let noteCounter = 0;

  for (let partIndex = 0; partIndex < parts.length; partIndex++) {
    const measures = parts[partIndex]["measure"];

    // Flatten all <note> a la flatten().notes in Python
    for (const measure of measures) {
      if (!measure["note"]) continue;

      const notesInMeasure = Array.isArray(measure["note"])
        ? measure["note"]
        : [measure["note"]];

      for (const noteElem of notesInMeasure) {
        // Python flatten().notes doesn't include rests
        if ("rest" in noteElem) continue;

        notes.push({
          note_id: noteCounter,
          part_index: partIndex,
          xmlRef: noteElem,
        });

        noteCounter++;
      }
    }
  }

  return { xmlObj, notes };
}

export function colorNote(notes: NoteRef[], note_id: number) {
    const noteRef = notes.find((n) => n.note_id === note_id);
    if (noteRef) {
        noteRef.xmlRef["notehead-color"] = "#FF0000";
    }
}

export function saveIndexedMusicXML(xmlObj: any, out_uri: string) {
    const builder = new XMLBuilder({ ignoreAttributes: false });
    const newXml = builder.build(xmlObj);
    fs.writeFileSync(out_uri, newXml);
}