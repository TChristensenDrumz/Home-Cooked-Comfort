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
  // Cups converts to selected unit
  if (inputUnit == "cups" && outputUnit == "cups") resultValue = inputValue;
  if (inputUnit == "cups" && outputUnit == "oz") resultValue = inputValue * 8;
  if (inputUnit == "cups" && outputUnit == "mL") resultValue = inputValue * 237;
  if (inputUnit == "cups" && outputUnit == "L") resultValue = inputValue / 4.227;
  if (inputUnit == "cups" && outputUnit == "pt") resultValue = inputValue / 2.402;
  if (inputUnit == "cups" && outputUnit == "qt") resultValue = inputValue / 4;
  if (inputUnit == "cups" && outputUnit == "tbsp") resultValue = inputValue * 16;
  if (inputUnit == "cups" && outputUnit == "tsp") resultValue = inputValue * 48;
  if (inputUnit == "cups" && outputUnit == "g") resultValue = inputValue * 201.6;
  if (inputUnit == "cups" && outputUnit == "kg") resultValue = inputValue * 0.24;
  if (inputUnit == "cups" && outputUnit == "mg") resultValue = inputValue * 236588.2375;

  // Ounces covnerts to selected unit
  if (inputUnit == "oz" && outputUnit == "cups") resultValue = inputValue / 8;
  if (inputUnit == "oz" && outputUnit == "oz") resultValue = inputValue;
  if (inputUnit == "oz" && outputUnit == "mL") resultValue = inputValue * 29.574;
  if (inputUnit == "oz" && outputUnit == "L") resultValue = inputValue / 33.814;
  if (inputUnit == "oz" && outputUnit == "pt") resultValue = inputValue / 19.215;
  if (inputUnit == "oz" && outputUnit == "qt") resultValue = inputValue / 32;
  if (inputUnit == "oz" && outputUnit == "tbsp") resultValue = inputValue * 2;
  if (inputUnit == "oz" && outputUnit == "tsp") resultValue = inputValue * 6;
  if (inputUnit == "oz" && outputUnit == "g") resultValue = inputValue * 28.35;
  if (inputUnit == "oz" && outputUnit == "kg") resultValue = inputValue / 35.274;
  if (inputUnit == "oz" && outputUnit == "mg") resultValue = inputValue * 28350;

  // Milliters converts to selected unit
  if (inputUnit == "mL" && outputUnit == "cups") resultValue = inputValue / 237;
  if (inputUnit == "mL" && outputUnit == "oz") resultValue = inputValue / 29.574;
  if (inputUnit == "mL" && outputUnit == "mL") resultValue = inputValue;
  if (inputUnit == "mL" && outputUnit == "L") resultValue = inputValue / 1000;
  if (inputUnit == "mL" && outputUnit == "pt") resultValue = inputValue / 568;
  if (inputUnit == "mL" && outputUnit == "qt") resultValue = inputValue / 946;
  if (inputUnit == "mL" && outputUnit == "tbsp") resultValue = inputValue / 4.787;
  if (inputUnit == "mL" && outputUnit == "tsp") resultValue = inputValue / 4.929;
  if (inputUnit == "mL" && outputUnit == "g") resultValue = inputValue * 1;
  if (inputUnit == "mL" && outputUnit == "kg") resultValue = inputValue * 0.001;
  if (inputUnit == "mL" && outputUnit == "mg") resultValue = inputValue * 1000 ;

  // Liters converts to selected unit
  if (inputUnit == "L" && outputUnit == "cups") resultValue = inputValue * 4.227;
  if (inputUnit == "L" && outputUnit == "oz") resultValue = inputValue * 33.814;
  if (inputUnit == "L" && outputUnit == "mL") resultValue = inputValue * 1000;
  if (inputUnit == "L" && outputUnit == "L") resultValue = inputValue;
  if (inputUnit == "L" && outputUnit == "pt") resultValue = inputValue * 1.76;
  if (inputUnit == "L" && outputUnit == "qt") resultValue = inputValue * 1.057;
  if (inputUnit == "L" && outputUnit == "tbsp") resultValue = inputValue * 67.628;
  if (inputUnit == "L" && outputUnit == "tsp") resultValue = inputValue * 203;
  if (inputUnit == "L" && outputUnit == "g") resultValue = inputValue * 1000;
  if (inputUnit == "L" && outputUnit == "kg") resultValue = inputValue * 1;
  if (inputUnit == "L" && outputUnit == "mg") resultValue = inputValue * 1000000;

  // Pints converts to selected unit
  if (inputUnit == "pt" && outputUnit == "cups") resultValue = inputValue * 2.402;
  if (inputUnit == "pt" && outputUnit == "oz") resultValue = inputValue * 19.215;
  if (inputUnit == "pt" && outputUnit == "mL") resultValue = inputValue * 568;
  if (inputUnit == "pt" && outputUnit == "L") resultValue = inputValue / 1.76;
  if (inputUnit == "pt" && outputUnit == "pt") resultValue = inputValue;
  if (inputUnit == "pt" && outputUnit == "qt") resultValue = inputValue / 1.665;
  if (inputUnit == "pt" && outputUnit == "tbsp") resultValue = inputValue * 38.43;
  if (inputUnit == "pt" && outputUnit == "tsp") resultValue = inputValue * 96;
  if (inputUnit == "pt" && outputUnit == "g") resultValue = inputValue * 403.2;
  if (inputUnit == "pt" && outputUnit == "kg") resultValue = inputValue * 2.480158;
  if (inputUnit == "pt" && outputUnit == "mg") resultValue = inputValue * 473176.475;

  // Quarts converts to selected unit
  if (inputUnit == "qt" && outputUnit == "cups") resultValue = inputValue * 4;
  if (inputUnit == "qt" && outputUnit == "oz") resultValue = inputValue * 32;
  if (inputUnit == "qt" && outputUnit == "mL") resultValue = inputValue * 946;
  if (inputUnit == "qt" && outputUnit == "L") resultValue = inputValue / 1.057;
  if (inputUnit == "qt" && outputUnit == "pt") resultValue = inputValue * 1;
  if (inputUnit == "qt" && outputUnit == "qt") resultValue = inputValue;
  if (inputUnit == "qt" && outputUnit == "tbsp") resultValue = inputValue * 64;
  if (inputUnit == "qt" && outputUnit == "tsp") resultValue = inputValue * 192;
  if (inputUnit == "qt" && outputUnit == "g") resultValue = inputValue * 946.3529;
  if (inputUnit == "qt" && outputUnit == "kg") resultValue = inputValue * 0.94635;
  if (inputUnit == "qt" && outputUnit == "mg") resultValue = inputValue * 946352.95;

  // Tablespoons converts to selected unit
  if (inputUnit == "tbsp" && outputUnit == "cups") resultValue = inputValue / 16;
  if (inputUnit == "tbsp" && outputUnit == "oz") resultValue = inputValue / 2;
  if (inputUnit == "tbsp" && outputUnit == "mL") resultValue = inputValue * 14.787;
  if (inputUnit == "tbsp" && outputUnit == "L") resultValue = inputValue / 67.628;
  if (inputUnit == "tbsp" && outputUnit == "pt") resultValue = inputValue / 32;
  if (inputUnit == "tbsp" && outputUnit == "qt") resultValue = inputValue / 64;
  if (inputUnit == "tbsp" && outputUnit == "tbsp") resultValue = inputValue;
  if (inputUnit == "tbsp" && outputUnit == "tsp") resultValue = inputValue * 3;
  if (inputUnit == "tbsp" && outputUnit == "g") resultValue = inputValue * 15;
  if (inputUnit == "tbsp" && outputUnit == "kg") resultValue = inputValue * 0.01479;
  if (inputUnit == "tbsp" && outputUnit == "mg") resultValue = inputValue * 1000;

  // Teaspoons converts to selected unit
  if (inputUnit == "tsp" && outputUnit == "cups") resultValue = inputValue / 48;
  if (inputUnit == "tsp" && outputUnit == "oz") resultValue = inputValue / 6;
  if (inputUnit == "tsp" && outputUnit == "mL") resultValue = inputValue * 4.929;
  if (inputUnit == "tsp" && outputUnit == "L") resultValue = inputValue / 203;
  if (inputUnit == "tsp" && outputUnit == "pt") resultValue = inputValue / 115;
  if (inputUnit == "tsp" && outputUnit == "qt") resultValue = inputValue / 192;
  if (inputUnit == "tsp" && outputUnit == "tbsp") resultValue = inputValue / 3;
  if (inputUnit == "tsp" && outputUnit == "tsp") resultValue = inputValue;
  if (inputUnit == "tsp" && outputUnit == "g") resultValue = inputValue * 4.9289;
  if (inputUnit == "tsp" && outputUnit == "kg") resultValue = inputValue * 0.0049289;
  if (inputUnit == "tsp" && outputUnit == "mg") resultValue = inputValue * 4928.921;

  // Grams converts to selected unit
  if (inputUnit == "g" && outputUnit == "cups") resultValue = inputValue * 227;
  if (inputUnit == "g" && outputUnit == "oz") resultValue = inputValue / 28.35;
  if (inputUnit == "g" && outputUnit == "mL") resultValue = inputValue * 1;
  if (inputUnit == "g" && outputUnit == "L") resultValue = inputValue * 0.001;
  if (inputUnit == "g" && outputUnit == "pt") resultValue = inputValue * 0.00248;
  if (inputUnit == "g" && outputUnit == "qt") resultValue = inputValue * 0.0010566;
  if (inputUnit == "g" && outputUnit == "tbsp") resultValue = inputValue * 0.0666;
  if (inputUnit == "g" && outputUnit == "tsp") resultValue = inputValue * 0.24;
  if (inputUnit == "g" && outputUnit == "g") resultValue = inputValue;
  if (inputUnit == "g" && outputUnit == "kg") resultValue = inputValue / 1000;
  if (inputUnit == "g" && outputUnit == "mg") resultValue = inputValue * 1000;

  // Kilograms converts to selected unit
  if (inputUnit == "kg" && outputUnit == "cups") resultValue = inputValue * 4.22675;
  if (inputUnit == "kg" && outputUnit == "oz") resultValue = inputValue * 35.274;
  if (inputUnit == "kg" && outputUnit == "mL") resultValue = inputValue * 1000;
  if (inputUnit == "kg" && outputUnit == "L") resultValue = inputValue * 1;
  if (inputUnit == "kg" && outputUnit == "pt") resultValue = inputValue * 2.48016;
  if (inputUnit == "kg" && outputUnit == "qt") resultValue = inputValue * 1.05668;
  if (inputUnit == "kg" && outputUnit == "tbsp") resultValue = inputValue * 67.628;
  if (inputUnit == "kg" && outputUnit == "tsp") resultValue = inputValue * 202.8841;
  if (inputUnit == "kg" && outputUnit == "g") resultValue = inputValue * 1000;
  if (inputUnit == "kg" && outputUnit == "kg") resultValue = inputValue;
  if (inputUnit == "kg" && outputUnit == "mg") resultValue = inputValue * 1000000;

  // Milligrams converts to selected unit
  if (inputUnit == "mg" && outputUnit == "cups") resultValue = inputValue * 236588.23;
  if (inputUnit == "mg" && outputUnit == "oz") resultValue = inputValue / 28350;
  if (inputUnit == "mg" && outputUnit == "mL") resultValue = inputValue * 1000;
  if (inputUnit == "mg" && outputUnit == "L") resultValue = inputValue * 1000000;
  if (inputUnit == "mg" && outputUnit == "pt") resultValue = inputValue * 0.0000021133;
  if (inputUnit == "mg" && outputUnit == "qt") resultValue = inputValue * 0.0000010566;
  if (inputUnit == "mg" && outputUnit == "tbsp") resultValue = inputValue *  0.000059;
  if (inputUnit == "mg" && outputUnit == "tsp") resultValue = inputValue * 0.0002;
  if (inputUnit == "mg" && outputUnit == "g") resultValue = inputValue / 1000;
  if (inputUnit == "mg" && outputUnit == "kg") resultValue = inputValue * 0.000001;
  if (inputUnit == "mg" && outputUnit == "mg") resultValue = inputValue;

  // Show output in html text div
  outputValue.innerHTML = resultValue;
  console.log(resultValue)
  
});





