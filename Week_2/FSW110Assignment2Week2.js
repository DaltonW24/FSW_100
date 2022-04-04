var navBar = document.createElement("nav");
navBar.setAttribute('id', 'navBar1')
document.body.appendChild(navBar);

var aTag1 = document.createElement('a');
aTag1.setAttribute('href', '#')
aTag1.textContent = 'hhh'
document.querySelector('#navBar1').appendChild(aTag1);

var aTag2 = document.createElement('a');
aTag2.setAttribute('href', '#')
aTag2.textContent = 'ggg'
document.querySelector('#navBar1').appendChild(aTag2);

var aTag3 = document.createElement('a');
aTag3.setAttribute('href', '#')
aTag3.textContent = 'iii' 
document.querySelector('#navBar1').appendChild(aTag3);

var newHeader = document.createElement("h1");
newHeader.textContent = "My Webpage";
document.body.append(newHeader);



var newP = document.createElement("p");
newP.textContent = "content"
document.body.appendChild(newP);

var newList = document.createElement('ol');
document.body.appendChild(newList)
newList.setAttribute("id", "list1")

var newListItem1 = document.createElement('li');
newListItem1.textContent = "List Item 1";
document.querySelector('#list1').appendChild(newListItem1)

var newListItem2 = document.createElement('li');
newListItem2.textContent = "List Item 2";
document.querySelector('#list1').appendChild(newListItem2)


var newFooter = document.createElement("footer");
newFooter.textContent = "Footer"
document.body.appendChild(newFooter);
