
let memory = ''; 
let calcDisplay = '0'; 

/** Takes an number input from a button press */ 
function calcInput(number) {
    if (calcDisplay == '0' || calcDisplay == '') calcDisplay = number;
    else calcDisplay += '' + number;
    document.getElementById("calcOutput").innerHTML = memory + calcDisplay;
}

function calcAdd(){
    if (calcDisplay == '0' );
    else {
        if (memory == '') memory = calcDisplay + '+';
        else memory = calcDoMath(memory, calcDisplay, memory.charAt(memory.length-1)) + '+';
        calcDisplay = 0;
        document.getElementById("calcOutput").innerHTML = memory + calcDisplay;
    }
}

function calcEquals(){
    if (memory.length>0){
        calcDisplay = calcDoMath(memory, calcDisplay, memory.charAt(memory.length-1));
        memory = '';
        document.getElementById("calcOutput").innerHTML = memory + calcDisplay;
    }   
}

function calcDoMath(a, b, operator){
    numbA = parseInt(a);
    numbB = parseInt(b);
    if (operator == '+'){
        return numbA + numbB;; 
    }
}