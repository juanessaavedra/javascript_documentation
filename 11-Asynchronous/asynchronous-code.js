/* Synchronous = Executes line by line consecutively in a sequential manner code that waits for an operation to complete */


console.log("Task1");

console.log("Task2");

console.log("Task2");

/* Asynchronous = Allows multiple operations to be performed concurrently without waiting.

Doesn’t block the execution flow and allows the program to continue 

(I/O operations, network requests, fetching data)

Handled with: Callbacks, Promises, Async/Await */


function func1(){ //Is asynchronous
	setTimeout(() => {console.log("Task 1");
										callback()}, 3000); //SetTimeout is one of many asynchronous functions 
}
//By using callbacks that's one way in which we can handle asynchronous code. But we still need to discuss promises a sync 

function func2(){ //But I need this synchronous code to execute after task one is complete
	console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
}

func1(func2);  
