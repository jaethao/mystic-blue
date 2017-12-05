//variables of the letters
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n",
  "o", "p," "q", "r", "s", "t", "u", "v", "x","y", "z"];

  //variables that hold score, guesses, and letters guessed
  var wins = 0;
  var losses = 0;
  var chances = 10;
  var usedLetters = [""];

  //function run whenever the user presses a key.
  document.onkeyup = function(event){

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

if (userGuess === computerGuess) {
wins++;
} else (userGuess !== computerGuess) {
  chances--;
}
};
