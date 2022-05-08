function proceedForm(){
    document.getElementById('Proceed').addEventListener('click', function(){
        document.getElementById('ListItem1').value = document.getElementById('Name');
        document.getElementById('ListItem2').value = document.getElementById('Date'); 
    })
}
proceedForm();