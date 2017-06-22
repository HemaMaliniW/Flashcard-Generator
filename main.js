var require = require("./basic.js");

var inquirer = inquire("inquirer");

// var BasicCard = 

// console.log("basic");
var askQuestion = function() {
  // the inquirer uses the prompt to ask questions that are set in an inquirer prompt. They are set as card in the front adn back position.

    inquirer.prompt([
      {
        front: "Who makes the best food on food network?",
        back: "Undoubtley it is Guarnascelli!"
      }, {
        front: "Who is an annoying anchor on FN?",
        back: "Bobby Flay- don't kill me!"
      }, {
        front: "Where is the place with the most fresh food in the US?",
        back: "New York and not California!"
      }, {
        front: "What is the name of the show where people party the most on FN?",
        back: "The Kitchn!"
      }
       {
        front: "Who was the first person to do a travel and cooking show on food network?",
        back: "Rachel Ray back in 2004!"
      }
       {
        front: "Who is the most funny and empathy driven of the anchors on Food Network?",
        back: "Alton Brown!"
      }
       {
        front: "Who makes the best food on food network?",
        back: "Undoubtley it is Guarnascelli! Oops that's a repeat questions!"
      }
      console.log("questions")
    ])

    .then(function(answers) {
      // initializes the variable newBasicCard to be a programmer object which will take
      // in all of the user's answers to the questions above
      var newBasicCard = new Programmer(
      	this.front = front;
      	this.back = back;

      	);
      // printInfo method is run to show that the newBasicCard object was successfully created and filled
      module.exports = BasicCard;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
  }
//   else {
//     console.log("All questions asked");
//   }
// };




