        // Sets the starting scores
        let playerScore = 0;
        let computerScore = 0;

        // Picks a random option for the computer from the rps array
        function getComputerChoice() {
            let options = ["rock", "paper", "scissors"];
            let computerSelection = options[Math.floor(Math.random()* options.length)];
            return computerSelection;
        }

        // Plays a single game by comparing the player choice to computer choice
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === "rock" && computerSelection === "paper") {
                computerScore++;
                return `You lose, ${playerSelection} is weaker than ${computerSelection}!`;
            } else if (playerSelection === "rock" && computerSelection === "rock") {
                return "You tied!";
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++;
                return `You win, ${playerSelection} is stronger than ${computerSelection}!`;
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore++;
                return `You win, ${playerSelection} is stronger than ${computerSelection}!`;
            } else if (playerSelection === "paper" && computerSelection === "paper") {
                return "You tied!";
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                computerScore++
                return `You lose, ${playerSelection} is weaker than ${computerSelection}!`;
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                computerScore++;
                return `You lose, ${playerSelection} is weaker than ${computerSelection}!`;
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore++;
                return `You win, ${playerSelection} is stronger than ${computerSelection}!`;
            } else if (playerSelection === "scissors" && computerSelection === "scissors") {
                return "You tied!";
            }
        }

        // Loops the game 5 times and compares scores declaring a winner at the end
        function playGame() {
            for(let i = 0; i < 5; i++) {
                let playerSelection = prompt("pick rock, paper or scissors").toLowerCase();
                let computerSelection = getComputerChoice();
                console.log(playRound(playerSelection, computerSelection));
            }
            if (playerScore > computerScore) {
                console.log(`You've won the game with ${playerScore} points against the computer's ${computerScore}!`);
            } else if (computerScore > playerScore) {
                console.log(`You've lost the game, the computer scored a total of ${computerScore} points against your ${playerScore}!`);
            } else {
                console.log(`You've tied with the computer with a total of ${playerScore} points!`)
            }
        }

        playGame();