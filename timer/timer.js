let timer;
let totalTime = 0;

const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

function updateInputs() {
  const hours = hoursInput.value;
  const minutes = minutesInput.value;
  const seconds = secondsInput.value;
  totalTime = hours * 3600 + minutes * 60 + seconds;
}

function updateDisplay() {
  if (totalTime <= 0) {
    clearInterval(timer);
    hoursInput.value = "00";
    minutesInput.value = "00";
    secondsInput.value = "00";
    startButton.textContent = "Start";
    alert("Finish");
    return;
  }

  totalTime--;
  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = totalTime % 60;

  hoursInput.value = String(hours).padStart(2, "0");
  minutesInput.value = String(minutes).padStart(2, "0");
  secondsInput.value = String(seconds).padStart(2, "0");
}

startButton.addEventListener("click", () => {
  if (startButton.textContent === "Start") {
    updateInputs();
    if (totalTime > 0) {
      timer = setInterval(updateDisplay, 1000);
      startButton.textContent = "Pause";
    }
  } else {
    clearInterval(timer);
    startButton.textContent = "Start";
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  totalTime = 0;
  hoursInput.value = "00";
  minutesInput.value = "00";
  secondsInput.value = "00";
  startButton.textContent = "Start";
});
