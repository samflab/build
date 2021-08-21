const textField = document.getElementById("user-text");
const increaseFont = document.getElementById("plus-font");
const decreaseFont = document.getElementById("minus-font");

increaseFont.addEventListener("click", function(){
    style = window.getComputedStyle(textField, null).getPropertyValue("font-size");
    currentSize = parseFloat(style);
    textField.style.fontSize = (currentSize + 2) + 'px';
})