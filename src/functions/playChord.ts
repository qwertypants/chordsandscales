import * as Tone from "tone";
import * as dat from "dat.gui";
import GuitarNylonOgg from "tonejs-instrument-guitar-nylon-ogg";
import { ChordMap } from "./chordMap";

const guitar = new GuitarNylonOgg().toDestination();

const gui = new dat.GUI();

const sound = { duration: 0.8, time: 0.5 };
gui.add(sound, "duration", 0.2, 5);
gui.add(sound, "time", 0.2, 1);

function playChord(chord: string) {
  const now = Tone.now();
  const notes = ChordMap[chord];

  // TODO: Stop currently playing sound
  console.log({ chord, notes });

  notes.forEach((note, index) => {
    guitar.triggerAttackRelease(note, sound.duration, now + index * sound.time);
  });
}

export { playChord };
