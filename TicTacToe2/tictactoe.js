let currentPlayer = "X";
let gameStatus = "";
let numTurns = 0;
let idNames = ["one","two","three","four","five","six","seven","eight","nine"];

function newGame(){
    for(var i = 0; i <idNames.length; i++){
    document.getElementById(idNames[i]).innerHTML = "";
    }
    numTurns = 0;
    gameStatus = "";
    currentPlayer = "X";
    changeVisibility("control");
}
function playerTakeTurn(a){
    if(a.innerHTML == ""){
        a.innerHTML = currentPlayer;
        checkGameStatus();
        if(gameStatus == ""){
            setTimeout(function(){
                computerTakeTurn();
                checkGameStatus();
                }, 400
            );
        }
    }
    else{
        showLightBox("This box is already selected! ", "Please choose another one!");
        return;
    } 
    setTimeout(function() {
            if(gameStatus != ""){
                showLightBox(gameStatus, "Game over. ");
            }
        },500); 
}
function checkGameStatus(){
    numTurns += 1;
    if(checkWin()){
        gameStatus = currentPlayer + " wins!";
        return;
    }
    
    if(numTurns == 9){
        gameStatus = "Tie Game!";
        return;
    }
    currentPlayer = (currentPlayer == "X" ? "O" : "X" );
   
}
function checkWin(){
    let array = [];
    array[0]= "";
    array[1] = document.getElementById("one").innerHTML;
    array[2] = document.getElementById("two").innerHTML;
    array[3] = document.getElementById("three").innerHTML;
    array[4] = document.getElementById("four").innerHTML;
    array[5] = document.getElementById("five").innerHTML;
    array[6] = document.getElementById("six").innerHTML;
    array[7] = document.getElementById("seven").innerHTML;
    array[8] = document.getElementById("eight").innerHTML;
    array[9] = document.getElementById("nine").innerHTML;
    if(array[1] != "" && array[1] == array[2] && array[2] == array[3]){
        return true;
    }
    if(array[4] != "" && array[4] == array[5] && array[5] == array[6]){
        return true;
    }
    if(array[7] != "" && array[7] == array[8] && array[8] == array[9]){
        return true;
    }
    if(array[1] != "" && array[1] == array[5] && array[5] == array[9]){
        return true;
    }
    if(array[3] != "" && array[3] == array[5] && array[5] == array[7]){
        return true;
    }
    if(array[2] != "" && array[2] == array[5] && array[5] == array[8]){
        return true;
    }
    if(array[3] != "" && array[3] == array[6] && array[6] == array[9]){
        return true;
    }
    if(array[1] != "" && array[4] == array[1] && array[4] == array[7]){
        return true;
    }
}
function changeVisibility(divID){
    var element = document.getElementById(divID);
    if(element){
        element.className = (element.className == 'hidden')? 'unhidden' : 'hidden';
    }
}
function showLightBox(message, message2){
    document.getElementById("message").innerHTML = message;
    document.getElementById("message2").innerHTML = message2;
    changeVisibility("lightbox");
    changeVisibility("boundaryMessage");

}
function continueGame(){
    changeVisibility("lightbox");
    changeVisibility("boundaryMessage");
    if(gameStatus != ""){
        changeVisibility("control");
    }
}
function computerTakeTurn(){
    let idName = "";

if((document.getElementById("one").innerHTML == document.getElementById("three").innerHTML) && document.getElementById("two").innerHTML =="" && document.getElementById("three").innerHTML == "O"){
            document.getElementById("two").innerHTML = currentPlayer; 
}
else if((document.getElementById("one").innerHTML == document.getElementById("two").innerHTML) && document.getElementById("three").innerHTML =="" && document.getElementById("two").innerHTML == "O"){
        document.getElementById("three").innerHTML = currentPlayer; 
}
else if((document.getElementById("two").innerHTML == document.getElementById("three").innerHTML) && document.getElementById("one").innerHTML =="" && document.getElementById("three").innerHTML == "O"){
    document.getElementById("one").innerHTML = currentPlayer; 
}

else if((document.getElementById("one").innerHTML == document.getElementById("seven").innerHTML) && document.getElementById("four").innerHTML =="" && document.getElementById("seven").innerHTML == "O"){
        document.getElementById("four").innerHTML = currentPlayer; 
 }
 else if((document.getElementById("one").innerHTML == document.getElementById("four").innerHTML) && document.getElementById("seven").innerHTML =="" && document.getElementById("four").innerHTML == "O"){
    document.getElementById("seven").innerHTML = currentPlayer; 
}
else if((document.getElementById("four").innerHTML == document.getElementById("seven").innerHTML) && document.getElementById("one").innerHTML =="" && document.getElementById("seven").innerHTML == "O"){
    document.getElementById("one").innerHTML = currentPlayer; 
}

else if((document.getElementById("one").innerHTML == document.getElementById("nine").innerHTML) && document.getElementById("five").innerHTML =="" && document.getElementById("nine").innerHTML == "O"){
    document.getElementById("five").innerHTML = currentPlayer; 
}
else if((document.getElementById("five").innerHTML == document.getElementById("nine").innerHTML) && document.getElementById("one").innerHTML =="" && document.getElementById("nine").innerHTML == "O"){
    document.getElementById("one").innerHTML = currentPlayer; 
}
else if((document.getElementById("one").innerHTML == document.getElementById("five").innerHTML) && document.getElementById("nine").innerHTML =="" && document.getElementById("five").innerHTML == "O"){
    document.getElementById("nine").innerHTML = currentPlayer; 
}

else if((document.getElementById("two").innerHTML == document.getElementById("eight").innerHTML) && document.getElementById("five").innerHTML =="" && document.getElementById("eight").innerHTML == "O"){
    document.getElementById("five").innerHTML = currentPlayer; 
}
else if((document.getElementById("two").innerHTML == document.getElementById("five").innerHTML) && document.getElementById("eight").innerHTML =="" && document.getElementById("five").innerHTML == "O"){
    document.getElementById("eight").innerHTML = currentPlayer; 
}
else if((document.getElementById("five").innerHTML == document.getElementById("eight").innerHTML) && document.getElementById("two").innerHTML =="" && document.getElementById("eight").innerHTML == "O"){
    document.getElementById("two").innerHTML = currentPlayer; 
}

else if((document.getElementById("three").innerHTML == document.getElementById("nine").innerHTML) && document.getElementById("six").innerHTML =="" && document.getElementById("nine").innerHTML == "O"){
    document.getElementById("six").innerHTML = currentPlayer; 
}
else if((document.getElementById("three").innerHTML == document.getElementById("six").innerHTML) && document.getElementById("nine").innerHTML =="" && document.getElementById("six").innerHTML == "O"){
    document.getElementById("nine").innerHTML = currentPlayer; 
}
else if((document.getElementById("six").innerHTML == document.getElementById("nine").innerHTML) && document.getElementById("three").innerHTML =="" && document.getElementById("nine").innerHTML == "O"){
    document.getElementById("three").innerHTML = currentPlayer; 
}

else if((document.getElementById("three").innerHTML == document.getElementById("seven").innerHTML) && document.getElementById("five").innerHTML =="" && document.getElementById("seven").innerHTML == "O"){
    document.getElementById("five").innerHTML = currentPlayer; 
}
else if((document.getElementById("three").innerHTML == document.getElementById("five").innerHTML) && document.getElementById("seven").innerHTML =="" && document.getElementById("five").innerHTML == "O"){
    document.getElementById("seven").innerHTML = currentPlayer; 
}
else if((document.getElementById("five").innerHTML == document.getElementById("seven").innerHTML) && document.getElementById("three").innerHTML =="" && document.getElementById("seven").innerHTML == "O"){
    document.getElementById("three").innerHTML = currentPlayer; 
}

else if((document.getElementById("four").innerHTML == document.getElementById("six").innerHTML) && document.getElementById("five").innerHTML =="" && document.getElementById("six").innerHTML == "O"){
    document.getElementById("five").innerHTML = currentPlayer; 
}
else if((document.getElementById("five").innerHTML == document.getElementById("six").innerHTML) && document.getElementById("four").innerHTML =="" && document.getElementById("six").innerHTML == "O"){
    document.getElementById("four").innerHTML = currentPlayer; 
}
else if((document.getElementById("four").innerHTML == document.getElementById("five").innerHTML) && document.getElementById("six").innerHTML =="" && document.getElementById("five").innerHTML == "O"){
    document.getElementById("six").innerHTML = currentPlayer; 
}

else if((document.getElementById("seven").innerHTML == document.getElementById("eight").innerHTML) && document.getElementById("nine").innerHTML =="" && document.getElementById("eight").innerHTML == "O"){
    document.getElementById("nine").innerHTML = currentPlayer; 
}
else if((document.getElementById("seven").innerHTML == document.getElementById("nine").innerHTML) && document.getElementById("eight").innerHTML =="" && document.getElementById("nine").innerHTML == "O"){
    document.getElementById("eight").innerHTML = currentPlayer; 
}
else if((document.getElementById("eight").innerHTML == document.getElementById("nine").innerHTML) && document.getElementById("seven").innerHTML =="" && document.getElementById("nine").innerHTML == "O"){
    document.getElementById("seven").innerHTML = currentPlayer; 
}



else if((document.getElementById("one").innerHTML == document.getElementById("three").innerHTML) && document.getElementById("two").innerHTML =="" && document.getElementById("three").innerHTML == "X"){
    document.getElementById("two").innerHTML = currentPlayer; 
}
else if((document.getElementById("one").innerHTML == document.getElementById("two").innerHTML) && document.getElementById("three").innerHTML =="" && document.getElementById("two").innerHTML == "X"){
document.getElementById("three").innerHTML = currentPlayer; 
}
else if((document.getElementById("two").innerHTML == document.getElementById("three").innerHTML) && document.getElementById("one").innerHTML =="" && document.getElementById("three").innerHTML == "X"){
document.getElementById("one").innerHTML = currentPlayer; 
}

else if((document.getElementById("one").innerHTML == document.getElementById("seven").innerHTML) && document.getElementById("four").innerHTML =="" && document.getElementById("seven").innerHTML == "X"){
document.getElementById("four").innerHTML = currentPlayer; 
}
else if((document.getElementById("one").innerHTML == document.getElementById("four").innerHTML) && document.getElementById("seven").innerHTML =="" && document.getElementById("four").innerHTML == "X"){
document.getElementById("seven").innerHTML = currentPlayer; 
}
else if((document.getElementById("four").innerHTML == document.getElementById("seven").innerHTML) && document.getElementById("one").innerHTML =="" && document.getElementById("seven").innerHTML == "X"){
document.getElementById("one").innerHTML = currentPlayer; 
}

else if((document.getElementById("one").innerHTML == document.getElementById("nine").innerHTML) && document.getElementById("five").innerHTML =="" && document.getElementById("nine").innerHTML == "X"){
document.getElementById("five").innerHTML = currentPlayer; 
}
else if((document.getElementById("five").innerHTML == document.getElementById("nine").innerHTML) && document.getElementById("one").innerHTML =="" && document.getElementById("nine").innerHTML == "X"){
document.getElementById("one").innerHTML = currentPlayer; 
}
else if((document.getElementById("one").innerHTML == document.getElementById("five").innerHTML) && document.getElementById("nine").innerHTML =="" && document.getElementById("five").innerHTML == "X"){
document.getElementById("nine").innerHTML = currentPlayer; 
}

else if((document.getElementById("two").innerHTML == document.getElementById("eight").innerHTML) && document.getElementById("five").innerHTML =="" && document.getElementById("eight").innerHTML == "X"){
document.getElementById("five").innerHTML = currentPlayer; 
}
else if((document.getElementById("two").innerHTML == document.getElementById("five").innerHTML) && document.getElementById("eight").innerHTML =="" && document.getElementById("five").innerHTML == "X"){
document.getElementById("eight").innerHTML = currentPlayer; 
}
else if((document.getElementById("five").innerHTML == document.getElementById("eight").innerHTML) && document.getElementById("two").innerHTML =="" && document.getElementById("eight").innerHTML == "X"){
document.getElementById("two").innerHTML = currentPlayer; 
}

else if((document.getElementById("three").innerHTML == document.getElementById("nine").innerHTML) && document.getElementById("six").innerHTML =="" && document.getElementById("nine").innerHTML == "X"){
document.getElementById("six").innerHTML = currentPlayer; 
}
else if((document.getElementById("three").innerHTML == document.getElementById("six").innerHTML) && document.getElementById("nine").innerHTML =="" && document.getElementById("six").innerHTML == "X"){
document.getElementById("nine").innerHTML = currentPlayer; 
}
else if((document.getElementById("six").innerHTML == document.getElementById("nine").innerHTML) && document.getElementById("three").innerHTML =="" && document.getElementById("nine").innerHTML == "X"){
document.getElementById("three").innerHTML = currentPlayer; 
}

else if((document.getElementById("three").innerHTML == document.getElementById("seven").innerHTML) && document.getElementById("five").innerHTML =="" && document.getElementById("seven").innerHTML == "X"){
document.getElementById("five").innerHTML = currentPlayer; 
}
else if((document.getElementById("three").innerHTML == document.getElementById("five").innerHTML) && document.getElementById("seven").innerHTML =="" && document.getElementById("five").innerHTML == "X"){
document.getElementById("seven").innerHTML = currentPlayer; 
}
else if((document.getElementById("five").innerHTML == document.getElementById("seven").innerHTML) && document.getElementById("three").innerHTML =="" && document.getElementById("seven").innerHTML == "X"){
document.getElementById("three").innerHTML = currentPlayer; 
}

else if((document.getElementById("four").innerHTML == document.getElementById("six").innerHTML) && document.getElementById("five").innerHTML =="" && document.getElementById("six").innerHTML == "X"){
document.getElementById("five").innerHTML = currentPlayer; 
}
else if((document.getElementById("five").innerHTML == document.getElementById("six").innerHTML) && document.getElementById("four").innerHTML =="" && document.getElementById("six").innerHTML == "X"){
document.getElementById("four").innerHTML = currentPlayer; 
}
else if((document.getElementById("four").innerHTML == document.getElementById("five").innerHTML) && document.getElementById("six").innerHTML =="" && document.getElementById("five").innerHTML == "X"){
document.getElementById("six").innerHTML = currentPlayer; 
}

else if((document.getElementById("seven").innerHTML == document.getElementById("eight").innerHTML) && document.getElementById("nine").innerHTML =="" && document.getElementById("eight").innerHTML == "X"){
document.getElementById("nine").innerHTML = currentPlayer; 
}
else if((document.getElementById("seven").innerHTML == document.getElementById("nine").innerHTML) && document.getElementById("eight").innerHTML =="" && document.getElementById("nine").innerHTML == "X"){
document.getElementById("eight").innerHTML = currentPlayer; 
}
else if((document.getElementById("eight").innerHTML == document.getElementById("nine").innerHTML) && document.getElementById("seven").innerHTML =="" && document.getElementById("nine").innerHTML == "X"){
document.getElementById("seven").innerHTML = currentPlayer; 
}
        
             else{
                 do{                 
                let rand = 1 + parseInt(Math.random()*9);
                idName = idNames[rand-1];
                if(document.getElementById(idName).innerHTML == ""){
                    document.getElementById(idName).innerHTML = currentPlayer;
                    break;
                }
                }while(true);
             }
            }