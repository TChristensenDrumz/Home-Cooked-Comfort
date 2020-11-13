// API Keys
var edamamAppID = "706bea3d";
var edamamAppKey = "521b931eea0c58e87c8450dd2f78953c";

$(document).ready(function(){
   
})

function searchRecipe(search){
    var params = "";
    
    $.ajax({
        url: "https://api.edamam.com/search?q=" + search + params +"&app_id=" + edamamAppID + "&app_key=" + edamamAppKey,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}