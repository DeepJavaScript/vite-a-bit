require('./index.css');

// const run = null;

function render() {
  const template = `<h1>Whack-a-mole! <span class="score">0</span></h1>
  <button id="start">Start!</button>

  <div class="game">
    <div class="hole hole1">
      <div class="mole"></div>
    </div>
    <div class="hole hole2">
      <div class="mole"></div>
    </div>
    <div class="hole hole3">
      <div class="mole"></div>
    </div>
    <div class="hole hole4">
      <div class="mole"></div>
    </div>
    <div class="hole hole5">
      <div class="mole"></div>
    </div>
    <div class="hole hole6">
      <div class="mole"></div>
    </div>
  </div>`;

  document.body.innerHTML = template;
}

function initStartButtonEvent() {
  const startButton = document.querySelector('#start');
  startButton.addEventListener('click', () => {
    setInterval(() => {
      const moleShowRhythm = Math.ceil(Math.random() * 1000);
      setTimeout(() => {
        const indexHold = Math.ceil(Math.random() * 6);
        const hole = document.querySelector(`.hole${indexHold}`);
        const mole = hole.querySelector('.mole');
        mole.style.top = '0%';
      }, moleShowRhythm);
    }, 1000);
  });
}

function initKickMoleEvent() {
  let score = 0;
  const moles = document.querySelectorAll('.mole');
  moles.forEach((mole) => mole.addEventListener('click', (e) => {
    e.target.style.top = '100%';

    const scoreBoard = document.querySelector('.score');
    score += 1;
    scoreBoard.textContent = score;
  }));
}

render();
initStartButtonEvent();
initKickMoleEvent();
