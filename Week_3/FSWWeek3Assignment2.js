
for (var i = 0; i < 5; i++) {
	var myHeader = document.createElement('h2');
    myHeader.setAttribute("class", ".border");


    myHeader.textContent = "The Headliner";
    document.body.appendChild(myHeader);

    
    myHeader.style.cssText = "font-size: 20px", 
    myHeader.style.cssText = "font-weight: lighter"
    myHeader.style.cssText = "color: cornflowerblue"
}