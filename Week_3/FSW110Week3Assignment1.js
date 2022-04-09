var newHeader = document.createElement('h1');
newHeader.textContent = "Hello World";
document.body.appendChild(newHeader);

newHeader.style.color = "red";
newHeader.style.font = 'georgia';

var namesList = ['steve', 'larry', 'joe','shirley', 'steph', 'nate', 'rick', 'emily'];
var newList = document.getElementById('namesList')

for (var i = 0; i < namesList.length; i++) {
	
	var personName = document.createElement('li')
	personName.textContent = namesList[i]
	newList.append(personName);

//const names = [“steve”, “larry”, “joe”, “shirley”, “steph”, “nate”, “rick”, “emily”];
