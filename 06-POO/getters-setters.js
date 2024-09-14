class Rectangle {
    constructor(width, height) {
        this.width = width;  // Se usa el setter aquí
        this.height = height;  // Se usa el setter aquí
    }

    set width(newWidth) {
        if (newWidth > 0) {  // Verifica que sea mayor que 0
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number.");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {  // Verifica que sea mayor que 0
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number.");
        }
    }

    get width() {
        return `${this._width.toFixed(1)}cm`;  // Uso correcto de template string
    }

    get height() {
        return `${this._height.toFixed(1)}cm`;  // Uso correcto de template string
    }

    get area() {
        return `${(this._width * this._height).toFixed(1)}cm²`;  // Calcula el área
    }
}

// Prueba
const rectangle = new Rectangle(10, 20);  // Cambié los valores iniciales a números positivos

rectangle.width = 5;  // Valor válido
rectangle.height = "pizza";  // Intento de asignar valor no válido

console.log(rectangle.width);   // Imprime el ancho
console.log(rectangle.height);  // Intentará imprimir la altura pero lanzará un error
console.log(rectangle.area);    // Calcula el área


/* SECOND EXAMPLE:

class Person{
	constructor(firstName, lastName, age){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	 
	set firstName(newFirstName){ //The same with lastname and age 
		if (typeof newFirstName === "string" && newFirstName.length > 0){
		this._firstName = newFirstName;
		} else{
			console.error("First name must be a non-empty string"); 
		}
}

	get fullName(){
		return this._firstName + "" + this._lastName;
	}
} 

const person = new Person(420,69,"pzizza"); //Thats bad
console.log(person.firstName);

*/