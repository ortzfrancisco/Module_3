// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  //var password = "how many character you want"
  var passwordText = document.querySelector("#password");
  var Prompt1 =prompt("how many characters do you want?\nenter a number between8-128")
  if (Prompt1 <8) {
    window.alert("invalid input you need more than 8 characters")
  } else if (Prompt1 >128) {
    window.alert("invalid input you need less than 128 characters")
  } else{
  var prompt2 =window.confirm("do you want lower case characters")
  var prompt3 =window.confirm("do you want upper case")
  var prompt4 =window.confirm("do you want symbols")
  var prompt5 =window.confirm("do you want numeric") 
}

  if (
  (!prompt2) &&
  (!prompt3) &&
  (!prompt4) &&
  (!prompt5) ){
    window.alert("didnt select any characters")
  }else{ 
    var password = generatePassword(Prompt1,prompt2,prompt3,prompt4,prompt5);
    passwordText.value = password;

  }
  
function generatePassword(numcharacters,lower, upper, symbols, numeric){
  var alphabet=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var numbers =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var symbolcharacters=['~', '!','@', '#', '$', '%', '&', '(', ')','^','-','*', '+', " ", '"', '"', '.', '/', ':', ';', '>', '<', '=', '?', '_', '|', '{', '}', ]
  var newpasswordarray=[]

  for (let i = numcharacters; i> 0 ; ) {
  if (lower) {
    var ramdomalphabet= alphabet[Math.floor(Math.random() * alphabet.length)]
  newpasswordarray.push(ramdomalphabet)
  i--
  if (i === 0) {
    break;
  }
}
if (upper) {
  var ramdomupper= alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase()
  newpasswordarray.push(ramdomupper)
  i--
  if (i === 0) {
    break;
  }
}
if (symbols) { 
  var ramdomsymbols= symbolcharacters[Math.floor(Math.random() * symbolcharacters.length)]
  newpasswordarray.push(ramdomsymbols)
  i--
  if (i === 0) {
    break;
  }
}
if (numeric) {
  var ramdomnumbers =numbers[Math.floor(Math.random() * numbers.length)]
  newpasswordarray.push(ramdomnumbers)
  i--
}
  }
var newPassword=""
for (let i= 0; i < newpasswordarray.length; i++) {
newPassword += newpasswordarray[i]
}
  //console.log(newPassword);
  //console.log(numcharacters);
  //console.log(lower);
  //console.log(symbols);
  return newPassword
  }


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
