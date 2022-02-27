function computerPlay (){
    const choiceList = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * 10);
    while (num > 2){
        num = Math.floor(Math.random() * 10);
    }
    return choiceList[num];
}

function playRound (scores){
    const computerSelection = computerPlay();
    const playerSelection = prompt("Rock, Scissors or Paper? ").toLocaleLowerCase();
    let message;

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

function game(){
    const scores = {
        player : 0,
        computer : 0,
    };

    for (let i = 0; i < 5; i++){
        playRound(scores);
        console.log("Player: " + scores.player);
        console.log("Computer: " + scores.computer);
    }

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

game();