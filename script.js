// Add event listener to generate button
document.getElementById("generate").addEventListener("click", passLength);

// Assignment Code
var passCriteria = ["Please choose a number between 8 and 128 for desired character length.", "Would you like to include lowercase letters? Click 'OK' for YES.", "Would you like to include UPPERCASE letters? Click 'OK' for YES.", "Would you like to include numbers? Click 'OK' for YES.", "Would you like to include special characters? Click 'OK' for YES."]
var length=(i=0, i<8, i++);
var lowerCase="abcdefghijklmnopqrstuvwxyz" .split('');
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split('');
var specialCase="~`!@#$%^&*()_-+={}[]|:;<>,.?/" .split('');
var number="0123456789" .split('');

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
  
//   function 
//   passwordText.value = password;
// }

//popups needed for length, lowercase, uppercase, special characters, and numbers
function passLength (length) {
  prompt(passCriteria[0]);
  if ((length<8) || (length>128)) {
    return;
  }
  else {
    confirm(passCriteria[1]),
    lowerCase===true
  }
  else {
    confirm(passCriteria[2]),
    upperCase===true
  }
  else {
    confirm(passCriteria[3]),
    number===true
  }
  else {
    confirm(passCriteria[4]),
    specialCase===true
  }
}
