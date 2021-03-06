
// ---------------------------------------------------------------------------

//  The basic.json card data is brought into this pgm via the require statement, 
//  and is stored in the cardData variable. The data is array/object format. 

//  We will then loop thru the cardData array one at a time. 
//  see the for loop which follows after the variable declarations

//  For each time or iteration of the loop,
//  the cardData, 1 card,  will be put into currentCard

//  currentCard will then be pushed onto the cardArray

// Requires

var cardData = require("./questions.json");     // input card data - an array of objects
console.log("The data is  brought into the pgm via the require statement,");
console.log("   and stored in the cardData variable, as an array of objects. ");
console.log("cardData=" + JSON.stringify(cardData));
console.log("cardData length = " + cardData.length);
console.log("\n");


var inquirer = require("inquirer");         // npm inquirer to prompt/answer user
var BasicCard = require("./BasicCard.js");  // the basic card constructor

// ---------------------------------------------------------------------------

initCards();  // Start the game for the first time

// ---------------------------------------------------------------------------


function initCards(){

    var currentCard;                            // hold or work area for current card
    var cardArray = [];                         // store the flash cards here
    var currentIndex = 0;

    // ---------------------------------------------------------------------------

    // loop thru the cardData, and ultimately push each card into the cardArray
    for (var i = 0; i < cardData.length; i++) {
       currentCard = new BasicCard(cardData[i].question,cardData[i].answer); 
       //console.log("currentCard" + i + "=" + JSON.stringify(currentCard));
       cardArray.push(currentCard);
    }
    console.log("We push the cardData onto the cardArray using the BasicCard contructor.");
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


