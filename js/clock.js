const nowTimePart =document.querySelector("#clock")

setInterval(myTimer, 1000);

function myTimer() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    nowTimePart.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}





