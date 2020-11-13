// API Keys
var edamamAppID = "706bea3d";
var edamamAppKey = "521b931eea0c58e87c8450dd2f78953c";

$(document).ready(function(){
       $("#search").on("click", searchRecipe($("#user-input").text()));
})

function searchRecipe(search){
    var params = "";

    if($("#vegetarian").prop("checked") === true){
        params += "&health=vegetarian";
    }
    if($("#vegan").prop("checked") === true){
        params += "&health=vegan";
    }
    if($("#dairy-free").prop("checked") === true){
        params += "&health=dairy-free";
    }
    if($("#gluten-free").prop("checked") === true){
        params += "&health=gluten-free";
    }
    if($("#peanut-free").prop("checked") === true){
        params += "&health=peanut-free";
    }
    if($("#tree-nut-free").prop("checked") === true){
        params += "&health=tree-nut-free";
    }
    if($("#pescatarian").prop("checked") === true){
        params += "&health=pescatarian";
    }
    
    $.ajax({
        url: "https://api.edamam.com/search?q=" + search + params +"&app_id=" + edamamAppID + "&app_key=" + edamamAppKey,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}