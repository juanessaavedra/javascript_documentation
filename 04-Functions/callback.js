/* 
A function that is passed as an argument to another function. Used to handle asynchronous operations: 

1. Reading a file
2. Network requests
3. Interacting with databases
*/

function hello(){}

function goodbye(){}

function wait(){}

function leave(){}

hello(wait);


//Second example

function sum(callback, x,y){
	let result = x+y;
	callback(result);
}

function displayConsole(result){
	console.log(result);
}

sum(displayConsole, 1, 2)

//Calculate the result first then after that process is finished, then display the result to the console



function displayPage (result) {
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 1,2)

/*
By using callbacks we are guaranteeing that the function passed in will execute next you can pass callbacks
 as well as other arguments to a function 
*/

