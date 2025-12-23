let humanScore = 0;
let computerScore = 0;
const rpsButtons = document.querySelectorAll('#rps button');
const gameResults = document.querySelector('div#game-results');
const playAgainButton = document.querySelector('#play-again');

rpsButtons.forEach((rpsButton) => {
  // When rps buttons clicked play one round against computer
  rpsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = rpsButton.id;
    playRound(humanChoice, computerChoice);
  });
});

playAgainButton.addEventListener('click', () => {
  rpsButtons.forEach((rpsButton) => {
      toggleButton(rpsButton); // enable rps buttons
  });
  toggleButton(playAgainButton); // disable Play again button
  // clear game-results div for a fresh run
  gameResults.textContent = '';
});

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

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    gameResults.innerHTML += `Draw! You both choose ${capitalizeFirstLetter(humanChoice)}` + '<br>'; // no points for both
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    gameResults.innerHTML += `You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}` + '<br>';
    humanScore += 1;
  } else {
    gameResults.innerHTML += `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}` + '<br>';
    computerScore += 1;
  }

  if (humanScore === 5 || computerScore === 5) {
    displayRunningScore();
    declareWinner();
    rpsButtons.forEach((rpsButton) => {
      toggleButton(rpsButton); // disable rps buttons
    })
    toggleButton(playAgainButton); // enable play again button

    // reset humanScore, computerScore for a new run
    humanScore = 0;
    computerScore = 0;
  }
}

function displayRunningScore() {
  gameResults.innerHTML += '<br>' + `Human score: ${humanScore} &nbsp Computer score: ${computerScore}` + '<br>';
}

function declareWinner() {
  if (humanScore > computerScore) {
    gameResults.innerHTML += 'Human wins!';
  } else if (humanScore < computerScore) {
    gameResults.innerHTML += 'Computer wins!';
  } else {
    gameResults.innerHTML += 'It\'s a draw!';
  }
}

function toggleButton(button) {
  button.disabled = !button.disabled;
}