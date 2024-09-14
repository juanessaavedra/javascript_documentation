/* 
Class = ES6 feature provides a more structured and cleaner way to work with
 objects compared to traditional constructor functions ex. Static keyword, encapsulation,
  inheritance
*/

function Product (name, price) {
	this.name = name;
	this.price = price;
	
	this.displayProduct = function(){
		console.log(`Product: ${this.name}`);
		console.log(`Price: ${this.price}`);
	};
	
	this.calculateTotal = function (salesTax){
		return this.price + (this.price*salesTax);
	}
}


const salesTax = 0.05;

const product1 = new Product ("Shirt", 19.99);
const product2 = new Product ("Pants", 22.50);
const product3 = new Product ("Underwear", 100);

product1.displayProduct();

const totalPrice = product1.calculateTotal(salesTax);

console.log(`Total price (with tax): $${totalPrice.toFixed(2)}`);

