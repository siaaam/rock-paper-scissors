let computerCounter = 0;
let playerCounter = 0;

function game() {
  for (let i = 1; i <= 5; i++) {
    function computerSelection() {
      let option = ['rock', 'paper', 'scessors'];
      const randomNum = Math.floor(Math.random() * option.length);
      return option[randomNum];
    }

    // console.log(computerSelection());

    function playerSelection() {
      return prompt().toLocaleLowerCase();
    }

    // variables:

    let computerPlay = computerSelection();
    let playerPlay = playerSelection();

    function playRound(computer, player) {
      // computer  win condition
      if (
        (computer === 'rock' && player === 'scessors') ||
        (computer === 'scessors' && player === 'paper') ||
        (computer === 'paper' && player === 'rock')
      ) {
        return `computer won.computer : ${computer} -  player : ${player}. computer : ${++computerCounter}`;
      } else if (computer === player) {
        return `match draw . computer : ${computer} -  player : ${player}`;
      } else {
        return `player won . computer : ${computer} -  player : ${player} . player: ${++playerCounter}`;
      }
    }
    console.log(playRound(computerPlay, playerPlay));
  }
  if (computerCounter > playerCounter) {
    console.log('computer won');
  } else if (computerCounter === playerCounter) {
    console.log('match draw');
  } else {
    console.log('player won');
  }
}

game();
