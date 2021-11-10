var blueWins=0;
var redWins=0;
var onTime;
var timeoutId;
var shooted;
window.onload = function(){
    console.log("Window loaded");
    gameStart();
    document.addEventListener('keydown',shoot);
    document.querySelector("button").addEventListener('click', restartGame);
/*
    let buttons = document.querySelectorAll("button");
    for(let button of buttons) {
        button.addEventListener('click', restartGame);
    }*/
}
function shoot(e){
    if(!shooted){
        if (e.code === "KeyJ"){ 
            if(!onTime){
                earlyShoot(0);
            }else{
                winShoot(0);
            }
        }
        else if (e.code === "KeyF"){ 
            if(!onTime){
                earlyShoot(1);
            }else{
                winShoot(1);
            }
        }
        shooted=1;
        actualizeWins();
        setTimeout(gameStart, 2000);
    }
      
}
function gameStart(){
    onTime=0;
    shooted=0;
    document.querySelectorAll("p").forEach(function(text){
        text.innerHTML="Wait";

    });
    timeoutId=setTimeout(timeUp, (2000+Math.random()*3000));
}
function timeUp(){
    onTime=1;
    document.querySelectorAll("p").forEach(function(text){
        text.innerHTML="Now!";

    });
}
function earlyShoot(looser){
    let result=document.querySelectorAll("p");
    if(looser){
        result[1].innerHTML="You win! The player shoot too soon";
        result[0].innerHTML="No way, too soon! You lose!"; 
        blueWins+=1;
    }else{
        result[0].innerHTML="You win! The player shoot too soon";
        result[1].innerHTML="No way, too soon! You lose!"; 
        redWins+=1;
    }
    window.clearTimeout(timeoutId);
}
function winShoot(winner){
    let result=document.querySelectorAll("p");
    if(winner){
        result[1].innerHTML="You loose! :(";
        result[0].innerHTML="Yot win! :)"; 
        redWins+=1;
    }else{
        result[0].innerHTML="You loose! :(";
        result[1].innerHTML="Yot win! :)"; 
        blueWins+=1;
    }
}
function actualizeWins(){
    let result=document.querySelectorAll("h3");
    result[0].innerHTML="Player One("+redWins+")";
    result[1].innerHTML="Player Two("+blueWins+")";
}
function restartGame(){
    redWins=0;
    blueWins=0;
    actualizeWins();
    window.clearTimeout(timeoutId);
    gameStart();
}