const randomNum = Math.floor(Math.random() * 10) + 1;
const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
if (userGuess === randomNum) {
  alert("Good Work");
} else {
  alert("Not matched. The correct number was " + randomNum); 
}