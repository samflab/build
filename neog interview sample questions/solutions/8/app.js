const username = document.getElementById("username");
const btn = document.getElementById("error");
let outputDiv = document.getElementById("output");

const url ="http://openweathermap.org/";
btn.addEventListener("click", getApiCall);

function getUrl(){
    var query = url + "?app=" + username.value;
    return query;
}
function errorHandler(e){
    outputDiv.innerHTML = "Error occured: "+e;
}
function getApiCall(){
    const newUrl = getUrl();
    fetch(newUrl).then(response=>response.json).then(json =>{
        console.log(json.text);
    }).catch(errorHandler);
}