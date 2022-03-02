//Reset scores and player status and reaction
const scores = {
    player : 0,
    computer : 0
};

const playerStatus = {
    old : "off",
    new : "off"
};

const reaction = {
    next : 0,
    winner : ''
};

// All selectors
const playerEmoji = document.querySelector('#player-moji');
const computerEmoji = document.querySelector('#compu-moji');
const playerScore = document.querySelector('#pScore');
const computerScore = document.querySelector('#cScore');
const images = document.querySelectorAll('img');

//Click on a button to play the game
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (scores.player < 5 && scores.computer < 5){
            continuePlaying(button);
        }
        else {
            stopPlaying();
        }
    });
});

buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.height = "150px";
        button.style.width = "150px";
    });
});

buttons.forEach((button) => {
    button.addEventListener('mouseout', () => {
        button.style.height = "100px";
        button.style.width = "100px";
    });
});

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.height = "150px";
    });
}); 

images.forEach((image) => {
    image.addEventListener('mouseout', () => {
        image.style.height = "100px";
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
    showReaction();
    updateResults();

    if(scores.player === 5 || scores.computer === 5){
        if (scores.player > scores.computer){
            reaction.player = "&#129321 " + "&#129395";
            reaction.computer = "&#128557 " + "&#128557"
        }
        else {
            reaction.computer = "&#129321 " + "&#129395";
            reaction.player = "&#128557 " + "&#128557"
        }
        playerEmoji.innerHTML = reaction.player;
        computerEmoji.innerHTML = reaction.computer;
        declareWinner();
    }
};

// Check winner of each round
function checkRoundWinner(computerSelection, playerSelection){
    let message = '';
    if (playerSelection === "rock" && computerSelection === "scissors"){
        message = "You Win! Rock beats Scissors";
        scores.player++;
        reaction.winner = "player";
        reaction.next++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        message = "You Win! Scissors beats Paper";
        scores.player++;
        reaction.winner = "player";
        reaction.next++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        message = "You Win! Paper beats Rock";
        scores.player++;
        reaction.winner = "player";
        reaction.next++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        message = "You Lose! Rock beats Scissors";
        scores.computer++;
        reaction.winner = "computer";
        reaction.next++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        message = "You Lose! Scissors beats Paper";
        scores.computer++;
        reaction.winner = "computer";
        reaction.next++;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        message = "You Lose! Paper beats Rock";
        scores.computer++;
        reaction.winner = "computer";
        reaction.next++;
    }
    else{
        message = "Draw"
    }
    let remarks = document.querySelector('#remarks');
    remarks.textContent = message;
};

//Reaction
function showReaction(){
    switch(reaction.next){
        case 1 :
            if (reaction.winner === 'player'){
                reaction.player = "&#128578";
                reaction.computer = "&#128528"
            }
            else {
                reaction.computer = "&#128578";
                reaction.player = "&#128528"
            }
            break;
        
        case 2:
            if (reaction.winner === 'player'){
                reaction.player = "&#129392";
                reaction.computer = "&#128532"
            }
            else {
                reaction.computer = "&#129392";
                reaction.player = "&#128532"
            }
            break;
        
        case 3:
            if (reaction.winner === 'player'){
                reaction.player = "&#128525";
                reaction.computer = "&#128546"
            }
            else {
                reaction.computer = "&#128525";
                reaction.player = "&#128546"
            }
            break;
        
        case 4:
            if (reaction.winner === 'player'){
                reaction.player = "&#129322";
                reaction.computer = "&#128544"
            }
            else {
                reaction.computer = "&#129322";
                reaction.player = "&#128544"
            }
            break;
        
        case 5:
            if (reaction.winner === 'player'){
                reaction.player = "&#128519";
                reaction.computer = "&#128553"
            }
            else {
                reaction.computer = "&#128519";
                reaction.player = "&#128553"
            }
            break;

        case 6:
            if (reaction.winner === 'player'){
                reaction.player = "&#128522";
                reaction.computer = "&#128552"
            }
            else {
                reaction.computer = "&#128522";
                reaction.player = "&#128552"
            }
            break;

        case 7:
            if (reaction.winner === 'player'){
                reaction.player = "&#128518";
                reaction.computer = "&#128543"
            }
            else {
                reaction.computer = "&#128518";
                reaction.player = "&#128543"
            }
            break;

        case 8:
            if (reaction.winner === 'player'){
                reaction.player = "&#128515";
                reaction.computer = "&#128547"
            }
            else {
                reaction.computer = "&#128515";
                reaction.player = "&#128547"
            }
            break;
        
        case 9:
            if (reaction.winner === 'player'){
                reaction.player = "&#128513";
                reaction.computer = "&#128562"
            }
            else {
                reaction.computer = "&#128513";
                reaction.player = "&#128562"
            }
            break;
        
        case 10:
            if (reaction.winner === 'player'){
                reaction.player = "&#128524";
                reaction.computer = "&#128327"
            }
            else {
                reaction.computer = "&#128524";
                reaction.player = "&#128327"
            }
            break;

        default:
            reaction.computer = '';
            reaction.player = '';
    }

    playerEmoji.innerHTML = reaction.player;
    computerEmoji.innerHTML = reaction.computer;
}

// Update results
function updateResults(){
    playerScore.textContent = scores.player;
    computerScore.textContent = scores.computer;
}

//Declare overall winner
function declareWinner(){
    alert('GAME OVER')
    if (scores.player > scores.computer){
        alert(`You Won the Game with ${scores.player - scores.computer} points! Congratulations.`);
    }
    else{
        alert(`You Lost the Game by ${scores.computer - scores.player} points! Better Luck Next Time.`);
    }
};

//Show statistics