const API_KEY = //설정하기

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lag = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lag}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerHTML = `<b>지역: ${data.name}<br></b>`;
        weather.innerHTML = `<b>오늘의 날씨 : ${data.weather[0].main} <br> 온도 : ${data.main.temp}</b>`;
    }));
}
function onGeoError() {
    alert("위치를 찾을수 없습니다.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


