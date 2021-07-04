
//need to declare confirms for user input booleans
var confirmUpperCase
var confirmLowerCase
var confirmNumbers
var confirmSymbols 

// for password length
var userInputLength = [];

//put var numbers letters and symbols here
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var numbers = ["0123456789"]
var symbols = ["!#$%&()*+-:;<=>?@[\]^_`{|}~"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//start password generator by user pressing button


//prompt What length would you like your new password to be? You can pick any length between 8 and 128 characters!

//if 
//response is not between 8-128 characters 
//then
//alert Invalid response, password length must be 8-128 characters long.
//break;

//window.confirm Would you like lower case letters? e.g. abcde

//window.confirm Would you like include UPPER CASE letters? e.g. ABCDE

//window.confirm Would you like Numbers? e.g. 1337

//window.confirm Would you like special characters? e.g. $#!@

// if 
//false for all four options 
//then
//alert Invalid response, password must have at least one type of character.
//break;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //var upperCase 
  //var lowerCase 
  //var numbers 
  //var symbols 

  passwordText.value = password;

}



// password appears in the form of an alert in textarea