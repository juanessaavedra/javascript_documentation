


const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
    
    if (myImg.style.display === "none") {
        myImg.style.display = "block";
        myButton.textContent = "Hide";
    } else {
        myImg.style.display = "none";
        myButton.textContent = "Show";
    }
    
})


//Use display or visibility depending on the project you're creating


const myButton1 = document.getElementById("myButton");
const myImg1 = document.getElementById("myImg");

myButton.addEventListener("click", event => {
    
    if (myImg.style.visibility === "hidden") {
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    } else {
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
    
})

