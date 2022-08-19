const playerScore = 0;
const computerScore = 0;
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

function game(user_choice){
    const computerChoice = getComputerChoice();
    switch (user_choice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            console.log("User wins");
            break;
        case "sr":
        case "rp":
        case "ps":
            console.log("User loses");
            break;
        case "ss":
        case "rr":
        case "pp":
            console.log("tie");
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

main();

