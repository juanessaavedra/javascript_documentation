/*
Keyword that defines properties or methods that belong to a class itself
 rather tan the objects created from that class (class owns anything static,
  not the objects)

Anything declared as static belongs to the class itself and not any object
 created from that class
*/

class MathUtil {
	static PI = 3.14159; //static property
	
	static getDiameter(radius) { //static method
		return radius*2;
	}
	
	static getCircumference (radius){
		return 2 * this.PI * radius
	}
	
	static getArea (radius) {
		return this.PI * radius * radius;
	}

}

const MathUtil1 = new MathUtil();

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));


//We'll have a mix of regular properties and methods and static properties and methods.

class User {
	static userCount = 0;
	
	constructor (username){
		this.username = username;
		User.usercount++;
	}
	
	sayHello(){
		console.log(`Hello, my username is ${this.username}`);
	}
	
	static getUserCount (){
		console.log(`There are ${User.userCount} users online`);
	}
	
}
        


const user1 = new User("Spongebob");

console.log(user1.username);
console.log(user1.userCount); //undefined because it's static
console.log(User.usercount);
user1.sayHello(); //Object
User.getUserCount(); //Class


