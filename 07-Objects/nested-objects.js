/* 
Objects inside of other objects. Allows you to represent more complex
 data structures. Child object is enclosed by a parent object.

 Person{Address{}, ContactInfo{}}


const person = {
	fullName: "Spongebob",
	age: 30,
	isStudent: true,
	hobbies: {"karate", "jellyfishing", "cooking"},
	address:{
		street: "123",
		city: "Bikini Bottom",
		country: "Int.Watter"
	}
}

console.log(person.fullName);
console.log(person.hoobies[2]);
console.log(person.address.street);


for(const property in person.address){
	console.log(person.address[property]);
}

*/

class Person{
	constructor(name, age, ...address){
		this.name = age;
		this.age = age;
		this.address = new Address(...address);
	}
}


class Address {
	constructor(street, city, country){
		this.street = street;
		this.city = city;
		this.country = country;
	}
}


const person1 = new Person("Spongebob", 30, "124 Conch St.",
 "Bikini Bottom",
  "Int. Waters")
  
  
  const person2 = new Person("Patrick", 37, "124 Conch St.",
 "Bikini Bottom",
  "Int. Waters")
  
  console.log(person1.address.street);
  console.log(person1.address.city);