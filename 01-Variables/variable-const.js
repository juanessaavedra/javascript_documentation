// A variable that cant be changed

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = Number(document.getElementById("myText").value);
    circumference = 2 * PI * radius
    document.getElementById("myH3").textContent = `The value is ${circumference}` + "cm";
}

