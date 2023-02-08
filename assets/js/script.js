//variables
var generateBtn = document.querySelector("#generate");
var length;
var characters= "";

//function to generate password criteria
function passwordParams () {
  characters="";
  length= prompt('Please choose a number between 8 and 128 for desired character length.')
  if (length <8) {
    alert('Try again! Length must be at least 8 characters long!');
    return passwordParams();
  } else if (length > 128){
    alert('Try again! Length cannot be greater than 128 characters!')
    return passwordParams();
  } if (confirm("Would you like to include UPPERCASE letters? Click 'OK' for YES.")) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } if (confirm("Would you like to include lowercase letters? Click 'OK' for YES.")) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  } if (confirm("Would you like to include numbers? Click 'OK' for YES.")) {
    characters += '0123456789';
  } if (confirm("Would you like to include special characters? Click 'OK' for YES.")) {
    characters += "~`!@#$%^&*()_-+={}[]|:;<>,.?/";
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password= "";
  for (var i=0; i<length; i++) {
    password+= characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  passwordParams()
  writePassword()
});