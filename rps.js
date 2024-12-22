//Javascript file for rock paper scissors console game
var humanScore = 0;
var computerScore = 0;

function getComputerChoice()
{
    let choice = ""; //initialize choice
    let num = Math.random();
    if (num <= 1/3) {
        choice = "rock";
    }
    else if (num <= 2/3) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}
console.log(getHumanChoice());