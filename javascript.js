const choiceBtn = document.querySelectorAll(".rps-buttons");
const resetBtn = document.querySelector(".play-again");
const playerPoints = document.querySelector(".left");
const computerPoints = document.querySelector(".right");
var playerScore = 0;
var computerScore = 0;
var rounds = 0;
let playerChoice;


resetBtn.addEventListener('click', () => location.reload());

choiceBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });


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

function getPlayerChoice(e) {
    //get player choice from button id
    playerChoice = e.target.textContent;
    playRound(playerChoice, getComputerChoice());
}

function playRound(player, computer) {
    var p = player.toLowerCase();
    var c = computer.toLowerCase();
    var winner;

    var result = document.querySelector(".round");
    result.innerHTML = "The Computer has selected " + computer;

    if (p === c) {
        winner = "Tie!";
    }
    else if (p === "rock") {
        if (c === "paper") {
            winner = "Computer Wins";
        }
        else
            winner = "Player Wins";
    }
    else if (p === "paper") {
        if (c === "scissors") {
            winner = "Computer Wins";
        }
        else
            winner = "Player Wins";
    }
    else if (p === "scissors") {
        if (c === "rock") {
            winner = "Computer Wins";
        }
        else
            winner = "Player Wins";
    }
    checkWinner(winner);
}



function checkWinner(winner) {

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
    
    var val = endGame(playerScore, computerScore);
    switch (val) {
        case "The Player has won the game":
            var result2 = document.querySelector(".result");
            result2.innerHTML = val;
            break;
        case "The Computer has won the game":
            var result2 = document.querySelector(".result");
            result2.innerHTML = val;
            break;
    }
}


function endGame(p, c) {
    if (p === 5) {
        return "The Player has won the game";
    }
    else if (c === 5)
        return "The Computer has won the game";
}