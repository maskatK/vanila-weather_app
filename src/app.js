function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function displeyTemperature(response) {
let temperatureElement = document.querySelector(`#temperature`);
let cityElement = document.querySelector(`#city`);
let descriptionElement = document.querySelector(`#discription`);
let humidityElement = document.querySelector(`#humidity`);
let windElement = document.querySelector(`#wind`);
let dateElement = document.querySelector(`#date`);
let iconElement = document.querySelector(`#icon`);

celciusTemperature = response.data.main.temp;

temperatureElement.innerHTML = Math.round(celciusTemperature);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute(
    "alt", response.data.weather[0].description);
}

function search(city) {
    let apiKey="d14a5f9f0440a82a056dfd79e5c778de";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displeyTemperature);
}

function hendleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
    console.log(cityInputElement.value);
}


function showFarengeit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    //remove the actyve class the celcius link
    celciusLink.classList.remove("active");
    farengeitLink.classList.add("active");
    let farengeitTemperature = (celciusTemperature * 9)/5 + 32;
    temperatureElement.innerHTML = Math.round(farengeitTemperature);
}

function showCelcius(event) {
    event.preventDefault();
    celciusLink.classList.add("active");
    farengeitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celciusTemperature);
}

let celciusTemperature = null;

let form = document.querySelector("#serch-form");
form.addEventListener("submit", hendleSubmit);

let farengeitLink = document.querySelector("#farengeit-link");
farengeitLink.addEventListener("click", showFarengeit);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", showCelcius);

search("New York");