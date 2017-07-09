var cardData = require("./questions.JSON"); 
console.log("The data is  brought into the pgm via the require statement,");
console.log("   and stored in the cardData variable, as an array of objects. ");
console.log("cardData=" + JSON.stringify(cardData));
console.log("cardData length = " + cardData.length);
console.log("\n");
var inquirer = require("inquirer");

var basicCard = require("./basicCard.js");  // the basic card constructor


// ---------------------------------------------------------------------------

initCards();

function initCards(){

    var currentCard;                            // hold or work area for current card
    var cardArray = [];                         // store the flash cards here
    var currentIndex = 0;

    // ---------------------------------------------------------------------------

    // loop thru the cardData, and ultimately push each card into the cardArray
    for (var i = 0; i < cardData.length; i++) {
       currentCard = new basicCard(cardData[i].question,cardData[i].answer); 
       console.log("currentCard" + i + "=" + JSON.stringify(currentCard));
       cardArray.push(currentCard);
    }
    console.log("We push the cardData onto the cardArray using the basicCard contructor.");
    console.log("Note the constructor puts the front and back keys on the object.");
    console.log("cardArray=" + JSON.stringify(cardArray));
    console.log("\n");

    playRound(cardArray, currentIndex);

}


function playRound(cardArray, currentIndex){
    //console.log("*** playRound currentIndex=" + currentIndex);
    
    if (currentIndex < cardArray.length){
      promptUser(cardArray, currentIndex);
    } else {
      endGame();
    }

}


function promptUser(cardArray, currentIndex) {
    //console.log("*** promptUser currentIndex=" + currentIndex);
    inquirer.prompt([{
      type: "input",
      name: "text",
      message: "Question: " + cardArray[currentIndex].front + "\nAnswer: "
    }]).then(function(answer){
      //console.log("You entered:" + answer.text + "\n");
      currentIndex++;
      playRound(cardArray, currentIndex);
    });
}


function endGame(){

    console.log("\nGame is Over!");
    inquirer.prompt([{
      type: "input",
      name: "text",
      message: "Do you wish to play again?"
    }]).then(function(answer){
      if(answer.text == 'y') {
        initCards();
      } else {
        console.log("\n\nGame ended! Stop by again. \n\n");
      }
      
    });

}




// var askQuestion = function() {
//   // the inquirer uses the prompt to ask questions that are set in an inquirer prompt. They are set as card in the front adn back position.

//     // inquirer.prompt([
//     //   {
//     //     front: "Who makes the best food on food network?",
//     //     back: "Undoubtley it is Guarnascelli!"
//     //   }, 
              // {
//     //     front: "Who is an annoying anchor on Food Network?",
//     //     back: "Bobby Flay. BF- don't kill me!"
//     //   }, {
//     //     front: "Where is the place with the most fresh food in the US?",
//     //     back: "New York and not California!"
//     //   }, {
//     //     front: "What is the name of the show where people party the most on Food Network?",
//     //     back: "The Kitchn!"
//     //   }
//     //    {
//     //     front: "Who was the first person to do a travel and cooking show on Food Network?",
//     //     back: "Rachel Ray back in 2004!"
//     //   }
//     //    {
//     //     front: "Who is the most funny and empathy driven of the anchors on Food Network?",
//     //     back: "Alton Brown!"
//     //   }
//     //    {
//     //     front: "Who makes the best food on food network?",
//     //     back: "Undoubtley it is Guarnascelli! Oops that's a repeat questions!"
//     //   }
//     //   console.log("questions")
//     // ])

//     .then(function(answers) {
//       // initializes the variable newBasicCard to be a programmer object which will take
//       // in all of the user's answers to the questions above
//       var newBasicCard = new Programmer(
//       	this.front = front;
//       	this.back = back;

//       	);
//       // printInfo method is run to show that the newBasicCard object was successfully created and filled
//       module.exports = BasicCard;
//       // run the askquestion function again so as to either end the loop or ask the questions again
//       askQuestion();
//     });
//     // else statement which prints "all questions asked" to the console
//   }
// //   else {
// //     console.log("All questions asked");
// //   }
// // };




