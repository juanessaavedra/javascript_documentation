/*
Static collection of hTML elements by (id, class, element) can be created by using querySelectorAll()

Similiar to an array, but they dont have a built-in: (map,filter,reduce) 

Nodelist won’t update to automatically reflect changes to the Dom

For example:

If you were to remove an element from the Dom and its within a node list you would also have to separately remove that element from the node list
*/



let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);


//ADD HTML/CSS PROPERTIES
buttons.forEach(element => {
    buttons.style.backgroundColor = "green";
    buttons.textContent += "Emoji";
})

//Click event listener 

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "red";
    })
})

//Mouse over + mouseout event listener
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "green"
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "original color"
    })
})


//ADD element to a node list
const newButton = document.createElement("button"); // STEP 1. Create element

//Step 2
newButton.textContent = "Button 5";
newButton.classList = "myButtons";

//Step 3 = Append this element to the DOM

document.body.appendChild(newButton);

console.log(buttons); //Doesnt work because they wont update automatically to reflect changes to the Dom
//We need to manually add it to our no list 

//To do that: We can just use Query selector again.

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);



// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        console.log(buttons); //Wont update
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})