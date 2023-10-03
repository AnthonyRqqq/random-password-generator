// Assignment code here


// Get references to the #generate element


var generateBtn = document.querySelector("#generate");



var generatePassword = function () {
  return ("WIP")
}


//follow up with prompt to get number of characters in password
// var numofapples = prompt("How many apples do you want?")
//numberofaples = parseInt(numberofapples)
//processing...
//return password COMPLETE?


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// prompt
// confirm
// 4 different confirms/ifs   --------------  confirmExpressionconditionals

//first error means create a function

// --------------------- Working Code ----------------------------


// *** Prompts for different characters ***
// var specialCharacter = ("Would you like your password to include special characters?");
// var lowercaseCharacter = ("Would you like your password to include lowercase characters?");
// var uppercaseCharacter = ("Would you like your password to include uppercase characters?");
// var numberCharacter = ("Would you like your password to include numbers?");

// *** Places prompt variable into an array ***
// var prompts = [specialCharacter, lowercaseCharacter, uppercaseCharacter, numberCharacter];


// *** Creates a for loop to activate prompts in order ***
// for (var i = 0; i < prompts.length; i++) {
//   prompt(prompts[i])
// }
