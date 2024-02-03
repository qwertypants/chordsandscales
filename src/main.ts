import { playChord } from "./functions/playChord";

const $chords = $("#chords");
const $tabs = $("#tabs");

// Add to DOM and chord event listeners
function displayChords(chords: string[]) {
  chords.forEach((chord) => {
    const el = $(`<div class="jtab">${chord}</div>`);
    el.on("click", () => playChord(chord));
    $chords.append(el);
  });
}

function addTabs(tabs: string[]) {
  // $tabs.append("<h2>Scales</h2>");
  tabs.forEach((tab) => {
    const el = $(`<div class="jtab">${tab}</div>`);
    // el.on("click", () => playChord(chord));
    $tabs.append(el);
  });
}
$(() => {
  displayChords(["E", "D", "A", "G", "C", "Em", "Dm", "Am", "Gm", "Cm"]);
  addTabs([
    "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
    "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
    "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
    "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
    "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
    "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
    "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
  ]);
});
