/*
Creates a new array by filtering out elements
*/


let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);


function isEven(element) {
	return element % 2 == 0;
}

console.log(evenNums);


function isOdd(element) {
	return element % 2 != 0;
}

console.log(oddNums);

const ages = [16,17,18,19,20,60];
let agesAdult = ages.filter(isAdult);
let agesChild = ages.filter(isChild);

function isAdult(element){
	return element >= 18;
}

function isChild (element){
	return element < 18;
}

console.log(agesAdult);
console.log(agesChild);
