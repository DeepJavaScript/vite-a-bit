const start = document.querySelector('.startGame');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

start.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', header));

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;

  return hole;
}

function molePeep() {
  const time = randomTime(500, 1200);
  const hole = randomHole(holes);

  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) molePeep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  molePeep();

  setTimeout(() => {
    timeUp = true;
  }, 10000);
}

function header(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

var abcdef;
