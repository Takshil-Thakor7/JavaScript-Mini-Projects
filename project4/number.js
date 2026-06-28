//how to genrate random number
let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessingSlot = document.querySelector('.guesses');
const remains = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter valid num');
    }else if (guess < 1) {
        alert('Please enter number more than 1');
    }else if (guess > 100) {
        alert('Please enter number less than 100');
    }else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            guessMethod(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`);
            endGame();
        } else {
            guessMethod(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage('You guessed it right');
        endGame();
    } else if (guess < randomNum) {
        displayMessage('Number is too low');
    } else if (guess > randomNum) {
        displayMessage('Number is too high');
    }
}

function guessMethod(guess) {
    userInput.value = '';
    guessingSlot.innerHTML += `${guess}, `;
    numGuess++;
    remains.innerHTML = `${11- numGuess} `;
}

function displayMessage(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame>Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
    randomNum = parseInt(Math.random() * 100 + 1);        
    prevGuess = [];
    numGuess = 1;
    guessingSlot.innerHTML = '';
    remains.innerHTML = `${11- numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    });
}


