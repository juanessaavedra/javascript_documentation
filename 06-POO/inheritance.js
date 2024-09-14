/* 
Allows a new class to inherit properties and methods from an existing class (parent → child)
 helps with code reusability
*/

class Animal {
	alive = true;
	
	eat(){
		console.log(`This ${this.name} is eating`);
	}
	sleep(){
		console.log(`This ${this.name} is sleeping`);
	}
}

class Rabbit extends Animal {
	name = "rabbit";
	
	run(){
		console.log(`This ${this.name} is running`);
	}
}

class Fish extends Animal {
	name = "fish";
	
	swim(){
		console.log(`This ${this.name} is swimming`);
	}
	
}

class Hawk extends Animal {
	name = "hawk";
	
	fly(){
		console.log(`This ${this.name} is flying`);
	}
	
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.alive = false;
rabbit.eat();
rabbit.sleep();
//The same with Fish and Hawk
rabbit.run();
hawk.fly();
fish.swim();
hawk.run(); // Its wrong

