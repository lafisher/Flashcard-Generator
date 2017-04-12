// this is a contructor from an old assignment i pulled over as a starting point. 
// i'm very behind this week, i'll have something closer to working ASAP

// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmers objects
function grandMasterFlash(batman, superman, wonderwoman, kidflash, aquaman, greenarrow, robin) {
  this.batman = batman;
  this.superman = superman;
  this.wonderwoman = wonderwoman;
  this.kidflash = kidflash;
  this.aquaman = aquaman;
  this.greenarrow = greenarrow;
  this.robin = robin;
}

// quiz method 
grandMasterFlash.prototype.quiz = function() {
  console.log("Name: " + this.batman + "\nPosition: " + this.superman + "\nAge: " +
  this.age + "\nLanguages: " + this.language + "\nLanguages: " + this.language +  "\nLanguages: " + this.language);
};

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    name: "name",
    message: "What is your name?"
  }, {
    name: "position",
    message: "What is your current position?"
  }, {
    name: "age",
    message: "How old are you?"
  }, {
    name: "language",
    message: "What is your favorite programming language?"
  }
]).then(function(answers) {
  // initializes the variable newguy to be a programmer object which will take
  // in all of the user's answers to the questions above
  var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
  // printInfo method is run to show that the newguy object was successfully created and filled
  newGuy.printInfo();
});
