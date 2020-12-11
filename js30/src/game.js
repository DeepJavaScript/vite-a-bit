const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
const startButton = document.getElementById('start-button')
let lastHole
let timeUp = false
let score = 0
let iamwrong

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

function randomHole(holes, iamwrong) {
	const index = Math.floor(Math.random() * holes.length)
	const hole = holes[index]

	if (hole === lastHole) return randomHole(holes)

	lastHole = hole
	return hole
}

function peep() {
	const time = randomTime(200, 1000)
	const hole = randomHole(holes)
	hole.classList.add('up')
	setTimeout(() => {
		hole.classList.remove('up')
		console.log(timeUp)
		if (!timeUp) peep()
	}, time)
}

function startGame() {
	scoreBoard.textContent = 0
	score = 0
	timeUp = false
	peep()
	setTimeout(() => (timeUp = true), 2000)
}

startButton.addEventListener('click', startGame)

function bonk(event) {
	if (!event.isTrusted) return
	this.parentNode.classList.remove('up')
	score++
	scoreBoard.textContent = score
}

moles.forEach((mole) => mole.addEventListener('click', bonk))
