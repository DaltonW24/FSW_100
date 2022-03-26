function randomNumber(){
var min = Number(1)
var max = Number(6)

var firstNumber = Math.floor(Math.random()* max - min + 1)
document.getElementById("number").textContent = firstNumber
}
    randomNumber();
    