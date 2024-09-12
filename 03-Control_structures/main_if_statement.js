

const suscribe = document.getElementById("myCheckbox");
const visa = document.getElementById("visaBtn");
const paypal = document.getElementById("paypalBtn");
const mastercard = document.getElementById("masterBtn");
const submit = document.getElementById("submitBtn");
let subText = document.getElementById("subText");
let paymentText = document.getElementById("paymentText");

submit.onclick = function() {
    if(suscribe.checked){
        subText.textContent = `You are suscribed`
    } else {
        subText.textContent = `You are NOT suscribed `
    }
    
    if (visa.checked){
        paymentText.textContent = `You're paying with visa`
    } else if(paypal.checked) {
        paymentText.textContent = `You're paying with paypal`
    }
    else if (mastercard.checked) {
        paymentText.textContent = `You're paying with master`
    }
    else {
        paymentText.textContent = `You must select a payment type`
    }

}