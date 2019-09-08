// Global variables
var greeceLocations = ["athens", "santorini", "mykonos", "crete", "zakynthos", "delphi", "delos"];
var lettersGuessed = " ";
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
   var word = greeceLocations[Math.floor(Math.random() * greeceLocations.length)];
   directionsText.textContent = " ";

   for (var i= 0; i < word.length; i++) {
        currentWord[i] = "_";
        console.log(word);
    }

    var remainingLetters = word.length;

    for (var j = 0; j < word.length; j++) {
        if (word[j] === userGuess) {
            currentWord[j] = userGuess;
            remainingLetters--;
        }
    }

}

    lettersGuessed.push(userGuess); 
    
    console.log(lettersGuessed);
    
    if (userGuess === currentWord) {
        wins++;
    } else {
        numOfGuesses--;
    }

    if (numOfGuesses <= 0) {
        alert("YOU LOSE!");
    } 



    
    

directionsText.textContent = " ";
currentWordText.textContent = "Current word: " + currentWord;
numOfGuessesText.textContent = "Guesses Remaining: " + numOfGuesses;
lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
winsText.textContent = "wins: " + wins;





