/* 
Methods used to target and manipulate HTML elements.

They allow you to select one or multiple HTML elements from the DOM

1. Document.getElementyById  // ELEMENT OR NULL
2. Document.getElementsClassName() // HTML collection
3. Document.getElementsByTagName() // HTML COLLECTION → Etiquetas
4. Document.querySelector() // ELEMENT OR NULL
5. Document.querySelectorAll() // NODELIST
*/


const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "yello";
fruits[1].style.backgroundColor = "red";

for (let fruit of fruits){
	fruit.style.backgroundColor = "yellow";
}


//HTML collection dont have a for each method.
//What we could do is typ cast our HTML collection as an array

fruits.forEach();

Array.from(fruits).forEach( fruit => {
	fruit.style.backgroundColor = "yello";
});


//By Tag
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "yellow";

for(let h4Element of h4Elements){
	h4Element.style.backgroundColor = "yellow";
}

//With for each
Array.from(h4Elements).forEach( h4Element => {
	h4Element.style.backgroundColor = "yellow";
})



//Query selector
const element = document.querySelector("h4"); //Return the first element founded 
element.style.backgroundColor = "yellow";

console.log(element);


//Query selector all
const fruits = document.querySelectorAll("li");
fruits[0].style.bacgroundColor = "yellow";


//Node lists do have a built-in for each method 
fruits.forEach(fruit => {fruit.style.backgroundColor = "yellow";
})