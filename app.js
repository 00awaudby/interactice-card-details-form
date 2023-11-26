let cardNameInput = document.querySelector("#card-name");
let cardNumberInput = document.querySelector("#card-number");

var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let form = document.querySelector("#form");


let nameOnCard = document.querySelector("#name");
let numOnCard = document.querySelector("#account-number");







function length(input){
    if(input.value === ""){
        input.classList.add("red");
        nameOnCard.innerHTML = "Jane Appleseed";
        numOnCard.innerHTML = "0000 0000 0000 0000";

        
    }else{
        input.classList.remove("red");
        input.classList.add("success");

        nameOnCard.innerHTML = cardNameInput.value;
        numOnCard.innerHTML = cardNumberInput.value;
    }
}


form.addEventListener("submit", function(event){
    event.preventDefault()
    length(cardNameInput);
    length(cardNumberInput);
})



