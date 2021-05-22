function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  let currentTemp = Math.round(response.data.main.temp);
  let currentDisplay = document.querySelector("#currentTemp");
  currentDisplay.innerHTML = `${currentTemp}°C`;

  document.querySelector("#current-description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "1806a48b296e4a40d5daccd7ac7f9f95";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function formSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "1806a48b296e4a40d5daccd7ac7f9f95";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", formSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let currentTime = new Date();
let currentDayandTime = document.querySelector(".current-date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hours = currentTime.getHours();

let minutes = currentTime.getMinutes();

let currentDay = days[currentTime.getDay()];
currentDayandTime.innerHTML = `${currentDay} ${hours}:${minutes}`;
