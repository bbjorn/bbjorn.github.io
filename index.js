
let displayMemory = ''; 
let displayInput = ''; 
let displayOperator = '';

/** Takes an number input from a button press */ 
function calcInput(number) {
    if (displayOperator=='') displayMemory = ''; //If last operation was an equals then overwrite it
    if (displayInput == '0') displayInput = number;
    else if (displayInput == ''){
        displayInput = number;
    }
    else displayInput += '' + number;
    document.getElementById("calcOutput").innerHTML = displayMemory + 'm' + displayOperator + displayInput;
}

/** Sets the operator to addition and in case there already is an active calculation it preforms it */
function calcOperation(operator){
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
    
    document.getElementById("calcOutput").innerHTML = displayMemory + 'm' + displayOperator + displayInput;
}

/** Calculates current active caluation */
function calcEquals(){
    if(displayMemory != '' && displayInput !='' && displayOperator != ''){     //If every slot has input
        displayMemory= calcDoMath(displayMemory, displayInput, displayOperator);   //Memory = math;
        displayOperator = '';                                                      //Clear operator and Input;
        displayInput = '';    
        document.getElementById("calcOutput").innerHTML = displayMemory + 'm' + displayOperator + displayInput;
    }
}


/** This where the math happens */
function calcDoMath(a, b, operator){
    if (a == '') a = 0; 
    else numbA = parseFloat(a);
    if (b == '') b = 0;
    else numbB = parseFloat(b);
    if (operator == '+'){
        return (numbA + numbB).toString(); 
    } else if (operator == '-'){
        return (numbA - numbB).toString(); 
    }
    return NaN;
}