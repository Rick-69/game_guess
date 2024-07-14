

let randomNumber;
let attempts;
let maxAttempts;
let guessHistory;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    maxAttempts = 10; // Set maximum attempts
    guessHistory = [];
    document.getElementById('result').innerText = '';
    document.getElementById('attempts').innerText = `Attempts left: ${maxAttempts}`;
    document.getElementById('history').innerText = 'Guess History: ';
    document.getElementById('guess').value = '';
    document.getElementById('guess').disabled = false;
}



function checkGuess() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;

    if (userGuess < 1 || userGuess > 100) {
        displayMessage('Please enter a number between 1 and 100.');
        return;
    }

    guessHistory.push(userGuess);
    updateHistory();

    if (userGuess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
        endGame();
    } else {
        maxAttempts--;
        if (maxAttempts === 0) {
            displayMessage(`Game over! The number was ${randomNumber}.`);
            endGame();
        } else {
            provideHint(userGuess);
            document.getElementById('attempts').innerText = `Attempts left: ${maxAttempts}`;
        }
    }
}


function provideHint(userGuess) {
    if (userGuess < randomNumber) {
        displayMessage('Too low! Try again.');
    } else {
        displayMessage('Too high! Try again.');
    }
}

function displayMessage(message) {
    document.getElementById('result').innerText = message;
}

function updateHistory() {
    document.getElementById('history').innerText = `Guess History: ${guessHistory.join(', ')}`;
}

function endGame() {
    document.getElementById('guess').disabled = true;
}

// Start the game when the page loads
window.onload = startGame;
