// Assignment code here
// Jazmyne B.

var passLen = 0; //Password Length
var newPass = ""; //New Generated Password
//lIST NUMBERS  
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//List Letters Upper vs Lowercase
var alphLow = ["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphUp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

  //Prompted for Password Criteria
  //var userResp = window.prompt("Please Select Password criteria");

  //if (userResp){
   // window.prompt("Please choose desired length");
  // }

}

function generatePassword(){
  //Asks Length
  while (passLen < 8 || passLen > 128){
    passLen = window.prompt("How long do you wish your password to be? (8-128)");
    if (passLen < 8 || passLen > 128){
      alert("Password must be at least 8 characters and no more than 128 characters");
    }
}
  //Char Types ; Lower Case
  //Since the Char Types are Either Yes or No we can use Confirm instead of Prompt
  var passLow = window.confirm("Would you like lowercase characters?");
  //Upper Case
  var passUp = window.confirm("Would you like to include upper case characters?");
  //numeric
  var passNum = window.confirm("Would you like numeric characters included?");
  //special characters
  var passSp = window.confirm("Would you like to include special chacters?");

  //There must be AT LEAST ONE Character Type, 
  //If all responses or FALSE, ask again
  while (passLow == false && passUp == false && passNum == false && passSp == false){
    alert("You must include AT LEAST ONE Character type!")
    passLow = window.confirm("Would you like lowercase characters?");
    passUp = window.confirm("Would you like to include upper case characters?");
    passNum = window.confirm("Would you like numeric characters included?");
    passSp = window.confirm("Would you like to include special chacters?");

  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
