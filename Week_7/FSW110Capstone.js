document.getElementById('Submit').addEventListener('click', function(){
    const unorderedList = document.createElement('ul')
    unorderedList.setAttribute(id, 'unorderedList')

    const listItem1 = document.createElement('li')
    listItem1.setAttribute(id, 'listItem1')
    listItem1.textContent = document.getElementsByClassName('BestPlayerResponse')

    const listItem2 = document.createElement('li')
    listItem2.setAttribute(id, 'listItem2')
    listItem2.textContent = document.getElementsByClassName('Question2')
})