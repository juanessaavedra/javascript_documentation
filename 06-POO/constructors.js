/* Special method for defining the properties and methods of objects. */


function Car (make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function (){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

console.log(car1.make); //model,year,color...
car1.drive();

const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");

console.log(car2.model);
cars2.drive();

