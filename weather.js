// List of constant variables
const apiKey = "fd7b2e9a6b0db1a1e7451e248a96f982";
const weatherCard = $(".weather-card");
const cityDiv = $(".forecast");
const test = "New York"

// List of variables
let cityNameEl = $(".cityName");
let currentDateEl = $(".currentDate");
let weatherIconEl = $(".weatherIcon");
let tempEl = $(".temp");
let searchBtn = $(".searchBtn");
let searchInput = $(".searchInput");

// Run "On Click" function for City, Current Date and Temp
$(searchBtn).on("click", function (e) {
    e.preventDefault();
    if (searchInput.val() === "") {
        alert("You must enter a city");
        return;
    }
    getWeather(searchInput.val());
});

function getWeather(test) {
    let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${test}&APPID=${apiKey}`;
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (weatherData) {

            var tempF = Math.round((weatherData.main.temp - 273.15) * 1.80 + 32);

            $(cityNameEl).text(weatherData.name);
            $(currentDateEl).text(new Date().toLocaleDateString());
            $(tempEl).text(`Temperature: ${tempF} °F`);
            $(weatherIconEl).attr("src", `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);

            $(cityDiv).append(cityNameEl);
            $(cityDiv).append(currentDateEl);
            $(cityDiv).append(tempEl);
            $(cityDiv).append(weatherIconEl);
            $(weatherCard).append(cityDiv);
        })
}





