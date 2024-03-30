let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const playerSelectionDiv = document.querySelector("#player-selection");
const computerSelectionDiv = document.querySelector("#computer-selection");
const roundOutcomeDiv = document.querySelector("#round-outcome");
const scoreContainer = document.querySelector(".score-container")
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");
const resetBtn = document.createElement("button");

rockBtn.addEventListener("click", () => handleClick("rock"))
paperBtn.addEventListener("click", () => handleClick("paper"))
scissorsBtn.addEventListener("click", () => handleClick("scissors"))

function handleClick(playerSelection) {
    if (!isSeriesOver()) {
        const computerSelection = getComputerSelection();
        playRound(playerSelection, computerSelection);
        updateUi(playerSelection, computerSelection);
        if (isSeriesOver()) {
            declareWinner();

            resetBtn.textContent = "Reset";
            scoreContainer.appendChild(resetBtn);
            resetBtn.addEventListener("click", () => resetGame());
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++
        roundWinner = "player"
    }
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore++
        roundWinner = "computer"
    }
    if (playerSelection === computerSelection) {
        roundWinner = "draw"
    }
}

function getComputerSelection() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case (1):
            return "rock";
        case (2):
            return "paper";
        case (3):
            return "scissors";
    }
}

function updateUi(playerSelection, computerSelection) {
    playerSelectionDiv.textContent = `You chose: ${playerSelection}`;
    computerSelectionDiv.textContent = `Computer chose: ${computerSelection}`;

    if (roundWinner === "player") {
        roundOutcomeDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (roundWinner === "computer") {
        roundOutcomeDiv.textContent = `You lose! ${playerSelection} loses to ${computerSelection}`;
    } else {
        roundOutcomeDiv.textContent = `Draw! ${playerSelection} ties ${computerSelection}`;
    }

    playerScoreDiv.textContent = `Player Score: ${playerScore}`
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`
}

function isSeriesOver() {
    const winningScore = 5;
    return (playerScore === winningScore || computerScore === winningScore)
}

function declareWinner() {
    playerSelectionDiv.textContent = "";
    computerSelectionDiv.textContent = "";
    if (playerScore > computerScore) {
        roundOutcomeDiv.textContent = "Congratulations, you reached 5 points and won the game!"
    } else {
        roundOutcomeDiv.textContent = "Better luck next time, AI beat you to 5 points!"
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundWinner = ""
    playerSelectionDiv.textContent = "";
    computerSelectionDiv.textContent = "";
    roundOutcomeDiv.textContent = "";
    playerScoreDiv.textContent = "";
    computerScoreDiv.textContent = "";
    resetBtn.remove();
}



