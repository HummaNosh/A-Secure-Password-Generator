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

var plength = "";

// Below are to be used in prompts
var Number = [];

var Character = [];

var Uppercase = [];

var Lowercase = [];

// // PROMPTS -----------------------------------------------------------------------

//   // This will pop up on the users screen when they click generate password

function generatePassword() {
  // Just to confirm the button is defo clicked..
  console.log("Dont worry, button is clicked");

  plength = parseInt(
    prompt(
      "How long do you want your password to be? Please choose between 8 - 128 characters. "
    )
  );
  console.log("length of password");

  // If the user clicks cancel the below will happen...
  if (!plength) {
    alert("You must enter a valid value to continue");
  }
  // If the user selects an invalid number then the below will happen...
  else if (plength < 8 || plength > 128) {
    plength = parseInt(
      alert(
        "Your password must be between 8 - 128 characters long. Please select a valid number"
      )
    );

    // User to confirm if they want to include numbers
  } else {
    Number = confirm(
      "Would you like your password to contain numbers? If YES click OK, if NO click cancel"
    );
    console.log("Pick your numbers");
    // ..characters...
    Character = confirm(
      "Would you like your password to contain special characters? If YES click OK, if NO click cancel"
    );
    console.log("Pick your characters");
    // ..uppercase..
    Uppercase = confirm(
      "Would you like your password to contain Uppercase letters? If YES click OK, if NO click cancel"
    );
    console.log("Pick your uppercase letters");
    // ..lowercase..
    Lowercase = confirm(
      "Would you like your password to contain Lowercase letters? If YES click OK, if NO click cancel"
    );
    console.log("Pick your lowercase letters");

    // If none of the given criteria are selected then the below...

    if (!Character && !Number && !Uppercase && !Lowercase) {
      choices = alert("You must pick at least one of the given criteria");
    }
  }

  // Choices for the password

  var choices = "";
  if (Number == true) {
    choices = choices + "1234567890";
  }
  if (Character == true) {
    choices = choices + "!£$%^&*~@,|=_-,";
  }
  if (Uppercase == true) {
    choices = choices + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (Lowercase == true) {
    choices = choices + "abcdefghijklmnopqrstuvwxyz";
  }

  // To define a password with random values...

  var pword = [];

  for (var i = 0; i < plength; i++) {
    var random = choices.charAt(Math.floor(Math.random() * choices.length));
    pword.push(random);
  }
  console.log("its worked");
  console.log(pword);
  console.log(choices);

  // Sticking the Password on the label..
  return pword;
}
