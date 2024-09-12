

function generatePassword(length, includeLowercase, includeUppercase,includeSymbols) {
    
    const lowercaseChars = "abcedfghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJQLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789";
    const symbolChars = "!@#¢∞¬÷“”≠=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars :  "";

    if(length <= 0) {
        return `Password length must be at least 1`;

    } else if (allowedChars.length === 0) {
        return `At least 1 set of character needs to be selected`;
    }


    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const paswordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword (paswordLength,
     includeLowercase,
     includeUppercase,
     includeNumbers,
     includeSymbols);

console.log(`Generated pasword: ${password}`);