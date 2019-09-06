//  Use key events to listen for the letters that your players will type.
document.onkeyup = function (event) {
    var keyPressed = event.key;
}



//         Display the following on the page:Press any key to get started!


//         Wins: (# of times user guessed the word correctly).
var wins = 0;
var losses = 0;
var numOfGuesses = 26;
var answers = [];
var lettersGuessed = [" ", " "," ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
var words = ["radiohead", "no doubt", "blackstreet", "savage garden", "santana"];


var lettersGuessedText = document.getElementById("letterguessed-text");
var numOfGuessesText = document.getElementById("guessesremaining-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");



//     If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
    
    
//     As the user guesses the correct letters, reveal them: m a d o _  _ a.

// for (var i = 0; i < words.length; i++) {
//  answers[i] = "_";
// }
// var remainingLetters = words.length;


      lettersGuessed.textContent = "Letters Guessed: " + lettersGuessed;
      numOfGuesses.textContent = "Guesses Remaining: " + numOfGuesses;
      wins.textContent = "wins! " + wins;
      losses.textContent = "loses " + losses;

//     Number of Guesses Remaining: (# of guesses remaining for the user).


//     Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).


    
//     After the user wins/loses the game should automatically choose another word and make the user play it.
