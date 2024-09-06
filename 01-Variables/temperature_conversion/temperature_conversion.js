/* Explained with temperature conversion program */




const input = document.getElementById("textBox");
const celsius = document.getElementById("toFahrenheit");
const fahrenheit = document.getElementById("toCelsius");
const answer = document.getElementById("myResult");

let temp;

function convert () {

    if (celsius.checked) {
        temp = Number(input.value);
        temp = temp * 9 / 5 +32;
        answer.textContent = temp.toFixed(1) + "F";
    } else if (fahrenheit.checked) {
        temp = Number(input.value);
        temp = (temp-32) * (5/9);
        answer.textContent = temp.toFixed(1) + "C";
    }
    else {
        answer.textContent = "Select a unit"
    }
} 