'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let number = document.querySelector('.number');
let guessNumber = document.querySelector('.guess');

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(guessNumber.value);

  //When Input Is Empty
  if (!guess) {
    displayMessage('⛔ Please insert a number between 1 and 20!');
  } else if (guess === secretNumber) {
    //When Player Guess Correct Number
    displayMessage('🎉 Correct Number!');
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Your try is too High!' : '📉 Your try is too LOW!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🧨 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#f00';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start try guessing the correct number!');
  document.querySelector('.score').textContent = score;
  number.textContent = '?';
  guessNumber.value = '';
  document.querySelector('body').style.backgroundColor = '#3a3030';
});
