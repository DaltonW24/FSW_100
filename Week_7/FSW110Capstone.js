document.getElementById('Submit').addEventListener('click', function(e){
e.preventDefault()
    let unorderedList = document.createElement('ul')
    unorderedList.setAttribute('id', 'unorderedList')
    document.body.appendChild(unorderedList)

    let listItem1 = document.createElement('li')
    listItem1.setAttribute('id', 'listItem1')
    listItem1.textContent = document.getElementById('BestPlayerResponse').value
  console.log(document.getElementById('BestPlayerResponse'))

    let listItem2 = document.createElement('li')
    listItem2.setAttribute('id', 'listItem2')

        var radios = document.getElementsByName('radio');
        
        for (var radio of radios){
            if (radio.checked) {
                listItem2.textContent = radio.value
            }
        }
    unorderedList.append(listItem1, listItem2);
    
})

