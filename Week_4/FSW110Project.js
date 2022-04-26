const header = document.createElement('h1');
document.body.appendChild(header);
header.textContent = "Calculator";


const div1 = document.createElement('div');
document.body.appendChild(div1);
div1.setAttribute('id', 'Divtag1');

const inputBox1 = document.createElement('input');
document.body.appendChild(inputBox1);
inputBox1.setAttribute('id', 'AddBox1'); 
inputBox1.style.cssText = "margin: 20px"
inputBox1.value = Number

const inputBox2 = document.createElement('input');
document.body.appendChild(inputBox2);
inputBox2.setAttribute('id', 'AddBox2');
inputBox2.style.cssText = "margin: 20px";
inputBox2.value = Number;

const outputBox1 = document.createElement('output');
document.body.appendChild(outputBox1);
outputBox1.setAttribute('id', 'OutputBox1');

const addButton = document.createElement('button');
document.body.appendChild(addButton);
addButton.textContent = "Add"

function addition(){
    addButton.addEventListener(onclick)
    inputBox1.value + inputBox2.value;
}

const div2 = document.createElement('div');
document.body.appendChild(div2);
div1.setAttribute('id', 'Divtag2');

const inputBox3 = document.createElement('input');
document.body.appendChild(inputBox3);
inputBox3.setAttribute('id', 'SubBox1');
inputBox3.style.cssText = "margin: 20px"

const inputBox4 = document.createElement('input');
document.body.appendChild(inputBox4);
inputBox4.setAttribute('id', 'SubBox2');
inputBox4.style.cssText = "margin: 20px";

const outputBox2 = document.createElement('output');
document.body.appendChild(outputBox2);
outputBox2.setAttribute('id', 'OutputBox2');


const subButton = document.createElement('button');
document.body.appendChild(subButton);
subButton.textContent = "Subtract"

function subtraction(){
    subButton.addEventListener(onclick)
    return inputBox3.valueAsNumber - inputBox4.valueAsNumber;
}


const div3 = document.createElement('div');
document.body.appendChild(div3);
div3.setAttribute('id', 'Divtag3');

const inputBox5 = document.createElement('input');
document.body.appendChild(inputBox5);
inputBox5.setAttribute('id', 'MultBox1');
inputBox5.style.cssText = "margin: 20px"

const inputBox6 = document.createElement('input');
document.body.appendChild(inputBox6);
inputBox6.setAttribute('id', 'MultBox2');
inputBox6.style.cssText = "margin: 20px";

const outputBox3 = document.createElement('output');
document.body.appendChild(outputBox3);
outputBox3.setAttribute('id', 'OutputBox3');


const MultButton = document.createElement('button');
document.body.appendChild(MultButton);
MultButton.textContent = "Multiply"

function multiplication(){
    MultButton.addEventListener(onclick)
    return inputBox5.valueAsNumber - inputBox6.valueAsNumber;
}


const div4 = document.createElement('div');
document.body.appendChild(div4);
div4.setAttribute('id', 'Divtag4');

const inputBox7 = document.createElement('input');
document.body.appendChild(inputBox7);
inputBox7.setAttribute('id', 'DivBox1');
inputBox7.style.cssText = "margin: 20px"

const inputBox8 = document.createElement('input');
document.body.appendChild(inputBox8);
inputBox8.setAttribute('id', 'DivBox2');
inputBox8.style.cssText = "margin: 20px";

const outputBox4 = document.createElement('output');
document.body.appendChild(outputBox4);
outputBox4.setAttribute('id', 'OutputBox4');


const DivButton = document.createElement('button');
document.body.appendChild(DivButton);
DivButton.textContent = "Divide"


function division(){
    subButton.addEventListener(onclick)
    return inputBox7.valueAsNumber - inputBox8.valueAsNumber;
}


