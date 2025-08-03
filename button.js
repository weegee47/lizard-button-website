// varibles for audio
const lizard = new Audio("./audio/lizard.mp3");
const buttons = document.querySelectorAll("button");

// varibles for counter
let count = 0;
const counter = document.getElementById("counter");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    lizard.play();
    lizard.currentTime = 0;
    count++;
    counter.textContent = count;
  });
});