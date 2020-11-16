// List of constant variables
const apiKey = "fd7b2e9a6b0db1a1e7451e248a96f982";
const weatherCard = $(".weather-card");
const cityDiv = $(".forecast");
const currentDay = moment().format("MM/D/YYYY")
if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeather(lat, lon);
    });
}


// List of variables
const cityNameEl = $(".cityName");
const currentDateEl = $(".currentDate");
const weatherIconEl = $("<img>");
const tempEl = $(".temp");

function getWeather(userLat, userLon) {
    const queryUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${userLat}&lon=${userLon}&APPID=${apiKey}`;
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (weatherData) {
            console.log(weatherData);
            var tempF = Math.round((weatherData.main.temp - 273.15) * 1.80 + 32);

            $(cityNameEl).text(weatherData.name);
            $(currentDateEl).text(currentDay);
            $(tempEl).text(`Temperature: ${tempF} °F`);
            $(weatherIconEl).attr("src", `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
            $(cityNameEl).append(weatherIconEl);
        })
}





