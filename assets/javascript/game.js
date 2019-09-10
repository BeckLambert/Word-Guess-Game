// Global variables
var greeceLocations = ["athens",
    "santorini",
    "mykonos",
    "crete",
    "zakynthos",
    "delphi",
    "delos"];

var word = " ";
var started = false;
var reveal = [];

var lettersGuessed = [];
var currentWord = [];
var numOfGuesses = 10;
var wins = 0;


// variables for quick reference to html
var directionsText = document.getElementById("directions");
var currentWordText = document.getElementById("current-word");
var numOfGuessesText = document.getElementById("remaining");
var winsText = document.getElementById("wins");
var lettersGuessedText = document.getElementById("letters-guessed");

// player presses a key to get started
document.onkeyup = function (event) {
    var userGuess = event.key;
    //random word is chosen
    if (!started) {
        word = greeceLocations[Math.floor(Math.random() * greeceLocations.length)];
        // push the letter guessed in to the current word 
        console.log(word);
        for (var i = 0; i < word.length; i++) {
            currentWord.push("_");
            reveal.push(false);
        }

        //update current word to page .join("")
        //display correct letter
        started = true;
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === userGuess) {
                reveal[j] = true;
                console.log(reveal);
                console.log(userGuess);
                console.log(word);
            }
        }
    }

    var done = true;
    //display incorrect letter 
    if (word.includes(userGuess)) {
        // userGuess IS in word
        for (var i = 0; i < word.length; i++) {
            if (reveal[i]) {
                currentWord[i] = word[i];
            } else {
                currentWord[i] = "_";
            }
        }
        if (word === currentWord.join("")) {
            wins++;
            alert("you won");
            // end/reset game here
            //print num of guess
            //
        }
    } else {
        // userGuess is NOT in word
        numOfGuesses--;
        if (lettersGuessed.indexOf(userGuess) === -1) {
            lettersGuessed.push(userGuess);
            // update array on page
            lettersGuessed.text(userGuess);
        }
    } 
            if (numOfGuesses === 0) {
            alert("game over");
            }
}

    //create reset at end of game
    










directionsText.textContent = " ";
currentWordText.textContent = "Current word: " + currentWord;
numOfGuessesText.textContent = "Guesses Remaining: " + numOfGuesses;
lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
winsText.textContent = "wins: " + wins;





