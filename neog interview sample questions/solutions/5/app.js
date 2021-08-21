const userInput = document.querySelector(".user-input");
const redBtn = document.getElementById("red");
const greenBtn = document.getElementById("green");
const blueBtn = document.getElementById("blue");


redBtn.addEventListener("click", function(){
    userInput.style.color ="red";
})

greenBtn.addEventListener("click", function(){
    userInput.style.color ="green";
})

blueBtn.addEventListener("click", function(){
    userInput.style.color ="blue";
})

