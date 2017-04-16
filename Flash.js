// inquirer npm package
var basicCard = require("./basicCardCon.js")
var gameData = require("./questions.json");
var inquirer = require("inquirer");

console.log("I'm one with the force and the force is with me")
console.log("Fill in the blank - Star Wars quotes")
startGame();

function startGame() {
  // initialize variables
  var currentCard;
  var flashArray = [];
  var initialScore = 0;
  var initialIndex = 0;

  // Create cards
  for (var i = 0; i < gameData.length; i++) {
    currentCard = new basicCard(gameData[i].front, gameData[i].back);
    flashArray.push(currentCard);
  }
  // game play
  playRound(initialScore, flashArray, initialIndex);
}

function endGame(score) {
  // Alert user of their final score
  console.log("Star wars quotes quiz is over!");
  console.log("Final score:", score);
  inquirer.prompt([{
    type: "input",
    name: "text",
    message: "are you one with the force? (wanna play again type y/n)"
  }]).then(function(answer) {
    if (answer.text.charAt(0).toLowerCase() === "y") {
      // Restart
      startGame();
    } 
    else {
      // end
      console.log("May the force be with you. Always.");
    }
  });
}

function playRound(currentScore, flashArray, currentIndex) {
  // keep playing untl cards are gone
  if (currentIndex < flashArray.length) {
    promptUser(flashArray, currentIndex, currentScore);
  }
  // or end game
  else {
    endGame(currentScore);
  }
}

function promptUser(flashArray, currentIndex, currentScore) {
  var quote = flashArray[currentIndex];
  // Show quote with missing word(s)
  inquirer.prompt([{
    type: "input",
    name: "text",
    message: quote.front + "\nAnswer:"
  }]).then(function(answer) {
    //check answer 
    if (answer.text.trim().toLowerCase() === quote.back.trim().toLowerCase()) {
      //increase score with correct answer 
      currentScore++;
      console.log("You're a Jedi Master! The correct answer is '" + quote.back + "'.");
    } 
    else {
      //inncorect answer
      console.log("You're a sruffy-looking nerf herder. :/ The correct answer is '" + quote.back + "'.");
    }
    // increase current card index
    currentIndex++;

    //console.log("-------------------------");
    // Play the next round with our updated score and card index
    playRound(currentScore, flashArray, currentIndex);
  });
}