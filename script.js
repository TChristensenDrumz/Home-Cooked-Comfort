$.ajax({
    url: "https://api.edamam.com/search?q=burger&excluded=beef&app_id=706bea3d&app_key=521b931eea0c58e87c8450dd2f78953c",
    method: "GET"
}).then(function(response){
    console.log(response);
});