const loginInputForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"       //반복되는것은 대문자로 변수생성해서 사용

function onLoginSubmit(event) {
  event.preventDefault();
  loginInputForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);   //웹어플리케이션에 정보저장 브라우저용 d

  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginInputForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `안녕하세요 ${username}님!!`; //백틱기호를 사용한다 ``
}

loginInputForm.addEventListener("submit", onLoginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
  loginInputForm.classList.remove(HIDDEN_CLASSNAME);
  loginInputForm.addEventListener("submit", onLoginSubmit);
} else  {
  paintGreetings(savedUserName);
}
