var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var positionOfPaddle1 = document.getElementById("paddle1").offsetTop;
var positionOfPaddle2 = document.getElementById("paddle2").offsetTop;

const startPositionOfPaddle1 = document.getElementById("paddle1").offsetTop;
const startPositionOfPaddle2 = document.getElementById("paddle2").offsetTop;
const paddleWidth = document.getElementById("paddle1").offsetWidth;
const paddleHeight = document.getElementById("paddle1").offsetHeight;
const gameboardHeight = document.getElementById("gameBoard").offsetHeight;
const gameboardWidth = document.getElementById("gameBoard").offsetWidth;
const ballHeight = document.getElementById("ball").offsetHeight;
const startTopPositionOfBall = document.getElementById("ball").offsetTop;
const startLeftPositionOfBall = document.getElementById("ball").offsetLeft;

var topPositionOfBall = startTopPositionOfBall;
var leftPositionOfBall = startLeftPositionOfBall;
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var count1 = 0;
var count2 = 0;
var mode = 500;
var bounce = new sound('bounce.mp3');
var alarm = new sound('alarm.mp3');
var controlPlay;
var gameStatus = "active";

document.addEventListener('keydown', function(e){
    if(e.keyCode == 87 || e.which == 87){
        speedOfPaddle1 = -5;
    }
    if(e.keyCode == 83 || e.which == 83){
        speedOfPaddle1 = 5;
    }
    if(e.keyCode == 38 || e.which == 38){
        speedOfPaddle2 = -5;
    }
    if(e.keyCode == 40 || e.which == 40){
        speedOfPaddle2 = 5;
    }
});

document.addEventListener('keyup', function(e){
    if(e.keyCode == 87 || e.which == 87){
        speedOfPaddle1 = 0;
    }
    if(e.keyCode == 38 || e.which == 38){
        speedOfPaddle2 = 0;
    }
    if(e.keyCode == 83 || e.which == 83){
        speedOfPaddle1 = 0;
    }
    if(e.keyCode == 40 || e.which == 40){
        speedOfPaddle2 = 0;
    }
});

//https://www.w3schools.com/graphics/game_sound.asp
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
} 

function startBall(){
    let direction = 1;
    topPositionOfBall = startTopPositionOfBall;
    leftPositionOfBall = startLeftPositionOfBall;
    if(Math.random() < 0.5){
        direction = 1;
    }else{
        direction = -1;
    }
    topSpeedOfBall = (Math.random() * 2 + 3);
    leftSpeedOfBall = direction * (Math.random() * 2 + 3 );
}

