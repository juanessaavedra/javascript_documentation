const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const increase = document.getElementById("increase")
const label = document.getElementById("myLabel")
let counter = 0; 


decrease.onclick = function() {
    counter -= 1
    label.textContent = counter
}

reset.onclick = function() {
    counter = 0
    document.getElementById("myLabel").textContent = counter
}

increase.onclick = function() {
    counter += 1
    label.textContent = counter
}