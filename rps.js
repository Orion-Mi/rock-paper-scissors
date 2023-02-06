const choices = ['rock' , 'paper' , 'scissors'];

function startGame(playerSelection) {

        let getComputerChoice = Math.floor(Math.random() *3);
         let ComputerChoice = choices[getComputerChoice];

    //playerSelection = parseInt(prompt("Enter your choice"));

    if (choices.includes(playerSelection)) {
        if (ComputerChoice == 'rock' && playerSelection == 'paper') {
            alert("You beat computer");
        }
        else if (ComputerChoice == 'rock' && playerSelection == 'scissors'){
            alert("Computer beats you");
        }
        else if (ComputerChoice == 'paper' && playerSelection == 'rock'){
            alert("Computer beats you");
        }
        else if (ComputerChoice == 'paper' && playerSelection == 'scissors') {
            alert("You beat the Computer");
        }
        else if (ComputerChoice == 'scissors' && playerSelection == 'rock') {
            alert("You beat the computer");
        }
        else if (ComputerChoice == 'scissors' && playerSelection == 'paper'){
            alert("Computer beats you");
        } 
        else if (ComputerChoice == playerSelection){
            alert("It\'s a tie");
        }
    }else {
        alert('Invalid choice!');
        return;
    }
}