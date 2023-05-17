let playerScore = 0;
let compScore = 0;

const choices = ['rock', 'paper', 'scissors'];
//function computerPlay()
const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

//function playRound(playerSelection, computerSelection) 
const playRound = (playerSelection, computerSelection) => {
    
    if (playerSelection === computerSelection) {
        console.log('It\'s a tie, You both picked' `${playerSelection}`);
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        compScore++;
        console.log('You lost, Rock crushes Scissors');
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        playerScore++;
        console.log('You won, Scissors cuts Paper');
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock') {
        compScore++;
        console.log('You lost, Paper covers Rock');
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        playerScore++;
        console.log('You won, Rock crushes Scissors');
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        compScore++;
        console.log( 'You lost, Scissors cuts Paper');
    } 
    else if (computerSelection === 'rock' && playerSelection === 'paper'){
        playerScore++;
        console.log('You won, paper covers rock');
    }
    else {
        alert('Invalid choice!');
        return;
    }
}
const playerSelection = prompt("Choose what to throw", 'Rock, Paper, Scossors').toLowerCase()

//function game()
const startGame = () => {
    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

    }
    if (playerScore > compScore){
        return 'You beat the compuer! You\'re a genius!';
    }else if (playerScore < compScore){
        return 'You got beaten by the computer! Choose you throws carefully';
    }else {
        return 'You tied with the computer! Not so bad'
    }
}