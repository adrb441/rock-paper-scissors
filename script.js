/* Returns a random choice for computer */
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

/* Compares playerSelection with computerSelection for win condition */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log("You Lose! Paper beats Rock");
        } else {
            console.log("You Win! Rock beats Scissors");
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            console.log("You Lose! Scissors beats Paper");
        } else {
            console.log("You Win! Paper beats Rock");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === 'rock') {
            console.log("You Lose! Rock beats Scissors");
        } else {
            console.log("You Win! Scissors beats Paper");
        }
    } else {
        console.log("Invalid choice, please choose only from: Paper Rock Scissors");
    }
}

/*console.log(getComputerChoice()); // test function for random choice */

let playerSelection;
playerSelection = prompt("Enter choice");
playerSelection = playerSelection.toLowerCase();
/*console.log(playerSelection); // check player selection */

playRound(playerSelection, getComputerChoice());