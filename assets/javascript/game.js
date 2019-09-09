// Global variables
var greeceLocations = ["athens", 
                       "santorini", 
                       "mykonos", 
                       "crete", 
                       "zakynthos", 
                       "delphi", 
                       "delos"];

var word = "";
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
   for (var i= 0; i < word.length; i++) {
        currentWord.push("_");
        reveal.push(false);
        console.log(word);
    }
        //display correct letter
        started = true;
}   else {
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
    for (var i = 0; i < word.length; i++) {
        if (reveal[i]) {
            currentWord[i] = word[i]; 
        } else {
        currentWord[i] = "_";
        done = false;
    }

    if (lettersGuessed.indexOf(userGuess) == -1) {
        lettersGuessed.push(userGuess);
        console.log(lettersGuessed);
    }
    // if word guess is complete you win if not take a number off number of guesses
    if (done) {
        wins++;
    } else {
        numOfGuesses--;
    }
    // if you run out of guesses you lose 
    if (numOfGuesses <= 0) {
        alert("Game Over!");
    } 
}
}



    
    

directionsText.textContent = " ";
currentWordText.textContent = "Current word: " + currentWord;
numOfGuessesText.textContent = "Guesses Remaining: " + numOfGuesses;
lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
winsText.textContent = "wins: " + wins;





