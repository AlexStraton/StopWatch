"use strict";

const timeDisplay = document.querySelector(".time-display");
const buttonStart = document.querySelector(".btn-start");
const buttonStop = document.querySelector(".btn-stop");
const buttonReset = document.querySelector(".btn-reset");

let secondsElapsed = 0;
let interval = null;

// buttonStart.addEventListener("click", () => {
//   interval = setInterval(function () {
//     secondsElapsed++;
//     const minutes = Math.floor(secondsElapsed / 60);
//     const seconds = secondsElapsed % 60;
//     timeDisplay.innerHTML = `${minutes}:${seconds}`;
//   }, 1000);
// });

console.log(2 * 4);

// function setTime() {
//   const minutes = Math.floor(secondsElapsed / 60);
//   const seconds = secondsElapsed % 60; //seconds as remainders
//   timeDisplay.innerHTML = `${String(minutes).padStart(2, "0")}:${String(
//     seconds
//   ).padStart(2, "0")}`;
// }

// function timer() {
//   secondsElapsed++;
//   setTime();
// }

function startClock() {
  if (!interval) {
    interval = setInterval(function () {
      secondsElapsed++;
      const minutes = Math.floor(secondsElapsed / 60);
      const seconds = secondsElapsed % 60;
      timeDisplay.innerHTML = `${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;
    }, 1000);
  }
}

function stopClock() {
  clearInterval(interval);
  interval = null;
}

function resetClock() {
  clearInterval(interval);
  secondsElapsed = 0;
  timeDisplay.innerHTML = "00:00";
}
