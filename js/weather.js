const API_KEY = "f4893174290c96768a68bcf4a1825453"

function onGeoOk(position)
{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError()
{
    alert('날씨 정보를 찾을수 없습니다.');
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


