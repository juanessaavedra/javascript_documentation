/* 
Function in Javascript that allows you to shedule the execution of a function after
 an amount of time (milliseconds)

Times are approximate (varies based on the workload of the Javascript runtime env.)

setTimeout(callback, delay);


function sayHello(){
	window.alert("Hello")
}
setTimeout(sayHello, 3000);



setTimeout(function(){window.alert("Hello")}, 3000);

//Arrow function
setTimeout(() => window.alert("Hello", 3000));


//We can use clearTimeout(timeoutId) to cancel a timeout before it triggers

const timeOutId = setTimeout(() => window.alert("Hello", 3000));

clearTimeout(timeOutId);

*/

let timeoutId;

function startTime(){
	timeoutId = setTimeout(() => window.alert("Hello"), 3000);
	console.log("STARTER");
}

function clearTimer(){
	clearTimeout(timeoutId);
	console.log("CLEARED");
}

