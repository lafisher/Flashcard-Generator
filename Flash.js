 
// i'm very behind this week, i'll have something closer to working ASAP
// inquirer npm package
var inquirer = require("inquirer");
console.log("This is not the app you are looking for");

// card constructor 
function basicCard(front,back) {
  this.front = front;
  this.back = back
};
function clozeCard(text,cloze) {
  this.text = text;
  this.cloze = cloze
};
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

  var question = new basicCard(answers.name, answers.position, answers.age, answers.language);
 question.printInfo();
});
