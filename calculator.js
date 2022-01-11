
let displayMemory = ''; 
let displayInput = ''; 
let displayOperator = '';
let isInteger = true; 

/**
 * Adds a number to the display.
 * @param {Input number} number 
 */
function calcInput(number) {
    if (displayOperator=='') displayMemory = ''; //If last operation was an equals then overwrite it
    if (displayInput == '0') displayInput = number;
    else if (displayInput == ''){
        displayInput = number;
    }
    else displayInput +=  number;
    document.getElementById("calcOutput").innerHTML = displayMemory + displayOperator + displayInput;
}

/** Adds a decimal point */
function calcDecimal(){
    if (isInteger){ //Make sure we cannot add more than one decimal point
        if (displayOperator=='') displayMemory = ''; //If last operation was an equals then overwrite it
        if (displayInput == ''){
            displayInput = '0.';
        }
        else {
            displayInput += '.';
        }
        isInteger = false; 
        document.getElementById("calcOutput").innerHTML = displayMemory + displayOperator + displayInput;
    }
}
/**
 * Selects what type of operation is going to be preformed. 
 * @param {The type of operator that is going to be preformed} operator 
 */
 function calcOperation(operator){
    if (displayMemory != NaN && displayMemory != null){
        if (displayMemory != '' && displayOperator == '' && displayInput == ''){    //Last operation was equals
            displayOperator = operator;                                                 //Set operator to + 
        } else if (displayOperator == ''){                                          //No operation exists yet
            displayMemory = displayInput;                                               //Move current value to memory
            displayOperator = operator;                                                 //Set operator to + 
            displayInput = '';                                                          //Clear current input  
        } else if (displayOperator != '' && displayInput == ''){                    //if there exists an operation, but no value has been added to it
            displayOperator = operator;                                                 //Switch operation to + and do nothing else. 
        } else {                                                                    //There is a calculation in progress
            displayMemory = calcDoMath(displayMemory, displayInput, displayOperator);   //Then calculate it
            displayOperator = operator;                                                 //Set operator to +
            displayInput = '';                                                          //Empty input.
        }
        isInteger = true;
        document.getElementById("calcOutput").innerHTML = displayMemory + displayOperator + displayInput;
    }   
}

/** Calculates current active caluation */
function calcEquals(){
    if (displayMemory != '' && displayOperator != '' && displayInput != ''){
        displayMemory = calcDoMath(displayMemory, displayInput, displayOperator);       // Do the math!                                   
        displayOperator = '';                                                           //Clear operator and Input;
        displayInput = '';  
        isInteger = true;   
        document.getElementById("calcOutput").innerHTML = displayMemory + displayOperator + displayInput;
        
    }    
}


/** This where the math happens */
function calcDoMath(a, b, operator){
    if (a == '') a = '0'; 
    else numbA = parseFloat(a);
    if (b == '') b = '0';
    else numbB = parseFloat(b);
    if (operator == '+'){
        return (numbA + numbB).toString(); 
    } else if (operator == '-'){
        return (numbA - numbB).toString(); 
    } else if (operator == '*'){
        if (numbB == 0) return '0'; 
        return (numbA * numbB).toString(); 
    } else if (operator == '÷'){
        if (numbB == 0) return null; 
        return (numbA / numbB).toString(); 
    }
    return null;
}