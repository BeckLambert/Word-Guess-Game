//  Use key events to listen for the letters that your players will type.

//         Display the following on the page:Press any key to get started!

//     If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.


//     As the user guesses the correct letters, reveal them: m a d o _  _ a.

//     Number of Guesses Remaining: (# of guesses remaining for the user).


//     Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).



//     After the user wins/loses the game should automatically choose another word and make the user play it.


// Global variables
var words = ["athens", "santorini", "mykonos", "crete", "zakynthos", "delphi", "delos"];
var guess = [];
var currentWord = [];
var numOfGuesses = 10;
var wins = 0;

// variables for quick reference to html
var directionsText = document.getElementById("directions");
var currentWordText = document.getElementById("guessed");
var numOfGuessesText = document.getElementById("remaining");
var winsText = document.getElementById("wins");
var guessText = document.getElementById("guess");

// player presses a key to get started
document.onkeyup = function (event) {
    var userGuess = event.key;
    // the game picks a random word to start
    var word = words[Math.floor(Math.random() * words.length)];
    prompt("Guess a letter");
}
function checkForLetter(letter) {
    var foundLetter = false
    for (var i = 0, j = words.length; i < j; i++) {
        if (letter === words[i]) {
            guess[i] = letter
            foundLetter = true
            // If guess matches random word
            if (guess.join("") === words) {
                // Increment # of wins
                wins++
            }
        }
    }

    if (!foundLetter) {
        // Check if incorrect guess is already on the list
        if (!guess.includes(letter)) {
            // Add incorrect letter to guessed letter list
            guess.push(letter)
            // Decrement the number of remaining guesses
            numOfGuesses--
        } //if numOfGuesses gets to zero reset game
        if (numOfGuesses === 0) {
        }
    }
}

directionsText.textContent = " ";
currentWordText.textContent = "Current word: " + currentWord;
numOfGuessesText.textContent = "Guesses Remaining: " + numOfGuesses;
guessText.textContent = "Guess: " + guess;
winsText.textContent = "wins: " + wins;






