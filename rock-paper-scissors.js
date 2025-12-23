let humanScore = 0;
let computerScore = 0;
let noOfRoundsPlayed = 0;

const rpsButtons = document.querySelectorAll('#rps button');
rpsButtons.forEach((rpsButton) => {
  rpsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = rpsButton.id;
    playRound(computerChoice, humanChoice);
    noOfRoundsPlayed++;
  });
});

// playGame();

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3); // Pick a random integer value between [0, 2]

  switch (computerChoice) {
    case 0:
      return 'rock'; // since we used return there is no need for break
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function getHumanChoice() {
  let humanChoice = prompt('Enter your choice from rock / paper / scissors');

  if (humanChoice === null) { // user pressed cancel button
    return null;
  }
  humanChoice = humanChoice.toLowerCase();

  while (true) {
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
      return humanChoice;
    }
    humanChoice = prompt('Invalid Input! Please enter your choice from rock / paper / scissors').toLowerCase();

    if (humanChoice === null) { // user pressed cancel button
      return null;
    }
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

function playGame() {
  console.log(`Human score: ${humanScore}   Computer score: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log('Human wins!');
  } else if (humanScore < computerScore) {
    console.log('Computer wins!');
  } else {
    console.log('It\'s a draw!');
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Draw! You both choose ${capitalizeFirstLetter(humanChoice)}`); // no points for both
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}`);
    humanScore += 1;
  } else {
    console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}`);
    computerScore += 1;
  }
}