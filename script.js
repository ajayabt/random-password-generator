// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options --> I want it to keep asking until they input the correct options. e.g. correct number and how many 
function getPasswordOptions() {
  let characterLength;

  while (true) {
    characterLength = parseInt(prompt('How many characters would you like your password to be?'));

    if (!isNaN(characterLength) && characterLength >= 8 && characterLength <= 128) {
      break;
    } else {
      alert('Character length must be a number between 8 and 128');
    }}
   
    let containsSpecialCharacters, containsNumbers, containsLowerCase, containsUpperCase;

    while (true) {
      containsSpecialCharacters = confirm('Would you like your password to contain special characters?');
      containsNumbers = confirm('Would you like your password to contain numbers?');
      containsLowerCase = confirm('Would you like your password to contain lower case letters?');
      containsUpperCase = confirm('Would you like your password to contain upper case letters?');
  
      if (containsSpecialCharacters || containsNumbers || containsLowerCase || containsUpperCase) 
      {
        break; 
      } else {
        alert('Password must contain at least one character type!');
      }

    }

    return { 
      length: characterLength,
      hasSpecialCharacters: containsSpecialCharacters,
      hasNumbers: containsNumbers,
      hasLowerCase: containsLowerCase,
      hasUpperCase: containsUpperCase,
    }
}


// Function for getting a random element from an array
function getRandom(arr) {
var randomIndex = Math.floor(Math.random()*arr.length);
console.log(arr[randomIndex]);
return arr[randomIndex];

}



// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);