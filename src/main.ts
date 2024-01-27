import { playChord } from "./lib/chords";

const $app = $("#app");

function displayChords(chords: string[]) {
  // console.log(chords.join(" "));
  // const el = $(`<div class="jtab">${chords.join(" ")}</div>`);
  // $app.append(el);
  chords.forEach((chord) => {
    const el = $(`<div class="jtab">${chord}</div>`);
    el.on("click", () => playChord(chord));
    $app.append(el);
  });
}
$(() => {
  displayChords(["E", "C"]);
});
// document.onreadystatechange = () => {
//   // Raphael.chord(el, [-1, 3, 2, 0, 1, 0], "C maj");
//   // Raphael.chord(el, Raphael.chord.find("C#", "maj"), "C# maj");
//   // Raphael.chord(el, Raphael.chord.find("Ab", "maj"), "Ab maj"); // Ab == G#
//   // Raphael.chord(el, "C# maj");
//
// };
