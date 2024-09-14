
/* 
A collection of related properties and/or methods can represent
 real world objects (people, products, places) 

object = {key: value, function()}
*/

const person1 = {
	firstName: "Spongebob",
	age: 30,
	isEmployed: true,
	sayHello: function(){console.log("Hi! Im Spongebob")},
	//sayBye: ...
}

const person2 = {
	//The same properties
	sayHello: () => console.log("Hey Im patrick"),
	sayBye: function () {console.log("Bye..")}
};


console.log(person1.firstName);
person1.sayHello();