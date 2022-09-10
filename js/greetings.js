const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const content = document.querySelector(".content");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); 
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  content.classList.remove(HIDDEN_CLASSNAME);
}

//로컬스토리지에 저장된 아이디를 가져온다 
const savedUsername = localStorage.getItem(USERNAME_KEY);
// 로컬스토리지에 아이디가 없다면 if 를 실행
if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
// 로컬스토리지에 아이디가 있다면 else 를 실행
else 
{
  // show the greetings
  paintGreetings(savedUsername);
}
 