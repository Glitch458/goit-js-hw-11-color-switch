const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

// Refs
const refs = {
  startBtn: document.getElementById("start-btn"),
  stopBtn: document.getElementById("stop-btn"),
};

// Randomizer
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Listeners
refs.startBtn.addEventListener("click", startRandomizer);
refs.stopBtn.addEventListener("click", stopRandomizer);

// Functions
let intervalId = 0;

function startRandomizer(evt) {
  intervalId = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colors.length);
    document.body.style.backgroundColor = colors[randomColor];
  }, 1000);
  evt.target.setAttribute("disabled", "");
}

function stopRandomizer() {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute("disabled");
}
