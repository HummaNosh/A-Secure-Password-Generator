// Assignment Code
var generateBtn = document.querySelector("#generate");
// The job of the button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var enter = "";
var tempValues = "";

// VARIABLES

var Number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log(Number);
var Character = [
  "!",
  "£",
  "$",
  "%",
  "^",
  "&",
  "*",
  "_",
  "-",
  "+",
  "=",
  ",",
  ".",
  "/",
  ";",
  "~",
  "#",
  "`",
  "|",
];
console.log(Character);

var Uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
console.log(Uppercase);

var Lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(Lowercase);

// // PROMPTS -----------------------------------------------------------------------

//   // This will pop up on the users screen when they click generate password

function generatePassword() {
  // Just to confirm the button is defo clicked..
  console.log("Dont worry, button is clicked");

  enter = parseInt(
    prompt(
      "How long do you want your password to be? Please choose between 8 - 128 characters. "
    )
  );

  // If the user clicks cancel the below will happen...
  if (!enter) {
    alert("You must enter a valid value to continue");
  }
  // If the user selects an invalid number then the below will happen...
  else if (enter < 8 || enter > 128) {
    enter = parseInt(
      alert(
        "Your password must be between 8 - 128 characters long. Please select a valid number"
      )
    );

    // User to confirm if they want to include numbers
  } else {
    Number = confirm(
      "Would you like your password to contain numbers? If YES click OK, if NO click cancel"
    );

    // ..characters...
    Character = confirm(
      "Would you like your password to contain special characters? If YES click OK, if NO click cancel"
    );
    // ..uppercase..
    Uppercase = confirm(
      "Would you like your password to contain Uppercase letters? If YES click OK, if NO click cancel"
    );
    // ..lowercase..
    Lowercase = confirm(
      "Would you like your password to contain Lowercase letters? If YES click OK, if NO click cancel"
    );
  }
  // to define a password with random values

  var choices = [];

  var password = [Number, Character, Uppercase, Lowercase];

  for (var i = 0; i < enter; i++) {
    var random = password + choices[Math.floor(Math.random() * choices.length)];
    password.push(random);
    console.log("its worked");
    console.log(password);
    console.log(choices);
    // print password
    password.textContent = password;
  }
}

// THIS IS IF THEY SELECT NUMBER AND CHARACTER THEN THE BELOW WILL INCLUDE IN PWRD, I NEED TO DO THIS FOR EVERY SCENARIO...LIKE IF THEY SELECT XXXX

// If they select cancel on everything THIS WORKS
// else if (
//  !haracter &&
//     !Number &&
//     !Uppercase &&
//     !Lowercase
//   ) {
//     choices = alert("You must pick atleast one of the given criteria");
//   }
// }
