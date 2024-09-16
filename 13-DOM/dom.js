/* 
Document object model

- Object{} that represents the page you se in the web browser
- and provides you with an API to interact with it.
- Web browser constructs the DOM when it loads an HTML document,
- and structures all the elments in a tree-like representation.
- Javascript can acces the DOM to dynamically
- Change the content, structure, and style of a web page

Imagen DOM: https://tecnitium.com/manejo-basico-del-dom-en-javascript/
*/

console.log(document);
//All of the different properties it contains its one gigantic object

document.title = "My website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";


//Other example
const username = "Bro Code";
const wlecomeMsg = document.getElementyById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;