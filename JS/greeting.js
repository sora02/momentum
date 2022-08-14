const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

function handleLoginButton(event){
  event.preventDefault();
  const userValue = loginInput.value;
  localStorage.setItem("username", userValue);
  loginForm.classList.add("hidden");
  paintGreeting(userValue);
}

function paintGreeting(userValue){
  greeting.innerText = `Hello ${userValue}`;
  greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", handleLoginButton);

const savedusername = localStorage.getItem("username");

if (savedusername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", handleLoginButton);
} else {
  paintGreeting(savedusername);
}