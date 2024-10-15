const API_KEY = "a2279b5e3f98837741bbc1e47a2a9774";

function onGeoOk(position) {
    // console.log("Geolocation success:", position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("location:",lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data=>{
            const weather = document.querySelector(".weather span:first-child");
            const city = document.querySelector(".weather span:last-child");
            
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}𝇋`;
            city.innerText = data.name;
    }); //fetch takes times => add then
}
function onGeoError() {
    alert("can't find where you are. No weather inforamtion for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//(method) Geolocation.getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | null, options?: PositionOptions): void


