var inputUnit;
var outputUnit;
let resultValue = 0;

// When a number is entered to the input
// Then a unit input must be selected

// Then a unit output must be selected
// On click, the convert button will convert the input value to the output value

$(".input-unit").click(function(){
  inputUnit = $(this).attr("id");
  console.log(inputUnit)
})

$(".output-unit").click(function(){
  outputUnit = $(this).attr("id");
  console.log(outputUnit)
})

$(".convert-btn").click(function(){
 
  console.log("The convert button was clicked.");

  // Define variable for unit input
  var inputValue = JSON.parse(document.getElementById("input-value").value);
  // // // Define variable for unit output
  var outputValue = document.getElementById("output-value")


  // Conversion table
  if (inputUnit == "cups" && outputUnit == "cups") resultValue = inputValue;
  console.log(resultValue);

  if (inputUnit == "cups" && outputUnit == "tbsp") resultValue = inputValue * 16;
  console.log(resultValue)
  if (inputUnit == "cups" && outputUnit == "oz") outputValue = 0.393701;



  // Show output in html text div
  outputValue.innerHTML = resultValue;
  
});





