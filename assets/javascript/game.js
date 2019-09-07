//  Use key events to listen for the letters that your players will type.



//         Display the following on the page:Press any key to get started!


//         Wins: (# of times user guessed the word correctly).
var wins = 0;
var losses = 0;
var numOfGuesses = 26;
var answers = ["_"];
var lettersGuessed = ["_"];
var words = ["radiohead", "no doubt", "blackstreet", "savage garden", "santana"];


var lettersGuessed = document.getElementById("letterguessed");
var numOfGuesses = document.getElementById("guessesremaining");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");



document.onkeyup = function (event) {
    var keyPressed = event.key;
    for (var i = 0; i < words.length; i++) {
        answers[i] = "_";
    }
    var remainingLetters = words.length;
}

while (remainingLetters > 0) {
    // Show the player their progress
    document.write(answers.join(" "));
    // Take input from the player

    // Update answerArray and remainingLetters for every correct guess
   }




lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
numOfGuessesText.textContent = "Guesses Remaining: " + numOfGuesses;
winsText.textContent = "wins! " + wins;
lossesText.textContent = "loses " + losses;
//     If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
    
    
//     As the user guesses the correct letters, reveal them: m a d o _  _ a.

//     Number of Guesses Remaining: (# of guesses remaining for the user).


//     Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).


    
//     After the user wins/loses the game should automatically choose another word and make the user play it.
