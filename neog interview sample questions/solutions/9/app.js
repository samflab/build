const username = document.getElementById("user");
const apiBtn = document.getElementById("response-btn");
let output = document.getElementById("output");

const url = "https://reqres.in/api/users/23";

function apiCallHandler(){
    fetch(url).then(response => {
        if(response.status === 404){
            output.innerHTML ="User not found";
        }
        if(response.status === 401){
            output.innerHTML ="User not logged in";
        }

    });
}

apiBtn.addEventListener("click", apiCallHandler);