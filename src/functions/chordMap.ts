// @ts-ignore
const jtab = window.jtab || {};
const chords = jtab.ChordList();

// console.log(chords);
// Map to tonejs notes
export const ChordMap: Record<typeof chords, string[]> = {
  Cm6: ["G3", "A#3", "D4", "E4", "A4"],
  C69: ["E3", "A3", "D4", "G4", "A4"],
  "C#aug": ["C#3", "G3", "C4", "G#4"],

  // Bdim: ["D3", "F3", "Bb3", "D4"],
  // Bdim: ["B2", "F3", "B3", "D4"],
  //
  // Bdim7: ["D3", "G#3", "B3", "F4"],
  // G7: ["G2", "B2", "D3", "G3", "B3", "F4"],
  // C: [
  //   "E2",
  //   "F2",
  //   "F#2",
  //   "G2",
  //   "G#2",
  //   "A2",
  //   "A#2",
  //   "B2",
  //   "C3",
  //   "C#3",
  //   "D3",
  //   "D#3",
  //   "E3",
  // ],
  // A: [
  //   "A2",
  //   "A#2",
  //   "B2",
  //   "C3",
  //   "C#3",
  //   "D3",
  //   "D#3",
  //   "E3",
  //   "F3",
  //   "F#3",
  //   "G3",
  //   "G#3",
  //   "A3",
  // ],
};
