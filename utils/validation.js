const emailInput = document.getElementById("emailInput");
const btn = document.getElementById("subscribeEmailBtn")

const emailValidationHandler = () =>{
    const inputValue = emailInput.value;
    console.log(inputValue);
}

btn.addEventListener("click" , emailValidationHandler)