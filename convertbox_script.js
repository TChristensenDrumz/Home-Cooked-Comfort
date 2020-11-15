var inputUnit;

// When a number is entered to the input
// Then a unit input must be selected

// Then a unit output must be selected
// On click, the convert button will convert the input value to the output value

$(".input-unit").click(function(){
  inputUnit = $(this).attr("id");
  console.log(inputUnit)
})


$(".convert-btn").click(function(){
 
  console.log("The convert button was clicked.");

  // Define variable for unit input
  var input = JSON.parse(document.getElementById("input-value").value);
  // // // Define variable for unit output
  var output = $(".output").value;
  console.log(input);

  
});





