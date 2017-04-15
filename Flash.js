 
// i'm very behind this week, i'll have something closer to working ASAP
// inquirer npm package
var inquirer = require("inquirer");
console.log("This is not the app you are looking for");
var userAnswer = process.argv[2]
// card constructor 
function basicCard(front,back) {
  this.front = front;
  this.back = back
};
function clozeCard(text,cloze) {
  this.text = text;
  this.cloze = cloze
};
// quiz questions
 var question1 = new basicCard("What is the answer to the ultimate question of life, the universe and everything?", "42");
 console.log(question1.front);
 console.log(question1.back);

 var question2 = new clozeCard("May the . . . be with you", "force");
 console.log(question2.text);
 console.log(question2.cloze);

 