// create a form that has at least 3 inputs and a button. 
//When the button is clicked the inputs should be displayed in an "alert window" using alert() method
//After the alert is closed the inputs shoudl clear out.



const buttonP = document.createElement('button');
document.body.appendChild(buttonP);
buttonP.textContent = "Proceed"
buttonP.style.cssText = "margin:10px"

buttonP.onclick = function(){
    alert(Box1.value + Box2.value + Box3.value);
    document.getElementById('Input1').value = "  "
    document.getElementById('Input2').value = "  "
    document.getElementById('Input3').value = "  "
}

