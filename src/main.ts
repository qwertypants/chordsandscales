import { playChord } from "./functions/playChord";

const $chords = $("#chords");
const $scales = $("#scales");

// Add to DOM and chord event listeners
function addChords(chords: string[]) {
  chords.forEach((chord) => {
    const el = $(`<div class="jtab">${chord}</div>`);
    el.on("click", () => playChord(chord));
    $chords.append(el);
  });
}

function addScales(scale: string[]) {
  // $tabs.append("<h2>Scales</h2>");
  scale.forEach((tab) => {
    const el = $(`<div class="jtab">${tab}</div>`);
    // el.on("click", () => playChord(chord));
    $scales.append(el);
  });
}
$(() => {
  addChords(["Cm6", "C69", "C#aug"]);
  addScales([
    // "$4 7 9 $3 7 6 $5 9 $4 7 9 7 ||",
    // "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
    // "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
    // "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
    // "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
    // "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
    // "$4 7 9 $3 7 6 $5 9 $4 7h9 7 $5 9\\7 5/7 ||",
  ]);
});
