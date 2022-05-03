var square = document.createElement('div');
square.className = "squared";
document.body.appendChild(square);
square.style.width = "350px"
square.style.height =  "350px"
square.style.backgroundColor = "white";

    window.addEventListener('load', function(){
        square.style.backgroundColor = "black"
    })
    

    square.addEventListener('mouseover', function(){
        square.style.backgroundColor = "green"
    })
    

    square.addEventListener("mousedown", function(){
        square.style.backgroundColor = "Yellow"
    })

    square.addEventListener("mouseup", function(){
        square.style.backgroundColor ="blue" 
    })
    

    square.addEventListener('dblclick', function(){
        square.style.backgroundColor ="red" 
    })

    window.addEventListener('wheel', function(){
            square.style.backgroundColor = "purple";
    })
