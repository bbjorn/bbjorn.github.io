
let calcDisplay = 0; 

/** Takes an number input from a button press */ 
function calcInput(number) {
    if (calcDisplay == 0 ) calcDisplay = number;
    else calcDisplay += '' + number;
    document.getElementById("calcOutput").innerHTML = calcDisplay;
  }