'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=50;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/
const number=Math.trunc(Math.random()*20)+1;
let score=20;
document.querySelector('.number').textContent=number;
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
    /*let high=document.querySelector('.label-highscore').value;
    if(score>high)
    {
        document.querySelector('.label-highscore').textContent=high;
    }*/
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