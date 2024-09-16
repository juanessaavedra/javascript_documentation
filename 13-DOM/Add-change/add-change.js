/* Example 1 <h1>

// STEP 1: Create the element

const newH1 = document.createElement("h1");

// STEP 2: ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!"
newH1.id = "myH1"
newH1.style.color = "red";
newH1.style.textAlign = "center";

// STEP 3: APPEND ELEMENT TO DOM

document.body.append(newH1);
document.body.prepend(newH1);

document.getElementById("box1").append(newH1); //Appending this element to box one it is the last child of box one, si agrego desde el HTML un H1 ira primero, que este que cree
document.getElementById("box2").prependend(newH1); //Para que sea el primero

const box2 = document.getElementById("box2");
//document.body.insertBefore(newElement, currentElement); //newElement is going to be new H1 I created
//Current element is the target we're selecting
//Insert the new H1 element before box2
document.body.insertBefore(newH1, box2); //This H1 element is now between box1 and box2 


//NOW: What if the elemnts dont have ids
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[0]);

// REMOVE HTML ELEMENT

document.body.removeChild(newH1);
document.getElementById("box1").removeChild(newH1);

*/


//STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");


//STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "cocnut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

//STEP 3 APPEND ELEMENT TO DOM
document.body.append(newListItem);
document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").prepend(newListItem);

const orange = document.getElementById("orange");
const banana = document.getElementById("banana");

document.getElementById("fruits").insertBefore(newListItem, orange);
document.getElementById("fruits").insertBefore(newListItem, banana);

//If we dont have id or classes

const fruitsLi = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, fruitsLi[0]);


//REMOVE HTML ELEMENT
document.getElementById("fruits").removeChild(newListItem);
