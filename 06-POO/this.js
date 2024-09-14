/*
Reference to the object where this is used (the object depends on the inmediate context)

person.name = this.name

This doesn’t work with arrow functions
*/

const person1 = {
	name: "Spongebob",
	favFood: "hamburgers",
	sayHello: function() { console.log(`Hi I am ${this.name}`)} //This requires using a refular function or method definition
}

person1.sayHello();

