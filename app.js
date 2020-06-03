let order = [];
let playerOrder = [];
let flash;
let level;
let good;
let compTurn;
let intervalId;
let noise = true;
let win;

const turnCounter = document.querySelector("#level");
const up = document.querySelector("#up");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

const startButton = document.querySelector("#startGame");

startButton.addEventListener('click', () => {
      play();
  }
);

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  level = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 3) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

