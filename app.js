let order = [];
let playerOrder = [];
let score;
let level;
let gameover;
let compTurn;
let start = false;
let win;

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
        order.push(Math.floor(Math.random() + 3) + 1);
    }
    console.log(order);
}