/*
Used to iterate over the elements of an array and apply a specified function (callback) to each element

- array.forEach(callback)
*/

//Youtube
let numbers = [1,2,3,4,5];

numbers.forEach(display);

function display (element) {
	console.log(element);
}

numbers.forEach(display);


function double (element, index, array){
		array[index] = element * 2;
}


numbers.forEach(double);

function triple (element, index, array){
		array[index] = element * 3;
}

numbers.forEach(triple);


function square (element, index, array) {
	array[index] = Math.pow(element, 2); //The cube is with 3
}



//Second example
let fruits = ["apple", "orange", "banana", "coconut"];


function display (element) {
	console.log(element);
}

fruits.forEach(display);


function upperCase (element, index, array) {
	array[index] = element.toUpperCase();
}

fruits.forEach(upperCase);


function capitalize (element, index, array){
	array[index] = element.charAt(0).toUpperCase() + element.slice(1); //element.slice es para concatenar
}





//Documetation
const array = [1, 2, 3, 4, 5];

array.forEach((element) => {
  console.log(element);
});


//For of
const array1 = [1, 2, 3, 4, 5];

for (const element of array1) {
  console.log(element);
}


//for loop
const array2 = [1, 2, 3, 4, 5];

for (let i = 0; i < array2.length; i++) {
  console.log(array2[i]);
}

