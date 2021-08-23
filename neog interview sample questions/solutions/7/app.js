const username = document.getElementById("user-name");
const callApiBtn = document.getElementById("call-api");
var outputDiv = document.getElementById("output");

let url ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
callApiBtn.addEventListener("click", apiCallHandler);

//attaching the username to a text query
function generateUrl(){
    var query = url + "?text="+username.value;
    return query;
}
function errorHandler(e){
    outputDiv.innerHTML ="Error occured:"+ e;
}

function apiCallHandler(){
    var newURL = generateUrl();
    fetch(newURL).then(response=>response.json()).then(json =>{
        outputDiv.innerHTML = json.contents.text;       //response text that we get
    }).catch(errorHandler)
}