/* 
Extract values from arrays and objects, then assign them to variables in a convenient way

[ , ] = To perform array destructuring

{} = To perform object destructuring
*/

// EXAMPLE 1: SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);  // 2
console.log(b);  // 1

//EXAMPLE 2: SWAP 2 ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);  // ['white', 'green', 'blue', 'black', 'red']

//EXAMPLE 3: ASSIGN ARRAY ELEMENTS TO VARIABLES
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);    // white
console.log(secondColor);   // green
console.log(thirdColor);    // blue
console.log(extraColors);   // ['black', 'red']

//EXAMPLE 4 : EXTRACT VALUES FROM OBJECTS
const person1 = {
    firstName: "spongebob",
    lastName: "squarepants",
    age: 30,
    job: "Fry cook"
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 30,
};

// Corrección de llaves en la desestructuración de `person1`
// Se reemplazó el corchete de cierre incorrecto `]` por una llave `}`
const { firstName, lastName, age, job } = person1;
console.log(firstName);  // spongebob
console.log(lastName);   // squarepants
console.log(age);        // 30
console.log(job);        // Fry cook

// Corrección de llaves en la desestructuración de `person2` y asignación por defecto
const { firstName: firstName2, lastName: lastName2, age: age2, job: job2 = "Unemployed" } = person2;
console.log(firstName2);  // Patrick
console.log(lastName2);   // Star
console.log(age2);        // 30
console.log(job2);        // Unemployed

//EXAMPLE 5: DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
    console.log(`name: ${firstName}`);
    console.log(`last Name: ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1); 
