function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); // Pick a random integer value between [0, 2]
    
    switch(computerChoice) {
        case 0:
            return 'rock'; // since we used return there is no need for break
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Enter your choice from rock / paper / scissors').toLowerCase();
    
    // task says assume the user will always enter a valid choice so just return the humanChoice
    return humanChoice;
}