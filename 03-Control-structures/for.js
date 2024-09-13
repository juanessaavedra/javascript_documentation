/*
for (let i = 0; i <= 2; i++) {
	console.log(i);
}

for (let i = 0; i <= 10; i=+ 2 ) { //i=-2 ; i--
	console.log(i);
}


//Even and odd


for (let i = 0; i <= 10; i++){
	if(i % 2 != 0){
		continue //Just even
} else if (i == 9) {
	break
}

console.log(i);
		
}
*/

//Number guessing game:

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()* (maxNum - minNum + 1)) + minNum; //El ultimo minNum es para desplazar el rango generado al rango deseado

let attempts = 0;
let guess;
let running = true;

while (running) {
	guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
	guess = Number(guess);
	
	if (IsNan(guess)) {
		window.alert("Please enter a valid number");
}
	else if (guess < minNum || guess > maxNum) {
		window.alert("Please enter a valid number");
}
	else {
		attempts++;
			if (guess < answer) {
			window.alert("TOO LOW TRY AGAIN");
}  else if (guess > answer) {
		window.alert("Too high try again");
} else {
		window.alert(`CORRECT THE ANSWER WAS ${answer}. it took you ${attempts}`);
		running = false;
}
}

}