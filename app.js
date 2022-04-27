const username = "group3";
const password = "bestteamever";

let usernameFromRegister = localStorage.getItem("username");
let passwordFromRegister = localStorage.getItem("password");

const loginBtn = document.getElementById("login-btn");
const usernameFromInput = document.getElementById("username-input");
const passwordFromInput = document.getElementById("password-input");
const registerBtn = document.getElementById("register-btn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    usernameFromInput.value.toLowerCase() == username ||
    usernameFromInput.value.toLowerCase() == usernameFromRegister ||
    passwordFromInput.value.toLowerCase() == password ||
    passwordFromInput.value.toLowerCase() == passwordFromRegister
  ) {
    location.href = "./pages/homePage/home.html";
  } else {
    alert("Wrong login data! Try again");
  }
});

registerBtn.addEventListener("click", function () {
  location.href = "./pages/registerPage/register.html";
});
