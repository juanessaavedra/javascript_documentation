/* Method used to sort elements of an array in place. Sorts elements as strings
 in lexicographic order, not alphabetical

lexicographic = (alphabet + numbers + symbols) as strings */

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();
console.log(fruits);

let numbers = [1,10,20,2,3,7,4,5,8];
numbers.sort((a,b) => a - b);
numbers.sort((a,b) => b - a);

console.log(numbers);


const people = [{name: "Spongebob", age: 30, gpa: 3.0},
 {name: "Spongebob", age: 30, gpa: 3.0},
  {name: "Patrick", age: 20, gpa: 2.0}, 
  {name: "Squidward", age: 51, gpa: 2.5}]
  
  
people.sort((a,b) => a.age - b.age);

//reverse order
people.sort((a,b) => b.age - a.age); //The same with gpa

//To order string
people.sort((a,b) => a.name.localeCompare(b.name));

//Reverse order
people.sort((a,b) => b.name.localeCompare(a.name));

console.log(people);
