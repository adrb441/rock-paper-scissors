/* Return a random choice for computer */
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice()); // test function for random choice
console.log(getComputerChoice());
console.log(getComputerChoice());