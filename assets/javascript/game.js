

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
var guessCounter = 9;
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
    else if(guessCounter == 0) {
            losses++;
        resetGame()
    }
        
    else {
        guessCounter--;
        var guessCounterHTML = document.getElementById("guessCounter");
        var guessHTML = document.getElementById("guess");
        console.log(guessHTML);
        guessHTML.innerHTML += guess + ", ";
        guessCounterHTML.innerHTML = "Guesses left: " + guessCounter;
        console.log(guessCounterHTML);
       
    }
   
};

//What had been happening is that when the wins and losses (or guesses as in line 48) started posting, the HTML text went away, showing only the digits. 
//I know replacing it in this way is probably really inelegant, but it works. 
function resetGame () {
    guessCounter = 9;
    var winsHTML = document.getElementById("wins");
    var lossesHTML = document.getElementById("losses");
    winsHTML.innerHTML = "Wins: " + wins;
    lossesHTML.innerHTML = "Losses: " + losses;
    var guessHTML = document.getElementById("guess");
    guessHTML.innerHTML = "Your guesses so far: ";
}


















