// create array with possible letters
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//main variables

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

//computers pick
var computerPick = letters[Math.floor(Math.random() * letters.length)];
console.log(computerPick);

alert("You have 9 guesses to pick the letter I am thinking of. Can you do it?")

document.onkeypress = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

console.log(guessesSoFar.includes(userGuess))
    if (guessesSoFar.includes(" " + userGuess) === false) {

        if (userGuess === computerPick) {
            wins++;
            alert("You win with " + userGuess + "!")
            reset();
        } else if (userGuess !== computerPick) {
            guessesSoFar.push(" " + userGuess)
            guessesLeft--;
        }

        if (guessesLeft === 0) {
            losses++;
            reset();
        } computerPick

        function reset() {
            guessesLeft = 9;
            guessesSoFar = [];
            computerPick = letters[Math.floor(Math.random() * letters.length)];
            console.log(computerPick);
        };


        // update the HTML to reflect the round's outcome:
        document.getElementById("wins").innerHTML = ("Wins: " + wins);
        document.getElementById("losses").innerHTML = ("Losses: " + losses);
        document.getElementById("guessesSoFar").innerHTML = ("You guessed so far: " + guessesSoFar);
        document.getElementById("guessesLeft").innerHTML = ("You have " + guessesLeft + " guesses remaining")
    };
};