var inputUnit;
var outputUnit;
let resultValue = 0;



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
  if (inputUnit == "cups" && outputUnit == "oz") resultValue = inputValue * 8;



  // Show output in html text div
  outputValue.innerHTML = resultValue;
  
});





