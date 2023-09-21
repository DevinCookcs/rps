var playerChoice = prompt("Select Rock, Paper or Scissors");
var computerChoice = getComputerChoice();
console.log("The Computer has selected " + computerChoice);
console.log(playRound(playerChoice, computerChoice));

function getComputerChoice() {
    var number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "rock";
    }
    else if (number === 1) {
        return "paper";
    }
    else
        return "scissors";
}

function playRound(player, computer) {
    var p = player.toLowerCase();
    var c = computer.toLowerCase();
    if (p === c) {
        return "Tie!";
    }
    if (p === "rock") {
        if (c === "paper") {
            return "Computer Wins";
        }
        else
            return "Player Wins";
    }
    if (p === "paper") {
        if (c === "scissors") {
            return "Computer Wins";
        }
        else
            return "Player Wins";
    }
    if (p === "scissors") {
        if (c === "rock") {
            return "Computer Wins";
        }
        else
            return "Player Wins";
    }
}

function game(){
    var playerScore = 0;
    var computerScore = 0;
    var rounds = 0;

    while (rounds < 5){
        var playerChoice = prompt("Select Rock, Paper or Scissors");
        var computerChoice = getComputerChoice();
        console.log("The Computer has selected " + computerChoice);
        var winner = playRound(playerChoice, computerChoice);
        
        switch (winner) {
            case "Player Wins":
                playerScore++;
                rounds++;
                break;
            case "Computer Wins":
                computerScore++;
                rounds++;
                break;
            case "Tie!":
                rounds++;
                break;
        }
        console.log(winner);
    }

    return playerScore;
}

game();