// create array with possible letters
var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//main variables

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");


//computers pick
var computerPick = letter[Math.floor(Math.random() * letter.length)];
console.log(computerPick);

alert("You have 9 guesses. Choose wisely");


document.onkeypress = function (event) {
    var userGuess = event.key;
    
    if (userGuess === computerPick) {
        wins++;
 
    } else if (userGuess !== computerPick) {
        guessesLeft--;

    };

    if (guessesLeft === 0) {
        losses++
        
    }

    function resetVariables () {
        lettersGuessed = [];
        guessesLeft = 9;
    }

// update the HTML to reflect the round's outcome:
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeft.textContent = "Guesses Left: " - guessesLeft;
guessesSoFar.textContent = "Your guesses so far... " + guessesSoFar;

};