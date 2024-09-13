/* A section of reusable code. Declare code once, use it whenever you want. Call the function to execute that code
*/

function happyBirthday(){

    console.log("Happy birthday");
    
    }
    
    happyBirthday();
    
    
    
    
    function happyBirthday(username, age){ //Parameters
    
        console.log(`Happy birthday ${username}`);
        console.log(`You are ${age} olds`);
        
        }
        
        happyBirthday("Juan", 23); //Arguments
    
    
    function add(x,y) {
        let result = x+y;
        return result;
    }
    
    function subtract(x,y) {
        return x-y
    }
    
    function multiply (x,y) {
        return x*y;
    }
    
    function divide (x,y) {
        return x/y;
    }
    
    let answer = add(2,3);
    console.log(answer);
    
    console.log(add(2,3));
    
    
    
    function isEven(number) {
        if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
    }
    
    console.log(isEven(12)); //True
    
    //Better form
    function isEven(number) {
        return number % 2 == 0 ? true : false;
    }
    
    console.log(isEven(12));
    
    
    function isValidEmail (email) {
       return  email.includes("@") ? true : false;
    }
    
    console.log(isValidEmail("juanessaavedra@"))