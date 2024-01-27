import { playChord } from "./functions/playChord";

const $app = $("#app");

function displayChords(chords: string[]) {
  chords.forEach((chord) => {
    const el = $(`<div class="jtab">${chord}</div>`);
    el.on("click", () => playChord(chord));
    $app.append(el);
  });
}
$(() => {
  displayChords(["E"]);
});
