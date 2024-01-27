import * as Tone from "tone";
import * as dat from "dat.gui";

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

const sound = { duration: 0.2 };
gui.add(sound, "duration", 0.2, 5);

function playChord(chord: string) {
  const notes = ["E2", "B2", "E3", "G#3", "B3", "E4"];
  const now = Tone.now();

  console.log(chord);
  // Loop through the notes and play them with a delay
  let delay = 0.5;

  notes.forEach((note) => {
    // synth.triggerAttackRelease(note, soundLength, now + index * soundLength);
    sampler.triggerAttackRelease(note, sound.duration, now + delay);
  });
}

export { playChord };
