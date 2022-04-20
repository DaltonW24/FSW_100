document.body.style.backgroundColor = "lightBlue"


var calcHead = document.createElement('h1');
calcHead.textContent = "The Calculator";
document.body.appendChild(calcHead);
calcHead.style.color = "navy";

var inputBox1 = document.createElement('input');
inputBox1.setAttribute("Input1")
inputBox1.style.border = "solid black 2px";
inputBox1.style.backgroundColor ="blue"
inputBox1.style.color = "White"
inputBox1.valueAsNumber
document.body.appendChild(inputBox1);
inputBox1.style.display ="block";
inputBox1.style.margin="20px";

var inputBox2 = document.createElement('input');
inputBox2.style.border = "solid black 2px";
inputBox2.style.backgroundColor ="green"
inputBox2.style.color = "White"
inputBox2.textContent ="content2";
inputBox2.valueAsNumber
document.body.appendChild(inputBox2);
inputBox2.style.display ="block";
inputBox2.style.margin="20px";
inputBox2.setAttribute("Input2")


var addButton = document.createElement('button');
addButton.textContent = "Add"
document.body.appendChild(addButton);
addButton.style.marginInline = '10px';
addButton.setAttribute("Add")
addButton.onclick(action);

var subButton = document.createElement('button');
subButton.textContent = "Subtract";
document.body.appendChild(subButton);
subButton.style.marginInline = '10px';
subButton.setAttribute("Subtract")
subButton.onclick(action)

var divButton = document.createElement('button');
divButton.textContent = "Divide";
document.body.appendChild(divButton);
divButton.style.marginInline = '10px';
divButton.setAttribute("Divide")
divButton.onclick(action)

var multButton = document.createElement('button');
multButton.textContent = "Multiply";
document.body.appendChild(multButton);
multButton.style.marginInline = '10px';
multButton.setAttribute("Multiply")
multButton.onclick(action);

var outputBox = document.createElement('output');
outputBox.style.border = "solid black 2px";
outputBox.style.backgroundColor = "White"
outputBox.valueAsNumber
document.body.appendChild(outputBox);
outputBox.style.display = "block";
outputBox.style.margin = "20px";
outputBox.style.padding = "10px"
outputBox.setAttribute("Output")
outputBox.actions.valueAsNumber

function actions(addButton, subButton, multButton, divButton){
    if(addButton){
        return ('Input1' + 'Input2');
    }
        else if(subButton){
            return inputBox1 - inputBox2;
        }
            else if (multButton){
                return inputBox1 * inputBox2;
            }
                else if (divButton){
                    return inputBox1 / inputBox2;
                }
                    else{
                        outputBox("You have chosen an unacceptable option, somehow, try again.")
                    }
}
