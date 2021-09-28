'use strict';

const againBtn = document.querySelector('.again');
let unkNumber = document.querySelector('.number');
let myInput = document.querySelector('.guess');
const check = document.querySelector('.check');
let message = document.querySelector('.message');
let currentScore = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let newScore = Number(currentScore.textContent);
let newHighScore = Number(highScore.textContent);
console.log( `High Score is ${newHighScore}`);


// Generating a random number
let ranNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
console.log(ranNum);

// getting input


check.addEventListener('click', function checked() {
    let newNum = Number(myInput.value);
    
    if (newNum === ranNum) {
        message.textContent = "Correct!"
        document.querySelector('body').style.backgroundColor = "#60b347";
        unkNumber.textContent = ranNum;
        if (newScore > newHighScore) {
            highScore.textContent = newScore;
        };
    } else if ( newNum > 20 || newNum < 1) {
        alert ('Please enter a number between 1 and 20')
    } else if (newNum < ranNum) {
        message.textContent = 'Number is higher than that!'
        newScore--;
        console.log(newScore)
        currentScore.textContent = newScore
        if (newScore === 0 || newScore < 0){
            currentScore.textContent = "0";
            message.textContent = "Game Over Start again!";
            document.querySelector('body').style.backgroundColor = "red";
        };
        
    } else if (newNum > ranNum ) {
        message.textContent = 'Number is lower than that!'
        newScore--;
        console.log(newScore)
        currentScore.textContent = newScore
        if (newScore === 0 || newScore < 0){
            currentScore.textContent = "0";
            message.textContent = "Game Over Start again!";
            document.querySelector('body').style.backgroundColor = "red";
        };
    }  else {
        alert('Please enter a number!');
    }

});

againBtn.addEventListener('click', function again() {
    currentScore.textContent = 20;
    newScore = Number(currentScore.textContent);
    ranNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    console.log(ranNum);
    myInput.value = "";
    message.textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = "#222";
    unkNumber.textContent = "?";

})
