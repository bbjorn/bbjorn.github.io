
let calcDisplay = '0'; 

/** Takes an number input from a button press */ 
function calcInput(number) {
    if (calcDisplay == '0' ) calcDisplay = number;
    else calcDisplay += '' + number;
    document.getElementById("calcOutput").innerHTML = calcDisplay;
}

function calcAdd(){
    if (calcDisplay == '0' );
    else if (calcDisplay.charAt(calcDisplay.length-1)=='+');
    else {
        calcDisplay += '+';
        document.getElementById("calcOutput").innerHTML = calcDisplay;
    }
}

function calcEquals(){

}