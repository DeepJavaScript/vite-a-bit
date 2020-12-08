require("./index.css");

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
  </div>`

  document.body.innerHTML = template;
}

function initStartButtonEvent() {
  const start_button = document.querySelector('#start');
  start_button.addEventListener('click', () => {
    setInterval(() => {
      const mole_show_rhythm = (Math.floor(Math.random()*10)%10+1)*100
      setTimeout(() => {
        const index_hold = Math.floor(Math.random()*10)%6+1;
        const hole = document.querySelector(`.hole${index_hold}`);
        const mole = hole.querySelector('.mole');
        mole.style.top = '0%';
      }, mole_show_rhythm);
    }, 1000);
  });
}

function initKickMoleEvent() {
  let score = 0;
  const moles = document.querySelectorAll('.mole');
  moles.forEach(mole => mole.addEventListener('click', e => {
    e.target.style.top = '100%';

    const scoreBoard = document.querySelector('.score');
    scoreBoard.textContent = ++score;
  }));
}

render();
initStartButtonEvent();
initKickMoleEvent();
