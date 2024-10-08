/**  Variable = A container that stores a value. 
 * Behaves as if it were the value it contains.
 * 1. Declaration let x;
 * 2. Assignment  x = 100;
 * 
 * let age = 25;
let price = 10.99;
let gpa = 2.1
let firstName = "Juanes";
let online = true;

// Declaring variables with number values

const gravity = 9.81         // earth gravity  in m/s2
const boilingPoint = 100     // water boiling point, temperature in oC
const PI = 3.14              // geometrical constant

// Variables can also be declaring in one line separated by comma

let name = 'Juanes',     //name of a person
  job = 'teacher', 'developer'
  live = 'Colombia'

console.log(typeof firstName);
console.log(`Juanes is online ${online}`);

 * **/

let fullName = "Juan Esteban";
let age = 22;
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = student;
