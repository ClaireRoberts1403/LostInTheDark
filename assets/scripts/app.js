let orderGeneratedSequence = []; /*order of sequence generated by computer*/
let playerOrder = []; /*order entered by player*/
let arrowflash; /*the flash of which direction is in play*/
let level; /*level*/
let score; /**score*/
let scoreHigh; /**highscore*/
let correct; /**if sequence is correct*/
let compTurn;/**the computers turn*/
let intervalId;/**time in between truns*/
let noise = true;/**sounds made when flashing and being pressed*/
let win;/**if player reaches level 30*/
let displayHighScore; /**display highscore*/
let lose;/**if player presses an incorrect arrow*/
let savename;/** to save the players name to highscore board */
let savescore;/** to save the players highscore */

const turnCounter = document.querySelector("#level");
const upArrow = document.querySelector("#upArrow");/**up arrow*/
const leftArrow = document.querySelector("#leftArrow");/**left arrow*/
const rightArrow = document.querySelector("#rightArrow");/**right arrow*/
const startButtonModal = document.querySelector("#startGame");
const currentScore = document.querySelector("#scoreCount");
const currentHighScore = document.querySelector("#highScore");


startButtonModal.addEventListener("click", () => {
  play();
});
/**game play at its start*/
function play() {
  win = false;
  lose = [];
  orderGeneratedSequence = [];
  playerOrder = [];
  arrowflash = 0;
  intervalId = 0;
  level = 1;
  score = 0;

  /**Highscore saved on local storage*/
  if (score > scoreHigh) {
                scoreHigh = score;
                localStorage.setItem(displayHighScore, scoreHigh);
            }

  turnCounter.innerHTML = 1;
  currentScore.innerHTML = 0;
  currentHighScore.innerHTML = scoreHigh;
  correct = true;
  for (var i = 0; i < 20; i++) {
    orderGeneratedSequence.push(Math.floor(Math.random() * 3) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 500);
}
/**game turn sequence of event and outputs*/
function gameTurn() {
  on = false;

  if (arrowflash == level) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (orderGeneratedSequence[arrowflash] == 1) upArrowF();
      if (orderGeneratedSequence[arrowflash] == 2) leftArrowF();
      if (orderGeneratedSequence[arrowflash] == 3) rightArrowF();
      arrowflash++;
    }, 100);
  }
}
/**function forup arrow*/
function upArrowF() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  upArrow.style.backgroundColor = "darkSlateBlue";
}
/**left arrow*/
function leftArrowF() {
  if (noise) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  noise = true;
  leftArrow.style.backgroundColor = "darkSlateBlue";
}
/**right arrow*/
function rightArrowF() {
  if (noise) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  noise = true;
  rightArrow.style.backgroundColor = "darkSlateBlue";
}
/**to reset after flashcolor*/
function clearColor() {
  upArrow.style.backgroundColor = "transparent";
  leftArrow.style.backgroundColor = "transparent";
  rightArrow.style.backgroundColor = "transparent";
}
/**to show user that arrow is active*/
function flashColor() {
  upArrow.style.backgroundColor = "darkSlateBlue";
  leftArrow.style.backgroundColor = "darkSlateBlue";
  rightArrow.style.backgroundColor = "darkSlateBlue";
}

/**to listen for user input*/
upArrow.addEventListener("click", () => {
  if (on) {
    playerOrder.push(1);
    check();
    upArrowF();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 200);
    }
  }
});

leftArrow.addEventListener("click", () => {
  if (on) {
    playerOrder.push(2);
    check();
    leftArrowF();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 200);
    }
  }
});

rightArrow.addEventListener("click", () => {
  if (on) {
    playerOrder.push(3);
    check();
    rightArrowF();
    if (!win) {
        setTimeout(() => {
        clearColor();
      }, 200);
    }
  }
});
/**to check if user is correct or not*/
function check() {
  if (playerOrder[playerOrder.length - 1] !== orderGeneratedSequence[playerOrder.length - 1])
    correct = false;

  if (playerOrder.length == 5 && correct) {
    winGame();
  }

  if (correct == false) {
     flashColor();
    
      setTimeout(() => {
      turnCounter.innerHTML = level;
      clearColor();
    }, 1000);
    gameover();
    noise = false;
  }

  if (level == playerOrder.length && correct && !win) {
    level++;
    score = score+10;
    playerOrder = [];
    compTurn = true;
    arrowflash = 0;
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

 let scoreSave = localStorage.getItem(displayHighScore);
            if (scoreSave == null) {
                scoreHigh = 0;
            } else {
                scoreHigh = parseInt(scoreSave);
            }


  /**Saving high score to highscore leader board */          
let saveHighScore = "#saveHighScore";
localStorage.getElementById = "displayHighScore";
localStorage.getElementById = "name";
localStorage.setItem('name', savename);
localStorage.setItem('saveHighScore', savescore);





/**win game function*/
function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";
  swal({title: "YOU WIN!", text: "YOU ARE NO LONGER LOST IN THE DARK", button: false, timer:3000})
        win = true;
  }

/**gameover function*/


function gameover() {
    turnCounter.innerHTML = "!";
    swal({title: "GAME OVER!", text: "YOU ARE LOST IN THE DARK", button: false, timer:3000})
        lose = true;
    }
/**Mute fucntion 
 document.getElementById("anyId").muted = !document.getElementById(
      "anyID"
    ).muted;*/