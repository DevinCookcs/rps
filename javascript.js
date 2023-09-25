
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

function getPlayerChoice() {
    //get player choice from button id
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



function game() {
    var playerScore = 0;
    var computerScore = 0;
    var rounds = 0;

    var playerChoice = getPlayerChoice();
    var computerChoice = getComputerChoice();
    var result = document.querySelector(".round");
    result.innerHTML = "The Computer has selected " + computerChoice;
    var winner = playRound(playerChoice, computerChoice);

    switch (winner) {
        case "Player Wins":
            playerScore++;
            document.querySelector(".left").innerHTML = playerScore;
            rounds++;
            break;
        case "Computer Wins":
            computerScore++;
            document.querySelector(".right").innerHTML = computerScore;
            rounds++;
            break;
        case "Tie!":
            rounds++;
            break;
    }
    var result2 = document.querySelector(".result");
    result2.innerHTML = winner;

}

resetBtn.addEventListener('click', () => location.reload());

rpsButtons.forEach(button => { button.addEventListener('click', getPlayerChoice) });

game();