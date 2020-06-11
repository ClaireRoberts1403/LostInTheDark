let order = []; /*order of sequence*/
let playerOrder = []; /*order entered by player*/
let flash; /*the flash of which direction is in play*/
let level; /*level*/
let score; /**score*/
let scoreHigh; /**highscore*/
let good; /**if sequence is correct*/
let compTurn;/**the computers turn*/
let intervalId;/**time in between truns*/
let noise = true;/**sounds made when flashing and being pressed*/
let win;/**if player reaches level 50*/
let saveHigh; /**save highscore*/
let lose;

const turnCounter = document.querySelector("#level");
const up = document.querySelector("#up");/**up arrow*/
const left = document.querySelector("#left");/**left arrow*/
const right = document.querySelector("#right");/**right arrow*/
const startButton = document.querySelector("#startGame");
const currentScore = document.querySelector("#scoreCount");
const currentHighScore = document.querySelector("#highScore");


startButton.addEventListener("click", () => {
  play();
});
/**game play at its start*/
function play() {
  win = false;
  lose = [];
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  level = 1;
  score = 0;
  /**Highscore saved on local storage*/
  if (score > scoreHigh) {
                scoreHigh = score;
                localStorage.setItem(saveHigh, scoreHigh);
            }

  turnCounter.innerHTML = 1;
  currentScore.innerHTML = 0;
  currentHighScore.innerHTML = scoreHigh;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 3) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 500);
}
/**game turn sequence of event and outputs*/
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
    }, 100);
  }
}
/**up arrow*/
function one() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  up.style.backgroundColor = "darkSlateBlue";
}
/**left arrow*/
function two() {
  if (noise) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  noise = true;
  left.style.backgroundColor = "darkSlateBlue";
}
/**right arrow*/
function three() {
  if (noise) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  noise = true;
  right.style.backgroundColor = "darkSlateBlue";
}
/**to reset after flashcolor*/
function clearColor() {
  up.style.backgroundColor = "transparent";
  left.style.backgroundColor = "transparent";
  right.style.backgroundColor = "transparent";
}
/**to show user that arrow is active*/
function flashColor() {
  up.style.backgroundColor = "darkSlateBlue";
  left.style.backgroundColor = "darkSlateBlue";
  right.style.backgroundColor = "darkSlateBlue";
}

/**to listen for user input*/
up.addEventListener("click", () => {
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 200);
    }
  }
});

left.addEventListener("click", () => {
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 200);
    }
  }
});

right.addEventListener("click", () => {
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if (!win) {
        setTimeout(() => {
        clearColor();
      }, 200);
    }
  }
});
/**to check if user is correct or not*/
function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 50 && good) {
    winGame();
  }

  if (good == false) {
     flashColor();
    
      setTimeout(() => {
      turnCounter.innerHTML = level;
      clearColor();
    }, 1000);
    gameover();
    noise = false;
  }

  if (level == playerOrder.length && good && !win) {
    level++;
    score = score+10;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = level;
    currentScore.innerHTML = score;
    intervalId = setInterval(gameTurn, 600);
  }

 /**saving highscore to local storage and get item*/
  if (score > scoreHigh) {
      scoreHigh = score;
      currentHighScore.innerHTML = scoreHigh;
  }

    function highScoreShow() {
        modal.classList.toggle("show-modal");
    }
}

 let scoreSave = localStorage.getItem(saveHigh);
            if (scoreSave == null) {
                scoreHigh = 0;
            } else {
                scoreHigh = parseInt(scoreSave);
            }


  /**Saving high score to highscore leader board */          



/**win game function*/
function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";

  win = true;
}

/**gameover function*/


function gameover() {
    turnCounter.innerHTML = "!";
    swal({title: "GAME OVER!", text: "YOU ARE LOST IN THE DARK", button: false, timer:3000})
        lose = true;
    }

