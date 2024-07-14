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


// Start the game when the page loads
window.onload = startGame;
