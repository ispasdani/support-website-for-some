const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const registerBtn = document.getElementById("register-btn");

let globalUsername;
let globalPassword;

function saveDataToLocalStorage(username, password) {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
}

registerBtn.addEventListener("click", function (e) {
  e.preventDefault();

  globalUsername = usernameInput.value;
  globalPassword = passwordInput.value;

  saveDataToLocalStorage(globalUsername, globalPassword);
  alert("Registered, now you can log in");
  setTimeout(() => {
    location.href = "../../index.html";
  }, 2000);
});