function show (){  
    gameStatus = "active";
    positionOfPaddle1 += speedOfPaddle1;
    positionOfPaddle2 += speedOfPaddle2;
    topPositionOfBall += topSpeedOfBall;
    leftPositionOfBall += leftSpeedOfBall;
    if(positionOfPaddle1 <= 0){
        positionOfPaddle1 = 0;
    }
    if(positionOfPaddle2 <= 0){
        positionOfPaddle2 = 0;
    }
    if(positionOfPaddle1 >= gameboardHeight - paddleHeight - 7 ){
        positionOfPaddle1 = gameboardHeight - paddleHeight - 7;
    }
    if(positionOfPaddle2 >= gameboardHeight - paddleHeight - 7){
        positionOfPaddle2 = gameboardHeight - paddleHeight- 7;
    }
    if(topPositionOfBall <= 0 || topPositionOfBall >= gameboardHeight - ballHeight){
        topSpeedOfBall *= -1;
    }    
    if(leftPositionOfBall <= paddleWidth){
        if(topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight){
            leftSpeedOfBall *= -1;
            bounce.play();
            count1 ++;    
        }else{
            alarm.play();
            startBall();     
        }
    }
    if(leftPositionOfBall >= gameboardWidth - paddleWidth - ballHeight ){
        if(topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight){
             leftSpeedOfBall *= -1;
             bounce.play();
             count2 ++;        
        }else{ 
            alarm.play();   
            startBall(); 
            
        }
    }
    document.getElementById("paddle1").style.top = positionOfPaddle1 + "px";
    document.getElementById("paddle2").style.top = positionOfPaddle2 + "px";
    document.getElementById("ball").style.top = topPositionOfBall + "px";
    document.getElementById("ball").style.left = leftPositionOfBall + "px";
    document.getElementById('score2').innerHTML = count2.toString();
    document.getElementById('score1').innerHTML = count1.toString();
    if(count1 == 10){
        window.clearInterval(controlPlay);
        controlPlay = false;
        message1 = "Player 1 wins with 10 points.";
        message2 = "Player 2 has " + count2 + " point(s)."
        showLightBox(message1,message2);
        
    }
    else if(count2 == 10){
        window.clearInterval(controlPlay);
        controlPlay = false;
        message1 = "Player 2 wins with 10 points.";
        message2 = "Player 1 has " + count1 + " point(s)."
        showLightBox(message1,message2);
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
    count1 = 0;
    count2 = 0;
    document.getElementById('score2').innerHTML = count2.toString();
    document.getElementById('score1').innerHTML = count1.toString();
    document.getElementById("paddle1").style.top = 35 + "vh";
    document.getElementById("paddle2").style.top = 35 + "vh";
    document.getElementById("ball").style.top = 50 + "vh";
    document.getElementById("ball").style.left = 50 + "vw";  
    changeVisibility("lightbox");
    changeVisibility("boundaryMessage");
    gameStatus = "over";
}

function showMenuBox(message3, message4){
    document.getElementById("message3").innerHTML = message3;
    document.getElementById("message4").innerHTML = message4;
    changeVisibility("menubox");
    changeVisibility("boundaryMessage1");
}

function closeMenu(){
    changeVisibility("menubox");
    changeVisibility("boundaryMessage1");
}

function setting(){
    pauseGame();
    let message3 = "Please select the mode.";
    let message4 = "You are now in medium mode.";
    if(mode == 800){
        message4 = "You are now in slow mode.";
    }
    if(mode == 200){
        message4 = "You are now in fast mode.";
    }
    showMenuBox(message3,message4);
}

function resumeGame(){
    if(!controlPlay && gameStatus != "over"){
        controlPlay = window.setInterval(show, mode/60);
    }
}

function pauseGame(){
    window.clearInterval(controlPlay);
    controlPlay = false;
}

function startGame(){
    count1 = 0;
    count2 = 0;
    document.getElementById('score2').innerHTML = count2.toString();
    document.getElementById('score1').innerHTML = count1.toString();
    window.clearInterval(controlPlay);
    controlPlay = false;    
    document.getElementById("paddle1").style.top = 35 + "vh";
    document.getElementById("paddle2").style.top = 35 + "vh";
    document.getElementById("ball").style.top = 50 + "vh";
    document.getElementById("ball").style.left = 50 + "vw";
    setTimer();
    startBall();
    topPositionOfBall = startTopPositionOfBall;
    leftPositionOfBall = startLeftPositionOfBall;
    positionOfPaddle1 = startPositionOfPaddle1;
    positionOfPaddle2 = startPositionOfPaddle2;
    setTimeout(function(){
        if(!controlPlay){
            controlPlay = window.setInterval(show, mode/60);
        }
    },3200); 
}

function startNewGame(){
    changeVisibility("lightbox");
    changeVisibility("boundaryMessage");
    count1 = 0;
    count2 = 0;
    document.getElementById('score2').innerHTML = count2.toString();
    document.getElementById('score1').innerHTML = count1.toString();
    document.getElementById("paddle1").style.top = 35 + "vh";
    document.getElementById("paddle2").style.top = 35 + "vh";
    document.getElementById("ball").style.top = 50 + "vh";
    document.getElementById("ball").style.left = 50 + "vw";  
    setTimer();
    positionOfPaddle1 = startPositionOfPaddle1;
    positionOfPaddle2 = startPositionOfPaddle2;
    topPositionOfBall = startTopPositionOfBall;
    leftPositionOfBall = startLeftPositionOfBall;
    setTimeout(function(){
         if(!controlPlay){
            controlPlay = window.setInterval(show, mode/60);
        }
    },3200);  
}

function stopGame(){
    window.clearInterval(controlPlay);
    controlPlay = false;
    let message1 = "Tie Game";
    let message2 = "Both players have " + count1 + " point(s).";
    if(count2 > count1){
        message1 = "Player 2 wins with "+ count2 + " point(s).";
        message2 = "Player 1 has " + count1 + " point(s)."  
    }
    else if(count1 > count2){
        message1 = "Player 1 wins with "+ count1 + " point(s).";
        message2 = "Player 2 has " + count2 + " point(s)."
    }
    showLightBox(message1,message2);
}

function slowMode(){
    mode = 800;
    changeVisibility("menubox");
    changeVisibility("boundaryMessage1");
    startGame();
}

function mediumMode(){
    mode = 500;
    changeVisibility("menubox");
    changeVisibility("boundaryMessage1");
    startGame();
}

function fastMode(){
    mode = 200;
    changeVisibility("menubox");
    changeVisibility("boundaryMessage1");
    startGame();
}

function setTimer(){
    changeVisibility("lightbox");
    changeVisibility("timerbox");
    var count = 3;
    document.getElementById("timer").innerHTML = 3;
    var counter = setInterval(timer, 1000);
    function timer(){
        count = count - 1;
        if (count <= 0){
           clearInterval(counter);
           changeVisibility("timerbox");
           changeVisibility("lightbox");
           return;
        }
        document.getElementById("timer").innerHTML = count;
    }   
}