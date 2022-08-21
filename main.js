let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNum = Math.floor(Math.random() *3);
    return choices[randomNum];
}

function win(user, computer){
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
}

function lose(user, computer){
    computerScore++;
    computerScore_span.innerHTML = computerScore;

}

function gameOver(){
    if (computerScore === 5){
        console.log("Game over");
    }
}

function tie(user, computer){
    console.log("Its a tie");
}


function game(user_choice){
    const computerChoice = getComputerChoice();
    switch (user_choice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "sr":
        case "rp":
        case "ps":
            lose();
            break;
        case "ss":
        case "rr":
        case "pp":
            tie();
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    
    paper_div.addEventListener('click', function(){
        game("p");
    })
    
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

gameOver();
main();

