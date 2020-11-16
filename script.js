// API Keys
var giphyAPI = "1wYlfg78tmiBqJ24DjhESi8TjNrP7aUt";

// Code starts here
var giphyImages = $(".giphy-image");

$(document).ready(function(){

    init();

});

// Initializes Home Page
function init(){
    // Generates and appends gifs to the page
    for(let i = 0; i < giphyImages.length; i++){
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/random?tag=food&api_key=" + giphyAPI,
            method: "GET"
        }).then(function(response){
            var imageURL = response.data.images.fixed_height.url;
            var newImage = $("<img>").attr("src", imageURL);
            $(giphyImages[i]).append(newImage);
        });
    }

    // Generates and appends random recipes to the page
    for(let i = 0; i < 5; i++){
        $.ajax({
            url: "https://www.themealdb.com/api/json/v1/1/random.php",
            method: "GET"
        }).then(function(response){
            console.log(response);
            if(response.meals[0].strSource !== ""){
                var newListItem = $("<li>");
                var newATag = $("<a>").attr("href", response.meals[0].strSource).attr("target", "_blank").text("• " + response.meals[0].strMeal);
                $(newListItem).append(newATag);
                $(".pop").append(newListItem);
            }
            else {
                i--;
            }
        })
    }
}