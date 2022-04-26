// create a form that has at least 3 inputs and a button. 
//When the button is clicked the inputs should be displayed in an "alert window" using alert() method
//After the alert is closed the inputs shoudl clear out.

const Header = document.createElement('h1');
document.body.appendChild(Header);
Header.textContent = "Assignment 1 Week 5 FSW110";

const Box1 = document.createElement('input');
document.body.appendChild(Box1);
Box1.style.cssText = 'border: solid black 2 px'
Box1.style.cssText = "margin: 20px"
Box1.setAttribute('id', 'Input1');

const Box2 = document.createElement('input')
document.body.appendChild(Box2);
Box2.style.cssText = 'border: solid black 2 px'
Box2.style.cssText = "margin: 20px"
Box2.setAttribute('id', 'Input2');

const Box3 = document.createElement('input')
document.body.appendChild(Box3);
Box3.style.cssText = 'border: solid black 2 px'
Box3.style.cssText = "margin: 20px"
Box3.setAttribute('id', 'Input3');

const buttonP = document.createElement('button');
document.body.appendChild(buttonP);
buttonP.textContent = "Proceed"

buttonP.onclick = function(){
    alert(Box1.value + Box2.value + Box3.value);
    document.getElementById('Input1').value = ""
    document.getElementById('Input2').value = ""
    document.getElementById('Input3').value = ""
}

