/*
A function defined inside of another function, the inner function has acces to the variables and scope of the outer function. 

Allow for private variables and state maintenance used frequently in JS frameworks: React, Vue, Angular.

function outer() {

	let message = "Hello"
		
		function inner(){
			console.log(message);
		}
		
		inner(); //We need to call the function here
}

message = "Goodbye";

outer();


//Another example

let count = 0; //Here we dont have any security for that variable

function increment(){
		let count = 0;
		count++;
		console.log(`Count increased to ${count`};
}


increment();
increment();


//Here we go

function createCounter(){
		let count = 0;
		
		function increment(){
			count++;
			console.log(count);
		}
		
		function getCount(){
			return count;
		}
		
		return {increment, getCount};
}

const counter = createCounter();
counter.increment();

counter.count = 0; //We cant acces, we need to create a getFunction

console.log('The current count is ${counter.getCount()}');

*/

/*
We’ve done this outer function its very similar to creating a class we can
 use classes to instantiate objects 

- In this case we used a function to return an object
*/

let score = 0;

function increaseScore(points){
	score += points;
	console.log(`+ ${points} pts`);
}

function decreaseeScore(points){
	score -= points;
	console.log(`- ${points} pts`);
	}
	
function getScore(){
	return score;
}

score = 10000000;  //Problem with this is that we can take our score and set it to anything

increaseScore(5);
decreaseScore(6);
console.log(`The final store is ${getScore()} pts`);

/* For some security let’s enclose of this code within a closure */



function createGame(){

    let score = 0;
    
    function increaseScore(points){
        score += points;
        console.log(`+ ${points} pts`);
    }
    
    function decreaseeScore(points){
        score -= points;
        console.log(`- ${points} pts`);
        }
        
    function getScore(){
        return score;
    }
    
    //At the end we will return an object that has references to these functions 
    
        return {increaseScore, decreaseScore, getScore};
    }
    
    const game = createGame();
    game.increaseScore(5);
    game.decreaseScore(6);
    cosole.log(game.getScore());
    
    


