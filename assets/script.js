// Assignment code here


// Get references to the #generate element


var generateBtn = document.querySelector("#generate");


var generatePassword = function () {
  
// Determines length of password
  var passwordLength = prompt("Choose a password length from 8-128 characters.");
  passwordLength = parseInt(passwordLength);

  // Creates variables for confirm messages
  var specialCharacter = confirm("Would you like your password to include special characters?");
  var lowercaseCharacter = confirm("Would you like your password to include lowercase characters?");
  var uppercaseCharacter = confirm("Would you like your password to include uppercase characters?");
  var numberCharacter = confirm("Would you like your password to include numbers?");
 
  // Places all confirmation messages into an array
  var confirms = [specialCharacter, lowercaseCharacter, uppercaseCharacter, numberCharacter];
  for (var i = 0; i < confirms.length; i++) {
  (confirms[i]);
  }


// Builds the available character list from user input
var availableCharacters = [];
if (specialCharacter) {
  availableCharacters.push("!@#$%^&*()");
}
if (lowercaseCharacter) {
  availableCharacters.push("abcdefghijklmnopqrstuvwxyz");
}
if (uppercaseCharacter) {
  availableCharacters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}
if (numberCharacter) {
  availableCharacters.push("0123456789");
}

console.log(availableCharacters);

// Assign final password variable and generate randomly
var finalPassword = "";
for (var i = 0; i < passwordLength; i++) {
  var randomCharacterGroup = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
  var randomCharacter = randomCharacterGroup.charAt(Math.floor(Math.random() * randomCharacterGroup.length));
  finalPassword += randomCharacter;
}

// Display generated password
  return (finalPassword);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);