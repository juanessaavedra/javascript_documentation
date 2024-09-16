/* A variable like structure that can hold more than 1 value */

let fruits = ["apple", "orange", "banana"];


fruits[3] = "coconut";
console.log(fruits);
console.log(fruits[0]);


fruits.push("coconut");
fruits.pop();
fruits.unshift("mango");
fruits.shift();

let numOfFruits = fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf("apple");
console.log(index);


for(let i = 0; i < fruits.length; i++){
	console.log(fruits[i]);
}

//Reverse:

for (let i = fruits.length - 1; i >= 0; i--){
	console.log(fruits[i]);
}

for (let fruit of fruits){ //For of
	console.log(fruit);
}


fruits.sort();
fruits.sort().reverse();






