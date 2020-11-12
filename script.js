// API Keys
var giphyAPI = "1wYlfg78tmiBqJ24DjhESi8TjNrP7aUt";
var edamamAppID = "706bea3d";
var edamamAppKey = "521b931eea0c58e87c8450dd2f78953c";

// Code starts here
var giphyImages = $(".giphy-image");

$(document).ready(function(){

    init();

});

// Initializes Home Page
function init(){
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
}