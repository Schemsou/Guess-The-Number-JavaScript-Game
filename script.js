'use strict';

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
let secretNubmer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNubmer);

let checkValue = function () {
  let answer = Number(document.querySelector('.guess').value);
  console.log(answer);
  if (!answer) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (answer === secretNubmer) {
    displayMessage('correct number!');
    document.querySelector('.number').textContent = answer;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.body.style.backgroundColor = '#60b347';
  } else if (answer !== secretNubmer) {
    if (score > 1) {
      answer > secretNubmer
        ? displayMessage('Too high!')
        : displayMessage('Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

let playAgain = function () {
  secretNubmer = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
  document.body.style.backgroundColor = '#222';
  console.log(secretNubmer);
};
