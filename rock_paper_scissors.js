/*
Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/
//  creating function for user choice
const getUserChoice=(userInput)=>{
    if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
      return userInput;
    }else{
      console.log('Invalid option');
    }
  }
  //console.log(getUserChoice('rock'.toLowerCase()));
  
  // Creating function for Computer choice
  const getComputerChoice=()=>{
    let randomNumber=Math.floor(Math.random()*3);
    switch(randomNumber){
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
    }
  
  //console.log(getComputerChoice());
  
  // Creating function to battle against user and computer
  const determineWinner= (userChoice,computerChoice) =>{
     if(userChoice === computerChoice){
      return 'Game was a tie';
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
         return 'computer won';
      }else if (computerChoice ==='scissors'){
         return 'user won';
      }
    }else if(userChoice === 'paper') {
      if(computerChoice === 'rock'){
         return 'user won';
         }else if (computerChoice === 'scissors'){
           return 'computer won';
         }
    }else if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'computer won';
      }else if (computerChoice === 'paper'){
        return 'user won';
      }   
    }
    }
  //console.log(determineWinner(getUserChoice('paper'),getComputerChoice()));
  // creating function to play or start the game
  const playGame=()=>{
      const userChoice=getUserChoice('rock');
      const computerChoice=getComputerChoice();
      console.log('You threw: '+userChoice);
      console.log('The computer threw: '+computerChoice);
      console.log(determineWinner(userChoice,computerChoice));
  };
  
  playGame();
  
  
  
  
  
  
  