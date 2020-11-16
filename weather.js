const apiKey = "fd7b2e9a6b0db1a1e7451e248a96f982";
const weatherCard = $(".weather-card");
const cityDiv = $(".forecast");
const test = "New York"

let cityNameEl = $(".cityName");
let currentDateEl = $(".currentDate");
let weatherIconEl = $(".weatherIcon");
let tempEl = $(".temp");
let searchBtn = $(".searchBtn");
let searchInput = $(".searchInput");

// var today = new Date();
// const dd = String(today.getDate()).padStart(2, '0');
// const mm = String(today.getMonth() + 1).padStart(2, '0');
// const yyyy = today.getFullYear();
// var today = mm + '/' + dd + '/' + yyyy;

$(searchBtn).on("click", function (e) {
    e.preventDefault();
    if (searchInput.val() === "") {
        alert("You must enter a city");
        return;
    }
    getWeather(searchInput.val());
});


function renderWeatherData() {
    cityNameEl.text(cityName)
    currentDateEl.text('(${today})');
    tempEl.text('Temperature: ${cityTemp} °F');
    weatherIconEl.attr("src", cityWeatherIcon);
}


function getWeather(test) {
    // Make an API call using test as the city parameter
    let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${test}&APPID=${apiKey}`;
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (weatherData) {

            var tempF = Math.round((weatherData.main.temp - 273.15) * 1.80 + 32);

            $(cityNameEl).text(weatherData.name);
            $(currentDateEl).text(new Date().toLocaleString());
            $(tempEl).text(`Temperature: ${tempF} °F`);
            $(weatherIconEl).attr("src", `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);

            $(cityDiv).append(cityNameEl);
            $(cityDiv).append(currentDateEl);
            $(cityDiv).append(tempEl);
            $(cityDiv).append(weatherIconEl);

            $(weatherCard).append(cityDiv);
        })
}





