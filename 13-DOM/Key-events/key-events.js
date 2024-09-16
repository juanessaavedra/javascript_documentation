/*
eventListener = 

events: Keydown, keyUp, keypress (isn’t compatible with all web browsers so you should
 avoid using key press)




document.addEventListener("keydown", event => {
    console.log(`Key down = ${event.key}`);
})

document.addEventListener("keyup", event => {
    console.log(`Key up = ${event.key}`);
})

*/

/* FIRST EXAMPLE:
const myBox = document.getElementById("myBox");


document.addEventListener("keydown", event => {
    myBox.textContent = "Hello1";
    myBox.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", event => {
    myBox.textContent = "Hello1";
    myBox.style.backgroundColor = "lightgreen";
})
*/


const myBox = document.getElementById("myBox");
const moveAmount = 10; //To increase the distance in which this element moves we can increase 
let x = 0;
let y = 0;


document.addEventListener("keydown", event => {
    myBox.textContent = "Wii";
    myBox.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", event => {
    myBox.textContent = "Hello";
    myBox.style.backgroundColor = "lightgreen";
})


document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")) {

        event.preventDefault(); //No importa si se sale del limite de la ventana

        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})

document.addEventListener("keyup", event => {
    myBox.textContent = "Hello1";
    myBox.style.backgroundColor = "lightgreen";
})