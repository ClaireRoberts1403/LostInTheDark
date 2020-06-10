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

function gameTurn() {
  on = false;

  if (flash == level) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      flash++;
    }, 200);
  }
}

function one() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  up.style.backgroundColor = "darkSlateBlue";
}

function two() {
  if (noise) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  noise = true;
  left.style.backgroundColor = "darkSlateBlue";
}

function three() {
  if (noise) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  noise = true;
  right.style.backgroundColor = "darkSlateBlue";
}



function clearColor() {
  up.style.backgroundColor = "transparent";
  left.style.backgroundColor = "transparent";
  right.style.backgroundColor = "transparent";
  
}

function flashColor() {
  up.style.backgroundColor = "darkSlateBlue";
  left.style.backgroundColor = "darkSlateBlue";
  right.style.backgroundColor = "darkSlateBlue";
 
}

up.addEventListener('click', () => {
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

left.addEventListener('click', () => {
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

right.addEventListener('click', () => {
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})



function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 50 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "GAMEOVER!";
    setTimeout(() => {
      turnCounter.innerHTML = level;
      clearColor();

    }, 800);

    noise = false;
  }

  if (level == playerOrder.length && good && !win) {
    level++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = level;
    intervalId = setInterval(gameTurn, 800);
  }

}

function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";
  
  win = true;
}

