/* 
A concise way to write function expressions good for simple functions that you
 use only once (parameters) ⇒ some code
*/

function hello(){console.log("Hello");}
hello();

const hello = function (){console.log("Hello");}

const hello = (name, age) => {
console.log(`Hello ${name}`);
console.log(`You are ${age} years old`);
};

hello("Juan", 22 );


//Differences setTimeOut

setTimeout(hello, 3000);

function hello(){
	console.log("Hello");
}

setTimeout(function() {console.log("Hello");}, 3000);

//Now with arrow function
setTimeout((parameters) => console.log("Hello") , 3000);


//Arrow functions with map,filter and reduce

const numbers = [1,2,3,4,5,6];
const squares = numbers.map((element) => Math.pow(element,2));
const evenNums = numbers.filter((element) => {return element % 2 == 0});
const oddNums = numbers.filter((element) =>  element % 2 != 0); //We dont need a return statement if we have only one line of code
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(odd);
console.log(total);


