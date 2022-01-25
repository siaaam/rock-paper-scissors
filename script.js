const computerScore = document.querySelector('.computer-score');
const playerScore = document.querySelector('.player-score');
const buttons = document.querySelectorAll('button');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const result = document.querySelector('.result');
let playerPlay;
let computerPlay;
let computerCounter = 0;
let playerCounter = 0;

// random selector by computer

function computerSelection() {
  let option = ['rock', 'paper', 'scessors'];
  const randomNum = Math.floor(Math.random() * option.length);
  return option[randomNum];
}

function playRound(computer, player) {
  // computer  win condition
  if (
    (computer === 'rock' && player === 'scessors') ||
    (computer === 'scessors' && player === 'paper') ||
    (computer === 'paper' && player === 'rock')
  ) {
    computerCounter++;

    console.log(`computerCounter: ${computerCounter}`);

    computerScore.innerHTML = `computer: ${computerCounter}`;
    result.innerHTML = `result: computer winner`;
  } else if (computer === player) {
    result.innerHTML = `result: draw`;
  } else {
    playerCounter++;
    console.log(`playerCounter: ${playerCounter}`);
    playerScore.innerHTML = `player: ${playerCounter}`;
    result.innerHTML = `result: player winner`;
  }
}

function clickHandler() {
  buttons.forEach((button) => button.addEventListener('click', getWinner));
}

function getWinner(e) {
  playerPlay = e.target.value;
  computerPlay = computerSelection();
  playerChoice.innerHTML = `player choose: ${playerPlay}`;
  computerChoice.innerHTML = `computer choose: ${computerPlay}`;

  playRound(computerPlay, playerPlay);

  if (computerCounter === 5) {
    document.querySelector('.final').innerHTML = `Final: computer finally win`;

    setTimeout(() => location.reload(), 2000);
  }

  if (playerCounter === 5) {
    document.querySelector('.final').innerHTML = `Final: player finally win`;

    setTimeout(() => location.reload(), 2000);
  }
}

clickHandler();
