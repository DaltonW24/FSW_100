let sentence1 = "Words that are going to be changed and used in different ways "

let sentence2 = "to create new things"

function con(){
    
    console.log(sentence1.concat(sentence2))
}
con();

function where(){
    console.log(sentence1.indexOf('Words'))
    console.log(sentence1.lastIndexOf('are'))
}
where();

function howmany(){
    console.log(sentence1.match('re'));
}
howmany();

function change(){
    console.log(sentence1.replace('used', 'manipulated'))
}
change();

function half(){
    console.log(sentence1.split(1, ""))
}
half();

let arr = ['hair', 'leg', 'arm', 'foot']

function cut(){
    console.log(arr.splice(2,2))
}
cut();

function lower(){
    console.log(sentence1.toLowerCase());
    console.log(sentence2.toUpperCase());
}
lower(); 

function startWhere(){
    console.log(sentence1.substring(2,0))
}
startWhere();
