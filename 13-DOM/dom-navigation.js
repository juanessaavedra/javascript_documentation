/* 
The process of navigating through the structure of an HTML document using Javascript

.firstElementChild

.lastElementChild

.nextElementSibling

.previousElementSibling

.parentElement

.children
*/


/*  Look dom-nabigation.html:

List of fruits has three children: Apple, orange, banana.

Apple: Firsborn

Orange: Middle child

Banana: Last born
*/

//-------FIRST ELEMENT CHILD AND LAST-------

const element1 = document.getElementById("fruits");
const firstChild = element1.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const lastChild = element1.lastElementChild;
lastChild.style.backgroundColor = "red";

//Use querySelectorAll

const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ulElement) => {
	const firstChild = ulElement.firstElementChild;
	const lastChild = ulElement.lastElementChild; //LAST ELEMENT CHILD
	firstChild.style.backgroundColor = "yellow";
	lastChild.style.backgroundColor = "red";
})


//-------NEXT ELEMENTS SIBLING-------
//The last in line we wouldnt be selecting anything (banana,potatoes,ice cream)

const element2 = document.getElementById("apple");
const nextSibling = element2.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";


const elements = document.getElementById("fruits");
//this gives my unordered list of fruits. Its kinf of like if the list item elements of Apple through Ice cream are all children
//If I select the unordered list of fruits the next sibling would be vegetables


// -------PREVIOUS ELEMENT SIBLING-------: Es lo contrario


//-------PARENT ELEMENT-------
//Whichever element I select will get the parent, the pareint is the element that contains it

const element3 = document.getElementById("apple"); //Parent id= "fruits", id= "vegetables" in the case of carrots,onions,potatoes. etc
const parent = element3.parentElement;
parent.style.backgroundColor = "yellow";

//-------CHILDREN-------
//We can return all of the children of a selected element

const element4 = document.getElementById("fruits");
const children = element4.children;
console.log(children);

children[1].style.backgroundColor = "yellow";

//HTML Collections dont have a built-in for each method 
Array.from(children).forEach(child => {
	child.style.backgroundColor = "yellow";
})