/* 
EventListener = Listen for specific events to create interactive web pages.

Events: click, mouseover, mouseout

.addEventListener(event, callback);

Event: Type of event
*/


//Normal function
const myBox = document.getElementById("myBox");


function changeColor(event) {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "OUCH";
}


myBox.addEventListener("click", changeColor);

//Anonymous function
myBox.addEventListener("click", function(event){
    event.target.style.backgroundColor = "red";
    event.target.textContent = "OUCH";
});


//Arrow function, If I have only one parameter I dont need parhentesis
myBox.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "OUCH";
});



//Mouse over -> When you have your cursor over something
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it";
})

//Mouse out, retires the cursor of the box
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click me";
})

//Now with HTML Tag <button> I dont need event.target