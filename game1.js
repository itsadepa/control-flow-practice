//Variables
//var player;
//var answer;
var score = 0;


// Teaser function
function teaser() {
  var firstDiv = document.getElementById("welcome");
  // hide welcome element
  firstDiv.hidden = true;
  // Show gameButton element
  var secondDiv = document.getElementsByClassName("gameButton");
  secondDiv[0].hidden = false;
}

// playGame Function
function playGame() {
  // When the button is clicked the game taste
  alert("Welcome to the game");
  var player = prompt("What is your name?");
  var answer = prompt("Hi, " + player + "! Ready to play? Y or N").toUpperCase();
  ready(answer);
  alert("So, " + player + ", Mimi wants to know if you know her?");
  intro(answer);
  q1();
  console.log(score);
  q2();
  console.log(score);
  q3();
  console.log(score);
  q4();
  console.log(score);
  q5();
  console.log(score);
  finalScore();
  alert("Thanks for playing!");
}

function ready(answer) {
  if (answer === "Y") {
    alert("Yay! Let's play!");
  } else {
    alert("Okay! See ya!");
    return;
  }
}

function intro(answer) {

  var answer = prompt("Do you think you do? Y or N").toUpperCase();
  if (answer === "Y") {
    alert("Great let's see if you do!");
  } else {
    alert("Really??? Let's see if you know more than you think!");
  }
}

function q1(answer) {
  var answer = prompt("What is Mimi's favourite drink? A. Supermalt or B. Apple Juice").toUpperCase();
  if (answer === "A") {
    alert("Yay! And make sureit's super chilled!");
    return ++score;
  } else {
    alert("Nope! This is my second fave!");
  }
}

function q2(answer) {
  var answer = prompt("When is Mimi's birthday? A. 6th June or B. 16th June").toUpperCase();
  if (answer === "B") {
    alert("Woop woop! You got it!!");
    return ++score;
  } else {
    alert("Nope!! You're too early!");
  }
}

function q3(answer) {
  var answer = prompt("Where does Mimi work? A. Smart Pension or B. Pension Bee").toUpperCase();
  if (answer === "A") {
    alert("Definitely proud to be a Smartie!");
    return ++score;
  } else {
    alert("No way! They are the competition!");
  }
}

function q4(answer) {
  var answer = prompt("How tall is Mimi? A. 5\'6\" or B. 5\'7\"").toUpperCase();
  if (answer === "B") {
    alert("Yes!!! But there is actally a half in too....I need my half oo!");
    return ++score;
  } else {
    alert("I'm not that short you know!!");
  }
}

function q5(answer) {
  var answer = prompt("What makes Mimi Happier? A. Food or B. Family").toUpperCase();
  if (answer === "B") {
    alert("All Day!! Every Day!!! Food is right behind it though! Haha!");
    return ++score;
  } else {
    alert("Come on man! Rate me a little! I love food but never more than family!");
  }
}

function finalScore() {
  alert("How many do you think you got right?");
  if (score >= 4) {
    alert("You seem to know me well! You got " + score + " out 5!!");
    return ++score;
  } else {
    alert("You got " + score + " out of 5!! I think we need to re-evaluate our friendship...");
  }
}

/*function trivia1(answer) {
  var answer = prompt("What is").toUpperCase();
  if (answer === "A") {
    alert("");
    return ++score;
  } else {
    alert("");
  }
}*/

/*function trivia2(answer) {
  var answer = prompt("What is").toUpperCase();
  if (answer === "A") {
    alert("");
    return ++score;
  } else {
    alert("");
  }
}*/

// Templates
//alert("");
// var answer = prompt("").toUpperCase();
// if (answer === "Y") {
//  alert("");
//} else {
//  alert("");
//}




// Bridge
// Are you tired of playing this game?
// If yes: trivia
// If no: continue


// Trivia 1
// Trivia: in which year did Richard Branson go to space?
// Answer: 2021

// Trivia 2
// Trivia: How many people were on the first space trip on Blue Origin?
// Answer: 4
