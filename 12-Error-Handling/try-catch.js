/* An object that is created to repreent a problem that occurs.

Occur often with user input or establishing a connection.

try{} = Encloses code that might potentially cause an error

catch{} = Catch and handle any thrown Erros from try{}

finally{} = (optional) Always executes. Used mostly for clean up ex. Close files, close connections, release resources.

try {
	console.log(x);
} catch(error) {
	//console.log(error); I wouldnt recommend using .log rather I would use console.error
	console.error(error); //This will highlight any errors that occur and still handle them, its good for debugging we can clearly see the reference error 
} finally { //Close files, connections or releasing resources
	console.log("This always executes");
}

console.log("You have reached the ened!");

*/


try {
    const dividend = Number(window.prompt("Enter a dividend:")); //This code is considered dangerous (10/0) I'll place it within a try catch 
    const divisor = Number(window.prompt("Enter a divisor:"));
    
    if(divisor == 0){ throw new Error("You cant divide by zero!");
    }
    if(IsNan(dividend) || isNan(divisor)){
        throw new Error("Values must be a number");
    }
    
    const result = dividend/divisor;
    console.log(result);
    } catch (error) {
            console.error(error);
    }
    
    console.log("You have reached the ened!");
    
    

/* In certain situations we can intentionally cause an error I’m going to use an if conditional */