const levels = [
    //level 0 
    ["flag", "rock","","","",
 "fence","rock","","","rider",
 "","tree", "animate","animate","animate",
 "","water","","","",
 "","fencetop","","horseup",""]
   
];

const gridBoxes = document.querySelectorAll("#gameBoard div");
var currentLevel = 0;
var riderOn = false;
var currentLocationOfHorse = 0;
var currentAnimation;

window.addEventListener("load",function(){
    loadLevel();
});

function loadLevel(){
    let levelMap = levels[currentLevel];
    let animateBoxes;
    riderOn = false;
    //load the board
    for(i = 0; i < gridBoxes.length;i++){
        gridBoxes[i].className = levelMap[i];
        if(levelMap[i].includes("horse") )currentLocationOfHorse = i;
    }
    animateBoxes = document.querySelectorAll(".animate");
    animateEnemy(animateBoxes, 0, "right");
}

function animateEnemy(boxes, index, direction){
    if(boxes.length <= 0){return;}
    //update new images
    if(direction == "right"){
        boxes[index].classList.add("enemyright");
    }
    else if(direction == "left"){
        boxes[index].classList.add("enemyleft");
    }
    //remove previous images
    for(i = 0; i < boxes.length; i++){
        if(i != index){
            boxes[i].classList.remove("enemyleft");
            boxes[i].classList.remove("enemyright");
        }
    }
    if(direction == "right"){
        if(index == boxes.length - 1){
            index--;
            direction = "left";
        }else{
            index++;
        }
    }
    else if(direction == "left"){
        if(index == 0){
            index++;
            direction = "right";
        }else{
            index--;
        }
    }
    currentAnimation = setTimeout(function(){
        animateEnemy(boxes,index, direction);
    },750);
}