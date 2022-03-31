//create a function to return computer selcection
function computerPlay(){
    // store  random numbers in a variable and multiply it by 3
    let computerChioceValue = (Math.random() + 0.2) * 3;
          
    // take a fied width of 2
        
    computerChioceValue = computerChioceValue.toFixed(2);
    
    // round the number up to whole number ranging from 1 - 3
    
    // create a variable to hold the result of the whole number
     computerChioceValue = Math.floor(computerChioceValue);
            
    //create another variable to hold the string "rock", "paper" and "scissors"
        
    let computerChioce;
        
    // create a switch statement that return the required string, based on the value reurned from the computerChoiceValue
    switch (computerChioceValue){
        case 0:
        case 1:
            computerChioce = "rock";
            break;
            case 2:
                computerChioce = "paper";
                break;
                case 3:
                    computerChioce = "scissors";
                    break;
                    default:
                        computerChioce = "no computer selection now";
    
    
    }
      
    return computerChioce;
    
    }
    // End of computerplay function



// create a function to return the players selection
playerChioce = function(){
    // create a variable to store the player selection
    let playerSelection;
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors"
    // store the first variable using the logical OR in "r" variable
    let r = rock || paper || scissors;
    // store the first variable using the logical OR in "s" variable
    let s = scissors || rock || paper;
    // store the first variable using the logical OR in "p" variable
    let p = paper || rock || scissors
    // create a variable to hold the string wrong option so that a user can enter it again 
    let wrongOption = "Wrong word typed, please type again";
    // create a an infinite loop
    while (true){
        // enter the player selection value
         playerSelection = prompt(`Choose "rock", "paper", "scissors"`);
         // make the player selection to be none case sensitive
        playerSelection = playerSelection.toLowerCase();
        // check the player selection 
        if(playerSelection == s) {
           
            break;
            
        }
         else if (playerSelection == r) {
            
            break;
            
        }
         else if(playerSelection == p) {
            
            break;
            
        }
        else{
             alert(wrongOption);
            continue;
        }
        
    }
    return playerSelection;
}
    
    
    
    //let playerFinalSelection = playerChioce();
//let computerFinalSelection = computerPlay();
    let computerWinCount = 0;
let playerWinCount = 0;
let draws = 0;
function compareSelections(playerFinalSelection, computerFinalSelection){
    let computerWinner = "Computer win!";
    let playerWin = "You win!"
    let draw = "Draw, no win!"
    if(playerFinalSelection == computerFinalSelection){
        ++draws
        alert(draw + " "+ draws);
    }
    else if((playerFinalSelection == "paper") && (computerFinalSelection == "rock")){
        playerWinCount++
        alert(playerWin +" " +   playerWinCount);
    }
    else if((playerFinalSelection == "scissors") && (computerFinalSelection == "paper")){
        playerWinCount++;
        alert(playerWin +" " +   playerWinCount);
    }
    else if((playerFinalSelection == "rock") && (computerFinalSelection == "scissors")){
        playerWinCount++;
        alert(playerWin +" " +   playerWinCount);
    }
    else if((playerFinalSelection == "scissors") && (computerFinalSelection == "rock")){
        computerWinCount++;
        alert(computerWinner +" " +   computerWinCount);
    }
    else if((playerFinalSelection == "paper") && (computerFinalSelection == "scissors")){
        computerWinCount++;
        alert(computerWinner +" " +   computerWinCount);
    }
    else if((playerFinalSelection == "rock") && (computerFinalSelection == "paper")){
        computerWinCount++;
        alert(computerWinner +" " +   computerWinCount);
    }
    return "Computer win " + computerWinCount + " " + "You win " + playerWinCount + " " + "Draws " + draws;
   
   


    
        
}
let Round = 0
   function gameRounds(playerFinalSelection,computerFinalSelection){
       Round++;
       alert (`Round ${Round}`);
    for(let i = 0; i <= 5; i++){
       alert(compareSelections(playerChioce(), computerPlay()));

    }
        let userAnswer = prompt(`Do you want to play again (yes / no)? `);
        userAnswer = userAnswer.toLowerCase();
        if(userAnswer == "yes"){
            alert(gameRounds());
        }
       if(computerWinCount >playerWinCount){
           alert(`You lost, Computer win!`);
       }
       else if (computerWinCount  < playerWinCount){
        alert(`You win !`)
       }
       else{
        alert(`Draw no win`);
       }
    return `Round  ${Round} completed`
}
alert(gameRounds());

