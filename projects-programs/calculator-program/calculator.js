
const display = document.getElementById("display");

function appendToDisplay(input){ //Input: We were passing in a character when we call this function such as 1+2+3 and evaluates it and gives a result. Its kinf of like its own built-in calculator 
	display.value += input;
}

function clearDisplay(){
	display.value = "";
}

function calculate(){
	try{
		display.value = eval(display.value); //Eval function takes an expression 
	} catch(error){
		display.value = "Error";
	}
}


/*
Warning: Executin Javascript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use eval().
*/