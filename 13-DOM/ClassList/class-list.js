/* 
Element property in Javascript used to interact with an element’s list of classes (CSS clases) 

Allows you to make reusable classes for many elements across your webpage.

add()

remove()

toggle(remove if present, and if not)

replace (oldClass, newClass)

contains()

The nice thing about using class lists HTML elements have a class list property we can reuse CSS classes amongst many HTML elements
*/



const myButton = document.getElementById("myButton")

myButton.classList.add("enabled"); //Al button le agrega una nueva clase
myButton.classList.remove("enabled"); //Elimina esa clase 


myButton.addEventListener("mouseover", event => {
	event.target.classList.add("hover");
}); //Si quiero agregarle un hover a una clase, lo mismo con .remove()


//Toggle

myButton.addEventListener("mouseover", event => {
	event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
	event.target.classList.toggle("hover");
});

//replace()

myButton.classList.add("enabled");
myButton.addEventListener("click", evenet => {
		
		if(event.target.classList.contains("disabled")){
			event.target.textContent += "Emoji";
		} else {
		event.target.classList.replace("enabled", "disabled"); //New class and old class
}});

const myH1 = document.getElementById("myH1");
myH1. classList.add("enabled"); //Con esto agregamos las propiedades de la clase .enabled a myH1

myH1.addEventListener("click", evenet => {
		
		if(event.target.classList.contains("disabled")){
			event.target.textContent += "Emoji";
		} else {
		event.target.classList.replace("enabled", "disabled"); //New class and old class
}});