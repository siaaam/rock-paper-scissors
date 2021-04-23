//get a random number
function getRandomNumber(){
  let randomNumber = Math.floor(Math.random() * 3)
  return randomNumber;
}


// Initialize  variables;
let values = ['Rock','Paper','Scissors']
let computerSelection = values[getRandomNumber()].toLowerCase();
let playerSelection;
let counterForComputer = 0;
let counterForPlayer = 0;



// Game logic
function playRound(computer,player){
  //check win for computer;
  if(computer === 'rock' && player === 'scissors'  || computer === 'scissors' && player === 'paper' || computer === 'paper' && player === 'rock'){
    console.log(`computer win! You Lost. computer: ${computer} - player: ${player}`);
    return counterForComputer++;
  } else if(computer === player){
    console.log(`It's a tie. computer: ${computer} - player: ${player}`);
    return counterForPlayer,counterForComputer;
  } else {
    console.log(`You win! Computer Lost. computer: ${computer} - player: ${player}`)
    return counterForPlayer++;
  }
}



// repeat games for 5 times;
for(let i = 0;i <5;i++){
    let computerSelection = values[getRandomNumber()].toLowerCase();
    let playerSelection = prompt('Enter rock,paper or scissors').toLowerCase();
    console.log(playRound(computerSelection,playerSelection))
    console.log(`computer : ${counterForComputer}`)
    console.log(`player : ${counterForPlayer}`)
  }








