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
var correctGuesses = ["_"];
var incorrectGuesses = ["_"];
var currentWord = ["_"];
var words = ["radiohead", 
             "no doubt", 
             "blackstreet", 
             "savage garden", 
             "santana"];

// variables for quick reference to html
var directionsText = document.getElementById("directions");
var currentWordText = document.getElementById("guessed");
var numOfGuessesText = document.getElementById("remaining");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var correctGuessesText = document.getElementById("correct-guesses");
var incorrectGuessesText = document.getElementById("incorrect-guesses");


// player presses a key to get started
document.onkeyup = function (event) {
    var userGuess = event.key;
    // the game picks a random word to start
    var word = words[Math.floor(Math.random() * words.length)];
    console.log(userGuess);
    console.log(word);
    //for loop to add guesses in to answers array
    // for (var i = 0; i < words.length; i++) {
    //     currentWord[i] = "_";
    // }
    var remainingLetters = words.length;

    while (remainingLetters > 0) {
        // Show the player their progress
        console.log(currentWord.join(" "));
        // Take input from the player
        var word = prompt("Guess a letter!");
        console.log(word);
        if (word === null) {
            break;
        } else if (word.length !== 1) {
            console.log("Please enter a single letter.");
        } else {
            // Update answerArray and remainingLetters for every correct guess
            for (var j = 0; j < words.length; j++) {
                if (words[j] === word) {
                    answers[j] = word;
                    remainingLetters--;
                }
            }
        }
        
    }
}

for (i = 0; i < words.length; i++) {
    words[i]
    for (z = 0; z < correctGuesses.length; z++) {
        if (correctGuesses[z] === currentWord[i]) {
            correctGuesses.push(currentWord[z])
            console.log("correct " + correctGuesses)
        } 
        else {
            incorrectGuesses.push(incorrectGuesses[z])
            console.log("incorrect " + incorrectGuesses)
        }
    };
}
directionsText.textContent = " ";   
currentWordText.textContent = "Letters Guessed: " + currentWord;
numOfGuessesText.textContent = "Guesses Remaining: " + numOfGuesses;
correctGuessesText.textContent = " Correct Guesses: " + correctGuesses;
incorrectGuessesText.textContent = "Incorrect Guesses: " + incorrectGuesses;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;

