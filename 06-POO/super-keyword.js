/*
Is used in classes to call the constructor or acces the properties and
 methods of a parent

this = this object

super = the parent
*/

class Animal {

	constructor(name, age){
	this.name = name;
		this.age = age;
		}
		
	move(speed){
		console.log(`The ${this.name} moves at a speed of ${speed}km/h`);
	}
		
}


class Rabbit extends Animal {
	constructor (name, age, runSpeed){
		super(name, age);
		//this.name = name;
		//this.age = age;
		this.runSpeed = runSpeed;
		
	} 
	
	run(){
		console.log(`This ${this.name} is running`)
        super.move(this.runSpeed); //Solo puede ir dentro de otro metodo, no por fuera
	}
}


class Fish extends Animal {
	constructor (name, age, swimSpeed){
		super(name, age);
		//this.name = name;
		//this.age = age;
		this.swimSpeed = swimSpeed;
	}
	
	swim(){
		console.log(`This ${this.name} is swimming`)
		super.move(this.swimSpeed);
	}
}


class Hawk extends Animal {
	constructor (name, age, flySpeed){
		super(name, age);
		//this.name = name;
		//this.age = age;
		this.flySpeed = flySpeed;
	}
	
	fly(){
		console.log(`This ${this.name} is flying`)
		super.move(this.flySpeed);
	}
}


const rabbit = new Rabbit("Bugs", 100, 40);
const fish = new Fish("Nemo", 1000, 60);
const hawk = new Hawk("Calva", 10000, 200);


rabbit.run();
fish.swim();
hawk.fly();