const userInput = document.getElementById("user-input");
const h1Btn = document.getElementById("h1-heading");
const h2Btn = document.getElementById("h2-heading");
const h3Btn = document.getElementById("h3-heading");
const outputDiv = document.getElementById("show-output");

h1Btn.addEventListener("click", function(){
    outputDiv.innerHTML = `<h1>${userInput.value}</h1>`;
})

h2Btn.addEventListener("click", function(){
    outputDiv.innerHTML = `<h2>${userInput.value}</h2>`;
})

h3Btn.addEventListener("click", function(){
    outputDiv.innerHTML = `<h3>${userInput.value}</h3>`;
})

