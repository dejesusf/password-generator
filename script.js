// Add event listener to generate button
document.getElementById("generate").addEventListener("click", passLength);

// Assignment Code
// var generateBtn = document.querySelector("#generate");
// var passCriteria = ["Length of password? Please choose a number between 8 and 128 characters.", "Would you like to include lowercase letters?", "Would you like to include UPPERCASE letters?", "Would you like to include numbers?", "Would you like to include special characters?"]
// var passLength
// var lowerCase = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// var specialCase= ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "\\", "|", ":", ";", "'", "<", ",", ".", ">", "?", "/"]
// var number=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
//popup when nothing is entered or password does not meet critera
// function passLength () {
//   prompt(passCriteria[0]);
//   if (passLength==null){
//     return;
//   }
//   while (passLength <8 || passLength >128){
//     prompt(passCriteria[0])
//     if (passLength==null){
//     return;
//   }
// }
// }

//popups needed for length, lowercase, uppercase, special characters, and numbers

//variables
var lowerCase= "abcdefghijklmnopqrstuvwxyz";
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar= "~`!@#$%^&*()-_+={}[]|\:;'<>,.?/";
var passLength=0;
var passCriteria= ["Length of password? Please choose a number between 8 and 128 characters.", "Would you like to include lowercase letters?", "Would you like to include UPPERCASE letters?", "Would you like to include numbers?", "Would you like to include special characters?"]

//function for popups
