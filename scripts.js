document.addEventListener("DOMContentLoaded", function () {
    function getComputerChoice() {
        // get random between 1 and 3
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        // determine what the computer will play
        // rock = 1
        // paper = 2
        // scissors = 3
        switch (randomNumber) {
            case (1):
                return "rock";
            case (2):
                return "paper";
            case (3):
                return "scissors";
            default:
                return "unknown error"
        }
    }

    function playRound(playerSelection, ComputerSelection) {
        if (playerSelection === "rock") {
            switch (ComputerSelection) {
                case ("rock"):
                    return "Draw! Rock vs. Rock";
                case ("paper"):
                    return "You lose! Rock loses to Paper";
                case ("scissors"):
                    return "You win! Rock beats Scissors";
                default:
                    return "unknown error"
            }
        } else if (playerSelection === "paper") {
            switch (ComputerSelection) {
                case ("rock"):
                    return "You win! Paper beats Rock";
                case ("paper"):
                    return "Draw! Paper vs. Paper";
                case ("scissors"):
                    return "You lose! Paper loses to Scissors";
                default:
                    return "unknown error"
            }
        } else if (playerSelection === "scissors") {
            switch (ComputerSelection) {
                case ("rock"):
                    return "You lose! Scissors loses to Rock";
                case ("paper"):
                    return "You win! Scissors beats Paper";
                case ("scissors"):
                    return "Draw! Scissors vs. Scissors";
                default:
                    return "unknown error"
            }
        }
    }

    console.log(playRound("rock", getComputerChoice()));

})



