let myName;

//This function is to get the users name.
function getName() {
  myName = prompt("What is your name?");
  alert("Thank you, " + myName + " . Welcome to the Leannatrix");
  console.log("myName");
}

//This function asks the user if they would like to play a game.
function askAboutGame() {
  let gameResult = confirm(myName + "would you like to play a game?");
  if (gameResult == true) {
    alert("wooo! Let's get started, " + myName + ". Make sure to answer the questions with a yes or a no.");
  }

    // This function lets you play a guessing game. 
    function guessingGame() {
        let year = prompt("Was Leanna born in 1995?");
        while (year !== "yes" && year !== "y" && year !== "no" && year !== "n") {
      alert("Please answer yes or no.");
      year = prompt("Was Leanna born in 1995?");
    }
    if (year == "yes" || year == "y") {
      alert("No you muppet!");
    } else {
      alert("Well done! Leanna was born in 1997, not 1995.");
    }

    let placeOfBirth = prompt("Was Leanna born in Romford?");

    while (
      placeOfBirth !== "yes" &&
      placeOfBirth !== "y" &&
      placeOfBirth !== "no" &&
      placeOfBirth !== "n"
    ) {
      alert("Please answer yes or no.");
      placeOfBirth = prompt("Was Leanna born in Romford?");
    }

    if (placeOfBirth == "yes" || "y") {
      alert("Well done, Leanna was unfortunately born in Romford.");
    } else {
      alert("Leanna wishes, she was unfortunately born in Romford.");
    }

    let awesomeAnswer = prompt(
      "Is Leanna the most awesome person in the world?"
    );

    while (
      awesomeAnswer !== "yes" &&
      awesomeAnswer !== "y" &&
      awesomeAnswer !== "no" &&
      awesomeAnswer !== "n"
    ) {
      alert("Please answer yes or no.");
      awesomeAnswer = prompt("Is Leanna the most awesome person in the world?");
    }

    if (awesomeAnswer == "yes" || "y") {
      alert("Hell yeaaaaaah, that is correct.");
    } else {
      alert("Get the hell off of my page...NOW!");
    }

    let numberAnswer = 2
    let numberGuess = prompt("How many years has Leanna had her cat Bear? Guess a number.");
    while(numberAnswer != 2) {
    alert("Go higher!");



    }


    //This is where they go if they don't want to play
  } else {
    alert("Wow, ok then...Bye " + myName);
  }
}
getName();
askAboutGame();









