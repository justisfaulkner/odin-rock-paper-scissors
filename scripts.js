const playerOptions = document.querySelector(".player-options");
playerOptions.addEventListener("click", (e) => {
    const playerSelection = e.target.id;
    if (playerSelection) {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        let computerSelection;
        switch (randomNumber) {
            case (1):
                computerSelection = "rock";
                break;
            case (2):
                computerSelection = "paper";
                break;
            case (3):
                computerSelection = "scissors";
                break;
        }

        console.log(`Player: ${e.target.id} Computer: ${computerSelection}`);

        const selectionsContainer = document.querySelector(".selections-container");
        const playerSelectionDiv = document.createElement("div");
        const computerSelectionDiv = document.createElement("div");

        playerSelectionDiv.textContent = `You selected: ${playerSelection}`;
        computerSelectionDiv.textContent = `Computer selected ${computerSelection}`;

        selectionsContainer.appendChild(playerSelectionDiv);
        selectionsContainer.appendChild(computerSelectionDiv);
    }
});




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


