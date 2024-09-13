let userName = "Juanes";
console.log(userName.charAt(0));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));
console.log(userName.length);

userNameWithoutSpaces = userName.trim();
console.log(userNameWithoutSpaces);

console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

userNameRepeat = userName.repeat(3);
console.log(userNameRepeat);

userStartsWith = userName.startsWith("J");
console.log(userStartsWith);

userName.endsWith("");

let includeSpace = userName.includes("");

if (includeSpace) {
	console.log(`Your username cant include " "`)
} else {
	console.log(userName);
}



//Replace All
let phoneNumber = "123-456-789";
phoneNumber = phoneNumber.replaceAll("-", "/");

console.log(phoneNumber);


//padStart
let phoneNumber1 = "123-456-789";
phoneNumber1 = phoneNumber1.padStart(15,"0");

console.log(phoneNumber1);

