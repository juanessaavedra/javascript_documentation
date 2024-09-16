
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", evenet => {
       event.target.classList.toggle("hover");
    })
});

buttons.forEach(button => {
    button.addEventListener("mouseout", evenet => {
       event.target.classList.toggle("hover");
    })
});

buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")) {
            event.target.textContent += "emoji";
        } else {
        event.target.classList.replace("enabled", "disabled");
}})
})