// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate Password
function generatePassword() {
  var retVal = "";
  var length = window.prompt("Enter the length of your password: \n (The password must have at least 8 characters and no more than 128 characters) \n");
  if (!length) {
    return;
  }
  if (isNaN (length)){
    return retVal = "Not a number";
  }
  if (length < 8 || length > 128){
    return retVal = "Not a valid number";
  } 
  var charset = "";
  var notSelected = "" ; 
  

  // Lowercase Characters ******************************************************************
  var userChoice = window.prompt("Include Lowercase Characters? \n Example: abcdefg... \n Answer Y/N: \n ");
  if (!userChoice) {
    return;
  }
  userChoice = userChoice.toUpperCase();
  if (userChoice === "Y"){
    var minusCharacters = "abcdefghijklmnopqrstuvwxyz";
    charset = charset + minusCharacters;
    var minus = true;
  } else if (userChoice === "N"){
    charset = charset ;
  } else {
    return retVal = "Not valid input";
  }
  // Uppercase Characters ******************************************************************
  var userChoice = window.prompt("Include Uppercase Characters? \n Example: ABCDEFG... \n Answer Y/N: \n ");
  if (!userChoice) {
    return;
  }
  userChoice = userChoice.toUpperCase();
  if (userChoice === "Y"){
    var mayusCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    charset = charset + mayusCharacters;
    var mayus = true;
  } else if (userChoice === "N"){
    charset = charset ;
  } else {
    return retVal = "Not valid input";
  }
  // Numbers   *****************************************************************************
  var userChoice = window.prompt("Include Numbers? \n Example: 012345... \n Answer Y/N: \n ");
  if (!userChoice) {
    return;
  }
  userChoice = userChoice.toUpperCase();
  if (userChoice === "Y"){
    charset = charset + "0123456789";
    var numero = true;
  } else if (userChoice === "N"){
    charset = charset ;
  } else {
    return retVal = "Not valid input";
  }
  // Special Characters   *****************************************************************************
  var userChoice = window.prompt("Include Special Characters? \n Example: !\"#$%&... \n Answer Y/N: \n ");
  if (!userChoice) {
    return;
  }
  userChoice = userChoice.toUpperCase();
  if (userChoice === "Y"){
    var sCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    charset = charset + sCharacters ;
    var special = true;
  } else if (userChoice === "N"){
    charset = charset ;
  } else {
    return retVal = "Not valid input";
  }
  // No selection was done ************************************************************************
  if (charset === notSelected){
    return retVal = "No Criteria Were Selected"
  }
  //*********************************************************************************************** */
  function output (){
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  // At least one Lowercase character ************************************************************************
  if (minus === true) { 
    for (var i = 0; i < length; ++i){
      var x=0;
      for (var j = 0; j < minusCharacters.length; ++j){
        if (minusCharacters[j] === retVal[i]){
          x=1;
        }
      }
      if (x === 1){
      break
      }
    }
    if (x!==1){
    // console.log(retVal);
    retVal = "";
    output()};
    }
  // At least one Uppercase Character ************************************************************************
  if (mayus === true) { 
    for (var i = 0; i < length; ++i){
      var x=0;
      for (var j = 0; j < mayusCharacters.length; ++j){
        if (mayusCharacters[j] === retVal[i]){
          x=1;
        }
      }
      if (x === 1){
      break
      }
    }
    if (x!==1){
    // console.log(retVal);
    retVal = "";
    output()};
    }
  // At least one number must be in the password ******************************************************
  if (numero === true) {
    for (var i = 0; i < length; ++i){
      var x=0;
      if (!isNaN(retVal[i])){
        x=1;
        break;
      }
    }
    if (x!==1){
    // console.log(retVal);
    retVal = "";
    output()};
    }
  // At least one Special Character ************************************************************************
  if (special === true) { 
    for (var i = 0; i < length; ++i){
      var x=0;
      for (var j = 0; j < sCharacters.length; ++j){
        if (sCharacters[j] === retVal[i]){
          x=1;
        }
      }
      if (x === 1){
      break
      }
    }
    if (x!==1){
    // console.log(retVal);
    retVal = "";
    output()};
    }
      // ************************************************************************

  return retVal;
  }
  output();
  
  return retVal;
}


