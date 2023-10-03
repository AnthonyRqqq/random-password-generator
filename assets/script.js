// Assignment code here


// Get references to the #generate element


var generateBtn = document.querySelector("#generate");


var generatePassword = function () {
  
  // var passwordLength = prompt("Choose a password length from 8-128 characters.");
  // passwordLength = parseInt(passwordLength);
  

  // Creates variables for prompt messages
  var specialCharacter = confirm("Would you like your password to include special characters?");
  var lowercaseCharacter = confirm("Would you like your password to include lowercase characters?");
  var uppercaseCharacter = confirm("Would you like your password to include uppercase characters?");
  var numberCharacter = confirm("Would you like your password to include numbers?");
 
  //Places all confirmation messages into an array
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


  // return (finalPassword);
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




// function generatePassword(minLength, maxLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars) {
//   const charset = [];
//   if (includeUppercase) charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
//   if (includeLowercase) charset.push("abcdefghijklmnopqrstuvwxyz");
//   if (includeNumbers) charset.push("0123456789");
//   if (includeSpecialChars) charset.push("!@#$%^&*()_-+=<>?");

//   if (charset.length === 0) {
//     alert("Please select at least one character type.");
//     return "";
//   }

//   const availableChars = charset.join('');
//   const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
//   let password = "";

//   for (let i = 0; i < passwordLength; i++) {
//     const randomIndex = Math.floor(Math.random() * availableChars.length);
//     password += availableChars.charAt(randomIndex);
//   }

//   return password;
// }

// const minLength = parseInt(prompt("Enter minimum password length:"));
// const maxLength = parseInt(prompt("Enter maximum password length:"));

// if (isNaN(minLength) || isNaN(maxLength) || minLength > maxLength) {
//   alert("Please enter valid minimum and maximum password lengths.");
// } else {
//   const includeUppercase = confirm("Include uppercase letters?");
//   const includeLowercase = confirm("Include lowercase letters?");
//   const includeNumbers = confirm("Include numbers?");
//   const includeSpecialChars = confirm("Include special characters?");

//   const password = generatePassword(minLength, maxLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars);

//   if (password) {
//     alert("Generated Password: " + password);
//   }
// }
