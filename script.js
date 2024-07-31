/*
-> eventBubbling: jispe click karoge us particular element pe event raise hoga, or listner na milne pr 
   listner dhundhega, waha vi naa milne pr event parent ke parent ke parent pr listner dhundhega
* game have hit, timer, Score.
* if, hit = bubble then Score +=10 
*/

var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble(){
    var cluster = '';
    for(var i=1; i<=112; i++){
        var a = Math.floor(Math.random()*10);
        cluster += `<div class="bubble"> ${a} </div>`;
    }
    document.querySelector('#pbtm').innerHTML = cluster;
};

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent =hitrn;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer >0){
            timer --;
            document.querySelector('#timerval').textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector('#pbtm').innerHTML = '<h1>Game Over</h1>'; 
        }
    },1000)
}; 

function increaseScore(){
    // match hit with bubble
    score += 10;
    document.querySelector('#scoreval').textContent = score;
};

// event bubbling
document.querySelector("#pbtm").addEventListener('click',function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble()
        getNewHit();
    }
});


runTimer();
makeBubble();
getNewHit();