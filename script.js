//Reset scores
const scores = {
    player : 0,
    computer : 0
};

//Click on a button to play the game
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (scores.player < 5 && scores.computer < 5){
            continuePlaying(button);
        }
        else stopPlaying();
    });
});

// Dont play if winner is found (deactivate the button)
function stopPlaying(){
    buttons.forEach((button) => {
        button.removeEventListener('click', () => {
            if (scores.player < 5 && scores.computer < 5){
                continuePlaying(button);
            }
            else stopPlaying();
        });
    });
};

//Play if winner is not found
function continuePlaying(button){
    if(button.id === 'rck'){
        playRound('rock');
    }
    else if(button.id === 'pap'){
        playRound('paper');
    }
    else {
        playRound('scissors');
    }
};

// Generates the computer's choice
function computerPlay (){
    const choiceList = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * 10);
    while (num > 2){
        num = Math.floor(Math.random() * 10);
    }
    return choiceList[num];
};

// What happens in each round
function playRound (playerSelection){
    const computerSelection = computerPlay();
    checkRoundWinner(computerSelection, playerSelection);
    console.log("Player: " + scores.player);
    console.log("Computer: " + scores.computer);

    if(scores.player === 5 || scores.computer === 5){
        console.log('GAME OVER');
        declareWinner();
    }
};

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
};

//Declare overall winner
function declareWinner(){
    if (scores.player > scores.computer){
        console.log(`You Won the Game with ${scores.player - scores.computer} points! Congratulations.`);
    }
    else{
        console.log(`You Lost the Game by ${scores.computer - scores.player} points! Better Luck Next Time.`);
    }
};