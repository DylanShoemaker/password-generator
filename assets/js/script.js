
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

//user input starts function by pressing the generateBtn

//prompts for password criteria 
        //What length do you want, has to be between 8 and 128 characters

        //tell the user that they will be able to generate a password with lowercase uppercase numbers and symbols of their choosing, you can choose all, none, or a mix 

        //lowercase? Boolean

        //uppercase? Boolean

        //numeric? Boolean

        //special characters? Boolean

        // if false for all alert user to select at 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
