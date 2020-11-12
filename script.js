// API Keys
var giphyAPI = "1wYlfg78tmiBqJ24DjhESi8TjNrP7aUt";

// Code starts here
var giphyImages = $(".giphy-image");
console.log(giphyImages);

$(document).ready(function(){

    init();

});

function init(){
    for(let i = 0; i < giphyImages.length; i++){
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/random?tag=food&api_key=" + giphyAPI,
            method: "GET"
        }).then(function(response){
            console.log(response);
            var imageURL = response.data.images.fixed_height.url;
            console.log(imageURL);
            var newImage = $("<img>").attr("src", imageURL);
            console.log(newImage);
            $(giphyImages[i]).append(newImage);
        });
    }
}