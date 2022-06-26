function displeyTemperature(response) {
    console.log(response.data);
let temperatureElement = document.querySelector(`#temperature`);
let cityElement = document.querySelector(`#city`);
let descriptionElement = document.querySelector(`#discription`);
let humidityElement = document.querySelector(`#humidity`);
let windElement = document.querySelector(`#wind`);


temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey="d14a5f9f0440a82a056dfd79e5c778de";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displeyTemperature);