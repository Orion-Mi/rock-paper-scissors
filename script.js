/*function getComputerChoice(rock, paper, scissors){
    let getComputerChoice = Math.floor(Math.random() * 3);
    console.log(getComputerChoice);
}*/
const Choices = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    getComputerChoice = Math.floor(Math.random() * 3);
    let computerChoice = choices[getComputerChoice]
    return(computerChoice);
}
function playRound(playerChoice, computerChoice){
    playerChoice = Choices[0];
    if (computerChoice = playerChoice){
        console.log('It\'s a tie');
    }else if (computerChoice = 1){
        console.log('Computer wins!');
    }else {
        console.log('You win!');
    }
}