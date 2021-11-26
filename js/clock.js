const nowTimePart =document.querySelector("#clock")

var today = new Date();

let hours = today.getHours(); // 시
let minutes = today.getMinutes();  // 분
let seconds = today.getSeconds();  // 초

nowTimePart.innerText = `${hours}:${minutes}:${seconds}`;