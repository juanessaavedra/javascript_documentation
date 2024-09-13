/*
Reduce the elements of an array to a single value.

This is particularly useful for operations like summing an array, flattening an array of arrays,
 or transforming data structures.
*/


const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`${total.toFixed(2)}`);

function sum (accumulator, element){ //Accumulator is the previous element and element is the next element
	return accumulator + element;
}

//Like this:

function sum (prev, next) {
	return prev + next;
}

//Second example:
const grades = [75, 50, 90, 80,65];
const maximum = grades.reduce(getMax);

function getMax(accumulator, element){
	return Math.max(accumulator, element);
}

console.log(maximum);

