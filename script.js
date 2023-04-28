function updateResults(message) {
    const results = document.querySelector('.result');
    results.textContent = message;
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

/* Compares playerSelection and computerSelection strings to find outcome */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const computerChoice = document.querySelector('.computerChoice');
    computerChoice.textContent = "Computer chose: " + computerSelection;

    if (playerSelection === computerSelection) {
        updateResults("You Tie! Go again");
        return 'tie';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            updateResults("You Lose! Paper beats Rock");
            return 'loss';
        } else {
            updateResults("You Win! Rock beats Scissors");
            return 'win';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            updateResults("You Lose! Scissors beats Paper");
            return 'loss';
        } else {
            updateResults("You Win! Paper beats Rock");
            return 'win';
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === 'rock') {
            updateResults("You Lose! Rock beats Scissors");
            return 'loss';
        } else {
            updateResults("You Win! Scissors beats Paper");
            return 'win';
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const score = document.querySelector('.score');
    const winner = document.querySelector('.winner');

    /* Gets player choice from id tag from the button clicked */
    function play(e) {
        if (playerScore === 5 || computerScore === 5) {
            playerScore = 0;
            computerScore = 0;
            winner.textContent = "";
        }
        const result = playRound(e.target.id, getComputerChoice());
        if (result === 'win') playerScore++;
        else if (result === 'loss') computerScore++;

        score.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
        if (playerScore === 5) {
            winner.textContent = "You Win The Game!";
        } else if (computerScore === 5) {
            winner.textContent = "Computer Wins The Game!";
        }
    }

    rock.addEventListener('click', play);
    paper.addEventListener('click', play);
    scissors.addEventListener('click', play);
}

game();