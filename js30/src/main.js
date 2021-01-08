import './main.css';

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

const startGameButton = document.querySelector('.start-game-button');
startGameButton.addEventListener('click', startGame);

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList?.add('up');
  setTimeout(() => {
    hole.classList?.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => {
    timeUp = true;
  }, 10000);
}

function bonk(e) {
  if (!e.isTrusted) return; // cheater!
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));

// ===================================
// 測試 Babel polyfill

// generator function
function* generatorFunc(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}
const generator = generatorFunc(10);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// # ES2016
const ES2016 = 'xxx'.includes('x');
console.log(ES2016);

// # ES2017
const ES2017 = Object.entries({ a: 1 });
console.log(ES2017);

// # ES2018
const ES2018 = Promise.resolve(1).finally();
console.log(ES2018);

// # ES2019
const ES2019 = Object.fromEntries([['a', 1]]);
console.log(ES2019);

// # ES2020
const ES2020 = 'abc'.matchAll(/\w/g);
console.log([...ES2020]);

// # ES2021
const ES2021 = null ?? 'default';
console.log(ES2021);

class Demo {
  constructor() {
    this.state = {
      name: 'Titan'
    };
    this.$app = document.querySelector('.game');
    this.$app.addEventListener('click', this.printArrow);
    this.$app.addEventListener('click', this.print);
  }

  printArrow = () => {
    console.log('printArrow', this.state);
  };

  print() {
    console.log('print', this.state);
  }
}

const demo = new Demo();
console.log(demo);
