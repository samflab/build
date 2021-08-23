const pwd = document.getElementById("password");
const checkBtn = document.getElementById("check-btn");
let output = document.getElementById("output");

checkBtn.addEventListener("click", function () {
  console.log(pwd.value.length);
  if (pwd.value.length <= 10) {
    output.innerHTML = "Error! Password too short";
  } else output.innerHTML = "Success";
});
