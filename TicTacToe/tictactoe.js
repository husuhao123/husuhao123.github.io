let currentPlayer = "X";
let gameStatus = "";
let numTurns = 0;

function playerTakeTurn(a){
    if(a.innerHTML == ""){
        a.innerHTML = currentPlayer;
        checkGameStatus();
    }
    else{
            showLightBox("This box is already selected! ", "Please choose another one!");
            return;
    } 
    if(gameStatus != ""){
        showLightBox(gameStatus, "Game over. ");
        console.log("Game is over, " + gameStatus);
    }
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
    array[4] = document. getElementById("four").innerHTML;
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
}
