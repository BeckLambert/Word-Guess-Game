//  Use key events to listen for the letters that your players will type.

//         Display the following on the page:Press any key to get started!

//     If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.


//     As the user guesses the correct letters, reveal them: m a d o _  _ a.

//     Number of Guesses Remaining: (# of guesses remaining for the user).


//     Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).



//     After the user wins/loses the game should automatically choose another word and make the user play it.


// Global variables
var wins = 0;
var losses = 0;
var numOfGuesses = 0;
var answers = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
var lettersGuessed = ["_"];
var words = ["radiohead", 
             "no doubt", 
             "blackstreet", 
             "savage garden", 
             "santana"];

// variables for quick reference to html
var directionsText = document.getElementById("directions");
var lettersGuessedText = document.getElementById("guessed");
var numOfGuessesText = document.getElementById("remaining");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");


// player presses a key to get started
document.onkeyup = function (event) {
    var keyPressed = event.key;
    // the game picks a random word to start
    var word = words[Math.floor(Math.random() * words.length)];
    //for loop to add guesses in to answers array
    for (var i = 0; i < words.length; i++) {
        answers[i] = "_";
    }
    var remainingLetters = words.length;

    while (remainingLetters > 0) {
        // Show the player their progress
        alert(answers.join(" "));
        // Take input from the player
        var lettersGuessed = prompt("Guess a letter!");
        if (lettersGuessed === null) {
            break;
        } else if (lettersGuessed.length !== 1) {
            alert("Please enter a single letter.");
        } else {
            // Update answerArray and remainingLetters for every correct guess
            for (var j = 0; j < words.length; j++) {
                if (words[j] === lettersGuessed) {
                    answers[j] = lettersGuessed;
                    remainingLetters--;
                }
            }
        }
        
    }
}
directionsText.textContent = " ";   
lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
numOfGuessesText.textContent = "Guesses Remaining: " + numOfGuesses;
winsText.textContent = "wins! " + wins;
lossesText.textContent = "loses " + losses;

