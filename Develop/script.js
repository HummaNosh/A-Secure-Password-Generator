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

// VARIABLES

var length = "";
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

  length = parseInt(
    prompt(
      "How long do you want your password to be? Please choose between 8 - 128 characters. "
    )
  );
  console.log("length of password");

  // If the user clicks cancel the below will happen...
  if (!length) {
    alert("You must enter a valid value to continue");
  }
  // If the user selects an invalid number then the below will happen...
  else if (length < 8 || length > 128) {
    length = parseInt(
      alert(
        "Your password must be between 8 - 128 characters long. Please select a valid number"
      )
    );

    // User to confirm if they want to include numbers
  } else {
    Number = confirm(
      "Would you like your password to contain numbers? If YES click OK, if NO click cancel"
    );
    console.log("Numbers selected");
    // ..characters...
    Character = confirm(
      "Would you like your password to contain special characters? If YES click OK, if NO click cancel"
    );
    console.log("Special characters selected");
    // ..uppercase..
    Uppercase = confirm(
      "Would you like your password to contain Uppercase letters? If YES click OK, if NO click cancel"
    );
    console.log("uppercase selected");
    // ..lowercase..
    Lowercase = confirm(
      "Would you like your password to contain Lowercase letters? If YES click OK, if NO click cancel"
    );
    console.log("lowercase selected");
  }
  // to define a password with random values

  var choices = [Number, Character, Uppercase, Lowercase];
  // var password works as well as doing the same as choices...
  var pword = [];
  // var secpassword = document.getElementById("#password");

  for (var i = 0; i < length; i++) {
    var random = pword + choices[Math.floor(Math.random() * choices.length)];
    pword.push(random);

    console.log("its worked");
    console.log(pword);
    console.log(choices);

    // IF I ADD THIS, THEN LENGTH STOPS WORKING?? ALSO TEXT CONTENT IS UNKNOWN ALSO THIS IS ALREADY ON TOP LINES?? ...secpassword.textContent = password;
  }
}
// if (!Character && !Number && !Uppercase && !Lowercase) {
//   choices = alert("You must pick at least one of the given criteria");
// }

// THIS IS IF THEY SELECT NUMBER AND CHARACTER THEN THE BELOW WILL INCLUDE IN PWRD, I NEED TO DO THIS FOR EVERY SCENARIO...LIKE IF THEY SELECT XXXX

// If they select cancel on everything THIS WORKS
