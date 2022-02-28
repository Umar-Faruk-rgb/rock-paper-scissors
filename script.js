const scores = {
    player : 0,
    computer : 0
};

const rockButton = document.querySelector('#rck');
const paperButton = document.querySelector('#pap');
const scissorsButton = document.querySelector('#sci');

rockButton.addEventListener('click', playRound('rock'));
paperButton.addEventListener('click', playRound('paper'));
scissorsButton.addEventListener('click', playRound('scissors'));

// function that generates the computer's play
function computerPlay (){
    const choiceList = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * 10);
    while (num > 2){
        num = Math.floor(Math.random() * 10);
    }
    return choiceList[num];
}

// Check winner of each round
function checkRoundWinner(computerSelection, playerSelection){
    let message = '';
    if (playerSelection === "rock" && computerSelection === "scissors"){
        message = "You Win! Rock beats Scissors";
        scores.player++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        message = "You Win! Scissors beats Paper";
        scores.player++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        message = "You Win! Paper beats Rock";
        scores.player++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        message = "You Lose! Rock beats Scissors";
        scores.computer++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        message = "You Lose! Scissors beats Paper";
        scores.computer++;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        message = "You Lose! Paper beats Rock";
        scores.computer++;
    }
    else{
        message = "Draw"
    }
    console.log(message);
}

// What happens in each round
function playRound (playerSelection){
    const computerSelection = computerPlay();
    checkRoundWinner(computerSelection, playerSelection);
    console.log("Player: " + scores.player);
    console.log("Computer: " + scores.computer);
}

/* Check overall winner
function checkWinner(){
    while (scores.player === scores.computer){
        console.log("It was a draw, we need a tie breaker");
        playRound(scores);
    }

    if (scores.player > scores.computer){
        console.log(`You Won the Game with ${scores.player - scores.computer} marks! Congratulations.`);
    }
    else{
        console.log(`You Lost the Game by ${scores.computer - scores.player} marks! Better Luck Next Time.`);
    }
}
*/