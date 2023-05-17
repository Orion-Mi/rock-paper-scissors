let playerScore = 0, computerScore = 0;
const choices = ['rock' , 'paper' , 'scissors'];

function getComputerChoice() {
        const ComputerChoice = Math.floor(Math.random() * choices.length);
         return choices[ComputerChoice];
}

function playRound(playerSelection, computerSelection){
    console.log('Player:', playerSelection, '<=>', 'Computer:', computerSelection)
        if (computerSelection == 'rock' && playerSelection == 'paper') {
            playerScore++;
            return "You beat computer";
        }else if (computerSelection == 'rock' && playerSelection == 'scissors'){
            computerScore++;
            return "Computer beats you";
        }else if (computerSelection == 'paper' && playerSelection == 'rock'){
            computerScore++;
            return "Computer beats you";
        }else if (computerSelection == 'paper' && playerSelection == 'scissors') {
            playerScore++;
            return "You beat the Computer";
            
        }else if (computerSelection == 'scissors' && playerSelection == 'rock') {
            playerScore++;
            return "You beat the computer";
        }else if (computerSelection == 'scissors' && playerSelection == 'paper'){
            computerScore++;
            return "Computer beats you";
        } else if (computerSelection == playerSelection){
        return "It\'s a tie";
        }  
}

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Enter your throw', 'rock, paper, scissors').toLowerCase();
        const computerSelection = getComputerChoice();  
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore){
        alert('You beat the compuer! You\'re a genius!');
    }else if (playerScore < computerScore){
        alert('You got beaten by the computer! Choose you throws carefully');
    }else {
        alert('You tied with the computer! Not so bad');
    }
}