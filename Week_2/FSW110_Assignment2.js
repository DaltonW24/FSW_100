var newH1 = document.createElement('h1');
newH1.textContent = "Welcome to my JS site";
document.body.appendChild(newH1);


var newP1 = document.createElement("p");
newP1.textContent = "All of this was created with Javascript";
document.body.appendChild(newP1);


var newList = document.createElement('ol');
document.body.appendChild(newList)
newList.setAttribute("id", "list1")

var newListItem1 = document.createElement('li');
newListItem1.textContent = "cake";
document.querySelector('#list1').appendChild(newListItem1)

var newListItem2 = document.createElement('li');
newListItem2.textContent = "Spaghetti";
document.querySelector('#list1').appendChild(newListItem2)

var newListItem3 = document.createElement("li");
newListItem3.textContent = "Meatballs";
document.querySelector('#list1').appendChild(newListItem3)