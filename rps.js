//Javascript file for rock paper scissors console game

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

function playGame()
{
    var humanScore = 0;
    var computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                console.log("Tie!");
            }
            else if (computerChoice == "paper") {
                console.log("You lose! paper beats rock");
                computerScore++;
            }
            else //computer choice is scissors
            {
                console.log("You win! rock beats scissors");
                humanScore++;
            }
        }

        else if (humanChoice == "paper") {
            if (computerChoice == "paper") {
                console.log("Tie!");
            }
            else if (computerChoice == "scissors") {
                console.log("You lose! scissors beats paper");
                computerScore++;
            }
            else //computer choice is rock
            {
                console.log("You win! paper beats rock");
                humanScore++;
            }
        }

        else if (humanChoice == "scissors") {
            if (computerChoice == "scissors") {
                console.log("Tie!");
            }
            else if (computerChoice == "rock") {
                console.log("You lose! rock beats scissors.");
                computerScore++;
            }
            else //computer choice is paper
            {
                console.log("You win! scissors beats paper");
                humanScore++;
            }
        }
    }

    for(let i = 0; i < 5; i++)
    {   //get choices, and then play a round 5 separate times
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win the game %d to %d", humanScore, computerScore);
    }
    else if (computerScore > humanScore) {
        console.log("You lose the game %d to %d", computerScore, humanScore);
    }
    else {console.log("The game is a draw with a score %d to %d", humanScore, computerScore);}
}

playGame();