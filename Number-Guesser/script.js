let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Function to generate new secret target after each round
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, computerGuess, target) => {

    if (userGuess > 9 || userGuess < 0) {
        console.log('User Input out of limit');
        alert('User Input out of limit');
    }
    if (Math.abs(userGuess - target) < Math.abs(computerGuess - target)) {
        return true;
    }
    else if (Math.abs(userGuess - target) > Math.abs(computerGuess - target)) {
        return false;
    }
    else {
        return true;
    }
}

const updateScore = (winner) => {
    if (winner !== 'human' || winner !== 'computer') {
        console.log('Winner can only be human or computer')
    }

    if (winner === 'human') {
        humanScore++;
    }
    else {
        computerScore++;
    }

}

const advanceRound = () => {
    currentRoundNumber++;
}

