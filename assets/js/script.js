
//need to declare confirms for user input booleans
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confirmSymbols;

// for password length
var userInputLength = [];

//put var numbers letters and symbols here
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var numbers = ["0123456789"]
var symbols = ["!#$%&()*+-:;<=>?@[\]^_`{|}~"]

// Get references to the #generate element in html with id = generate
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", displayPassword);

//start password generator by user pressing button
var passwordMachineGoBrrr = function() {
  //prompt What length would you like your new password to be? You can pick any length between 8 and 128 characters!
  var confirmNumbers = parseInt.prompt("What length would you like your new password to be? You can pick any length between 8 and 128 characters!");
  //this is for no response
  if (!userInputLength) {
    alert("Have you ever seen a blank password before? Neither have we. Please try again.");
    return " ";
    //response is not between 8-128 characters 
  } else if (userInputLength < 8 || userInputLength > 128) {
    userInputLength = alert("You absolutely must enter a number between 8 and 128, I insist!");
    return " ";
  }
  else {
    var confirmUpperCase = confirm("Would you like lower case letters? e.g. abcde");
    var confirmLowerCase = confirm("Would you like UPPER CASE letters? e.g. ABCDE");
    var confirmNumbers = confirm("Would you like Numbers? e.g. 1337");
    var confirmSymbols = confirm("Would you like special characters? e.g. $#!@");
  }  
      


}

// else 
//false for all four options 
//then
//alert Invalid response, password must have at least one type of character.
//break;

// Write password to the #password input
function displayPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //var upperCase 
  //var lowerCase 
  //var numbers 
  //var symbols 

  passwordText.value = password;

}



// password appears in the form of an alert in textarea