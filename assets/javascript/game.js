

//VARIABLES
//set variable "alphabet" as  a-z
//set variable "guess" for onKeyUp input from player
//set variable "randomLetter" to generate one random letter
//set variable "guessCounter" at 0
//set variable "wins" for correct guesses at 0
//set variable "losses" for incorrect guesses at 0

var guess = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessCounter = 0;
var wins = 0;
var losses = 0;

//FUNCTIONS
//user keys letter "guess," starts function that stores letter and documents to the screen (might be a script that adds and then documents user guesses?)
//guess documents to screen followed by a comma

document.onkeyup = function(event) {
console.log(event);
guess = event.key;

//if randomLetter == guess then wins + 1;
    //guessCounter = 0
    if (randomLetter == guess) {
        wins++;
        resetGame();
    
    }
    
    //if randomLetter != guess then guessCounter + 1
        // if guessCounter = 9 then losses + 1
        // if guessCounter < 9 then return to event function for next user guess
    else if(guessCounter == 8) {
            losses++;
        resetGame()
    }
        
    else {
        guessCounter++;
        var guessHTML = document.getElementById("guess");
        console.log(guessHTML);
        guessHTML.innerHTML += guess + ", ";
       
    }
   
};

function resetGame () {
    guessCounter = 0;
    var winsHTML = document.getElementById("wins");
    var lossesHTML = document.getElementById("losses");
    winsHTML.innerHTML = wins;
    lossesHTML.innerHTML = losses;

}


















