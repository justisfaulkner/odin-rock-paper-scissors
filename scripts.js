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

    function getPlayerChoice() {
        let playerInput;
        while (true) {
            playerInput = prompt("Rock, Paper, or Scissors?")

            if (playerInput === "") {
                return null;
            } else {
                playerInput = playerInput.toLowerCase();
            }

            if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
                return playerInput;
            } else {
                alert("Invalid choice, please choose between 'Rock' 'Paper' 'Scissors'");
            }
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
        } else {
            return "Player did not make a selection, please refresh to play."
        }
    }

    function playSeries() {
        let playerScore = 0;
        let computerScore = 0;

        for (let i = 0; i < 5; i++) {
            const playerChoice = getPlayerChoice();
            if (playerChoice === null) {
                return "Canceled. Please refresh to play again.";
            }
            const computerChoice = getComputerChoice();
            const roundResult = playRound(playerChoice, computerChoice);

            if (roundResult.includes("win")) {
                playerScore++;
            } else if (roundResult.includes("lose")) {
                computerScore++;
            }

            console.log(`
                Player choice: ${playerChoice}
                Computer choice: ${computerChoice}
                Round ${(i + 1)}: ${roundResult}
                Player: ${playerScore} to Computer: ${computerScore}
                `);
        }

        if (playerScore > computerScore) {
            return `Player wins ${playerScore} to ${computerScore} | Refresh to play again`
        } else if (playerScore < computerScore) {
            return `Player loses ${playerScore} to ${computerScore} | Refresh to play again`
        } else {
            return `Draw: ${playerScore} to ${computerScore} | Refresh to play again`
        }
    }

    alert(playSeries());

})



