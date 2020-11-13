const apiKey = "fd7b2e9a6b0db1a1e7451e248a96f982";
const weatherCard = $("#weather-card");
const cityDiv = $("<div>");
const tempDiv = $("<div>");
const test = "New York"


// Create a current date variable
var today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
var today = mm + '/' + dd + '/' + yyyy;

init();

function init(){
    // Make an API call using test as the city parameter

    // Add the city name, date, and icon to the cityDiv variable

    // Add the current temperature to the tempDiv

    // Append cityDiv and tempDiv to weatherCard
}


// searchBtn.on("click", function(e) {
//     e.preventDefault();
//     if (searchInput.val() === "") {
//         alert("You must enter a city");
//         return;
//     }
//     console.log("clicked button")
//     getWeather(searchInput.val());
// });

// function renderWeatherData(cityName, cityTemp, cityHumidity, cityWindSpeed, cityWeatherIcon, uvVal) {
//     cityNameEl.text(cityName)
//     currentDateEl.text(`(${today})`)
//     tempEl.text(`Temperature: ${cityTemp} °F`);
//     humidityEl.text(`Humidity: ${cityHumidity}%`);
//     windSpeedEl.text(`Wind Speed: ${cityWindSpeed} MPH`);
//     uvIndexEl.text();
//     uvIndexEl.text(`UV Index: ${uvVal}`);
//     weatherIconEl.attr("src", cityWeatherIcon);
// }

// function getWeather(desiredCity) {
//     const queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${desiredCity}&APPID=${apiKey}&units=imperial`;
//     $.ajax({
//         url: queryUrl,
//         method: "GET"
//     })
//     .then(function(weatherData) {
//         const cityObj = {
//             cityName: weatherData.name,
//             cityTemp: weatherData.main.temp,
//             cityHumidity: weatherData.main.humidity,
//             cityWindSpeed: weatherData.wind.speed,
//             cityUVIndex: weatherData.coord,
//             cityWeatherIconName: weatherData.weather[0].icon
//         }
//         const queryUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${cityObj.cityUVIndex.lat}&lon=${cityObj.cityUVIndex.lon}&APPID=${apiKey}&units=imperial`
//         $.ajax({
//         url: queryUrl,
//         method: 'GET'
//     })
//     .then(function(uvData) {
//         if (JSON.parse(localStorage.getItem("searchHistory")) == null) {
//             const searchHistoryArr = [];
//             // Keeps user from adding the same city to the searchHistory array list more than once
//             if (searchHistoryArr.indexOf(cityObj.cityName) === -1) {
//                 searchHistoryArr.push(cityObj.cityName);
//                 // store our array of searches and save 
//                 localStorage.setItem("searchHistory", JSON.stringify(searchHistoryArr));
//                 const renderedWeatherIcon = `https:///openweathermap.org/img/w/${cityObj.cityWeatherIconName}.png`;
//                 renderWeatherData(cityObj.cityName, cityObj.cityTemp, cityObj.cityHumidity, cityObj.cityWindSpeed, renderedWeatherIcon, uvData.value);
//                 renderSearchHistory(cityObj.cityName);
//             }else{
//                 console.log("City already in searchHistory. Not adding to history list")
//                 const renderedWeatherIcon = `https:///openweathermap.org/img/w/${cityObj.cityWeatherIconName}.png`;
//                 renderWeatherData(cityObj.cityName, cityObj.cityTemp, cityObj.cityHumidity, cityObj.cityWindSpeed, renderedWeatherIcon, uvData.value);
//             }
//         }else{
//             const searchHistoryArr = JSON.parse(localStorage.getItem("searchHistory"));
//             // Keeps user from adding the same city to the searchHistory array list more than once
//             if (searchHistoryArr.indexOf(cityObj.cityName) === -1) {
//                 searchHistoryArr.push(cityObj.cityName);
//                 // store our array of searches and save 
//                 localStorage.setItem("searchHistory", JSON.stringify(searchHistoryArr));
//                 const renderedWeatherIcon = `https:///openweathermap.org/img/w/${cityObj.cityWeatherIconName}.png`;
//                 renderWeatherData(cityObj.cityName, cityObj.cityTemp, cityObj.cityHumidity, cityObj.cityWindSpeed, renderedWeatherIcon, uvData.value);
//                 renderSearchHistory(cityObj.cityName);
//             }else{
//                 console.log("City already in searchHistory. Not adding to history list")
//                 const renderedWeatherIcon = `https:///openweathermap.org/img/w/${cityObj.cityWeatherIconName}.png`;
//                 renderWeatherData(cityObj.cityName, cityObj.cityTemp, cityObj.cityHumidity, cityObj.cityWindSpeed, renderedWeatherIcon, uvData.value);
//             }
//         }
//     })

//     });
// }

    //  console.log(navigator)
    //   function getLocation() {
    //     // Make sure browser supports this feature
    //     if (navigator.geolocation) {
    //       // Provide our showPosition() function to getCurrentPosition
    //       navigator.geolocation.getCurrentPosition(showPosition);
    //     } 
    //     else {
    //       alert("Geolocation is not supported by this browser.");
    //     }
    //   }

    //   // This will get called after getCurrentPosition()
    //   function showPosition(position) {
    //     // Grab coordinates from the given object
    //     var lat = position.coords.latitude;
    //     var lon = position.coords.longitude;
    //     console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);

    //     // Call our next function, passing on the coordinates
    //     redirect(lat, lon);
    //   }

    //   function redirect(lat, lon) {
    //     // Compare latitude and longitude values
    //     if (lat >= 30 && lon <= -100) {
    //       // Redirect to a new page
    //       window.location.href = "western.html";
    //     } 
    //     else {
    //       window.location.href = "eastern.html";
    //     }
    //   }

    //   // See if user is on Windows
    //   if (navigator.userAgent.indexOf("Windows") !== -1) {
    //     alert("Welcome, Windows user!");
    //     getLocation();
    //   } 
    //   // Then check for macOS
    //   else if (navigator.userAgent.indexOf("Mac") !== -1) {
    //     alert("Welcome, Mac user!");
    //     getLocation();
    //   }
    //   // I give up
    //   else {
    //     alert("I don't know what you're using...");
    //   }

