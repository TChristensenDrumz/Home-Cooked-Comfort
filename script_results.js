// API Keys
var edamamAppID = "706bea3d";
var edamamAppKey = "521b931eea0c58e87c8450dd2f78953c";

$(document).ready(function(){
    $("#search").on("click", searchRecipe);
})

function searchRecipe(){      
    var search = $("#user-input").val();    
    var params = "";

    $("#user-input").val("")

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
        renderRecipes(response);
    })
}

function renderRecipes(response){
    $(".search-results").empty();
    
    var tags = "";
    for(let i = 0; i < response.hits.length; i++){
        var newATag = $("<a>").attr("class", "recipe").attr("href", response.hits[i].recipe.url).attr("target", "_blank").text(response.hits[i].recipe.label);
        var newPTag = $("<p>");
        for(let j = 0; j < response.hits[i].recipe.dietLabels.length; j++){
            if(j === response.hits[i].recipe.dietLabels.length - 1){
                tags = tags + response.hits[i].recipe.dietLabels[j];
            }
            else{
                tags = tags + response.hits[i].recipe.dietLabels[j] + ", ";
            } 
            console.log(tags);
            newPTag.text(tags);
        }
        $(".search-results").append(newATag);
        $(".search-results").append(newPTag);
    }
}
