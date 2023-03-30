'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

const backGround = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const widthTable = function (diametr) {
  document.querySelector('.question').style.width = diametr;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(typeof guessingNumber);
  //No input
  if (!guessingNumber) {
    displayGuessMessage('Введите число в поле ввода!');
    //Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Правильно, Вы угадали!');
    document.querySelector('.question').textContent = secretNumber;
    widthTable('40rem');
    backGround('green');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.label-score').textContent = 'Вы проиграли';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  backGround('black');
  document.querySelector('.question').textContent = '???';
  widthTable('25rem');
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
});
