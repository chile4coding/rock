let com = function  computer(){
    let f = (Math.random() * 3) ;
       f.toFixed(2) 
    let c= Math.ceil(f)
        
            if (c ==1) {
                return "scissor";
        }
        else if (c ==2){
            return "paper";
        }
        else if( c == 3){
            
            return "rock";
        }
    
    };
    
    
    let comWinCounter =0;
        let playeWinCount = 0;
    let drawCounter = 0;
       
      
    function gamePlay(player1, com ){
        
         let player = prompt("choose 'rock', 'scissor' or 'paper'");
         player1 =player.toLowerCase();
    
    
      
         
            if((com == "scissor") && (player1 == "paper")){
                comWinCounter++;
                return com + " ,computer win " + comWinCounter ;
               
            }
              else if((com == "scissor") && (player1 == "rock")){
                  playeWinCount++;
                return player1 + " ,you win " + playeWinCount ;
    
            }
              else if((com == "paper") && (player1 == "rock")){
                   comWinCounter++;
                return com + " ,computer win " + comWinCounter;
                 
    
            }
              else if((com == "paper") && (player1 == "scissor")){
                   playeWinCount++;
                return player1 + " ,you win "+ playeWinCount;
    
            }
              else if((com == "rock") && (player1 == "paper")){
                   playeWinCount++;
                return player1 + " ,you win " + playeWinCount;
    
            }
          else if((com == "rock") && (player1 == "paper")){
               comWinCounter++;
                return com + " ,computer win "+ comWinCounter ;
            
    
            }
        else if(com == player1){
            return    "draw, no win " + ++drawCounter;
    
        }
        return alert(comWinCounter +"  " + playeWinCount +"  " + drawCounter);
              
    
       
        
    
    }
      
     
    
    
    function lop(){
       
        for (let i = 1; i <=10; i++){
             alert(gamePlay(player1, com()));
           
           
           
        }
       
         
    
    }
    
    lop()


if (comWinCounter > playeWinCount){
    alert("You lost, Computer win " +comWinCounter );
}
    else if (comWinCounter < playeWinCount){
    alert(" You win " + playeWinCount)
    }
else {
    alert(" Draws " + drawCounter);
}
