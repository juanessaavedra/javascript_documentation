/* Allow a function work with a variable number of arguments by bundling them into an array

Spread = expands an array into separate elements

Rest = Bundles separate elements into an array → Do opposite of spread operator */

function openFridge(...foods){
	console.log(foods);
}

const food1 = "pizza";
const food2 = "hamburguer";
const food3 = "hotdog";
const food4 = "french";

openFridge(food1, foo2, food3, food4);

//Can combine rest parameters and the spread operator such as:
function openFridge(...foods){
	console.log(...foods); //Spread operator
}



function sum(...numbers){
	let result = 0;
for (let number of numbers) {
	result += number;
}
return result;
}

const total = sum (1,2,3,4,5);
console.log(`Your total is ${total}`);


//Get avergae

function getAverage(...numbers){
	let result = 0;
for (let number of numbers) {
	result += number;
}
return result / numbers.length;
}

const total1 = getAverage(75,100,85,90,50);
console.log(total1);


//Combine string
function combineStrings(...strings){
	return strings.join(" ");
}

const fullName =combineString("Mr", "Spongebob", "Squarepants");
console.log(fullName);

