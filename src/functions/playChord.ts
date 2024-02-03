import * as Tone from "tone";
import * as dat from "dat.gui";
import { ChordMap } from "./chordMap";

const gui = new dat.GUI();

// import { Chord, Note, Interval } from "tonal";

const sampler = new Tone.Sampler({
  urls: {
    C4: "C4.mp3",
    "D#4": "Ds4.mp3",
    "F#4": "Fs4.mp3",
    A4: "A4.mp3",
  },
  release: 1,
  baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

const sound = { duration: 0.8, time: 0.1 };
gui.add(sound, "duration", 0.2, 5);
gui.add(sound, "time", 0.2, 1);

function playChord(chord: string) {
  const now = Tone.now();
  const notes = ChordMap[chord];

  // TODO: Stop currently playing sound

  notes.forEach((note, index) => {
    sampler.triggerAttackRelease(
      note,
      sound.duration,
      now + index * sound.time,
    );
  });
}

export { playChord };
