/* Returns a random choice for computer */
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

/* Compares playerSelection with computerSelection for win condition */
function playRound(playerSelection, computerSelection) {
    if (playerSelection != null) {
        playerSelection = playerSelection.toLowerCase();
    }

    /* Check for win condition, if tie call function again until win/lose */
    if (playerSelection === computerSelection) {
        console.log("You Tie! Go again");
        playerSelection = prompt("Please enter a choice (\"Rock\" \"Paper\" \"Scissors\"): ");
        return playRound(playerSelection, getComputerChoice());
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log("You Lose! Paper beats Rock");
            return false; // return false if player loses
        } else {
            console.log("You Win! Rock beats Scissors");
            return true; // return true if player wins
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            console.log("You Lose! Scissors beats Paper");
            return false;
        } else {
            console.log("You Win! Paper beats Rock");
            return true;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === 'rock') {
            console.log("You Lose! Rock beats Scissors");
            return false;
        } else {
            console.log("You Win! Scissors beats Paper");
            return true;
        }
    } else {
        console.log("Invalid choice, please choose only from: Paper Rock Scissors");
        playerSelection = prompt("Please enter a choice (\"Rock\" \"Paper\" \"Scissors\"): ");
        return playRound(playerSelection, getComputerChoice());
    }
}

/* runs 5 rounds of game */
function game() {
    let score = 0;
    let i = 0;
    console.log("You are now beginning a game of Rock Paper Scissors!");
    console.log("The winner is whoever wins the most rounds out of 5");
    while (i < 5) {
        
        console.log("Starting round " + (i + 1));
        const playerSelection = prompt("Please enter a choice (\"Rock\" \"Paper\" \"Scissors\"): ");
        if (playRound(playerSelection, getComputerChoice())) {
            score++;
        }
        i++;
        console.log(score);
    }

    console.log("You beat the computer " + score + " out of 5 rounds");
    if (score >= 3) {    
        console.log("You Win The Game!");
    } else {
        console.log("You Lose The Game!");
    }
}

game();