// Function declaration = define a reusable block of code that performs a specific task
function hello (){
	console.log("Hello");
}

hello();
setTimeout(hello,3000);

//Function expressions = a way to define functions as values or variables

const hello = function() {
	console.log("Hello");
}

hello();

//Pass an entire function as an argument 
setTimeout(function(){console.log("Hello")}, 3000);


const numbers = [1,2,3,4,5,6,7];

const squares = numbers.map(square);
console.log(squares);

function square (element){
	return Math.pow(element,2);
}

//Function expression, then we dont need the name before declare function

//Map()
const squares1 = numbers.map(function(element){return Math.pow(element,2);});
console.log(squares1);

const cube = numbers.map(function(element){return Math.pow(element,3);});
console.log(cube);

//Filter()
const evenNums = numbers.filter(function(element){return element % 2 == 0;});
console.log(evenNums);


const oddNums = numbers.filter(function(element){return element != 2 == 0;});
console.log(oddNums);

//Reduce()
const total = numbers.reduce(function(accumulator, element){return accumulate + element;})
console.log(total);
