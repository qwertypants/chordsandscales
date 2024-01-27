// @ts-ignore
const jtab = window.jtab || {};
const chords = jtab.ChordList();

// Map to tonejs notes
export const ChordMap: Record<typeof chords, string[]> = {
  E: ["E2", "B2", "E3", "G#3", "B3", "E4"],
};
