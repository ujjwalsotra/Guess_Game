'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=50;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/
let number=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;
document.querySelector('.check').addEventListener('click',function(){
    if(score==1)
    {
        document.querySelector('.message').textContent='You Lost Try again!'
        score--;
        document.querySelector('.score').textContent=score;
        return;
    }
   const guess=Number(document.querySelector('.guess').value);
    
   if(!guess)
   {
       document.querySelector('.message').textContent='🙅🙅 NO NUMBER ENTERED!';
   }
   if(guess==number)
   {
    document.querySelector('.message').textContent='❤️🔥🔥You win...';
    document.querySelector('body').style.backgroundColor='#7849fe';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent=number;
    if(score>highScore)
    {
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }
   }
   else
   {
    if(guess>number)
    {
        document.querySelector('.message').textContent='Guess too high'; 
    }
    else
    {
        document.querySelector('.message').textContent='Guess too low';
    }
    score--;
    document.querySelector('.score').textContent=score;
   }
})

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent=20;
    number=Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
})