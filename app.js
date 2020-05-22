let order = [];
let playerOrder = [];
let score;
let level;
let gameover;
let compTurn;
let intervalId;
let start = false;
let win;
let upOn = 'img src ="/images/upOn.png"';
let leftOn = 'img src ="/images/leftOn.png"';
let rightOn = 'img src ="/images/rightOn.png"';

const runButton = document.querySelector('.runButton');
const scoreCount = document.querySelector('.scoreCount');
const levelCount = document.querySelector('levelCount');
const upOff = document.querySelector('upOff');
const leftOff = document.querySelector('leftOff');
const rightOff = document.querySelector('rightOff');
// highscore const highScore = document.querySelector('highScore');

//press run button to start game

runButton.addEventListener('click', play);
    
function play() {
    win = false;
    order = [];
    playerOrder = [];
    score = 0;
    level = 0;
    for (var i =0; i < 50; i++) {
        order.push(Math.floor(Math.random() * 3) + 1);
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
    if (flash == level) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    
    }

    if(compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) up();
            if (order[flash] == 2) left();
            if (order[flash] == 3) right();
            flash++;
        }, 200);
        }
    }
// to turn the arrows from white to yellow
function flash() {

}
//to turn the arrows from yellow to white
function clearColor() {

}
// to turn up from off white to on yellow
function up() {
    if (on) {
        let on = upOn;
    }
}