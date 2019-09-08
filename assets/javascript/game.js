// Global variables
var greeceLocations = ["athens", "santorini", "mykonos", "crete", "zakynthos", "delphi", "delos"];
var lettersGuessed = [];
var selectedWord = [];
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
    // the game picks a random word to start
    var word = greeceLocations[Math.floor(Math.random() * greeceLocations.length)];
    console.log(greeceLocations);

    for (var i= 0; i < word.length; i++) {
        selectedWord[i] = "_";
        console.log(word);
    }
}

    
    

directionsText.textContent = " ";
currentWordText.textContent = "Current word: " + currentWord;
numOfGuessesText.textContent = "Guesses Remaining: " + numOfGuesses;
lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
winsText.textContent = "wins: " + wins;





