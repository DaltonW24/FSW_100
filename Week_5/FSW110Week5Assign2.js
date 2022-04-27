

const Header = document.createElement('h1');
document.body.appendChild(Header);
Header.textContent = "FSW110 Assignment2"

// using forms collect First Name, Last Name, Age, A question that has a yes or no answer(Radio Buttons) A question with a single response, but multiple options.
// Ex How likely are you to reccomend this product? Very Likely, Not likely Somewhat Likely.
// A question with multiple answers, such as a allergy sheet,

const form1 = document.createElement('form');
document.body.appendChild(form1);
form1.setAttribute('id', 'FORM');

const FirstName = document.createElement('input');
document.body.appendChild(FirstName);
FirstName.style.cssText = "border: solid black 2px"
FirstName.setAttribute('Placeholder', 'First Name')
FirstName.style.cssText = 'Margin: 20px'

const secondName = document.createElement('input');
document.body.appendChild(secondName);
secondName.style.cssText = "border: solid black 2px";
secondName.setAttribute('Placeholder', 'Last Name');
secondName.style.cssText = 'Margin: 20px'

const Age = document.createElement('input');
document.body.appendChild(Age);
Age.style.cssText = "border: solid black 2px";
Age.setAttribute('Placeholder', 'Age');
Age.style.cssText = 'Margin: 20px'

const radioQuestion = document.createElement('p');
document.body.appendChild(radioQuestion);
radioQuestion.textContent = "Is this form easy to fill out?"
radioQuestion.setAttribute('id', 'question1')


const RadioQ1 = document.createElement('input');
RadioQ1.setAttribute('type', 'radio');
document.body.appendChild(RadioQ1);
RadioQ1.setAttribute('value', 'Easy')
RadioQ1.textContent = "Yes"

const none = document.createElement('br');
document.body.appendChild(none);

const RadioQ2 = document.createElement('input');
RadioQ2.setAttribute('type', 'radio');
document.body.appendChild(RadioQ2);
RadioQ2.setAttribute('value', 'hard')
RadioQ2.textContent = "No"

const none2 = document.createElement('br');
document.body.appendChild(none2);

const radioQuestion2 = document.createElement('p');
radioQuestion2.setAttribute('id', 'question2');
document.body.appendChild(radioQuestion2);
radioQuestion2.textContent = "How would you rate the difficulty of this form";

const RadioQ3 = document.createElement('input');
RadioQ3.setAttribute('type', 'radio');
document.body.appendChild(RadioQ3);
RadioQ3.setAttribute('value', 'not difficult')
RadioQ3.textContent = "Not difficult";

const none3 = document.createElement('br');
document.body.appendChild(none3);

const RadioQ4 = document.createElement('input');
RadioQ4.setAttribute('type', 'radio');
document.body.appendChild(RadioQ4);
RadioQ4.setAttribute('value', 'Somewhat Difficult')
RadioQ4.textContent = "Somewhat difficult";

const none4 = document.createElement('br');
document.body.appendChild(none4);

const RadioQ5 = document.createElement('input');
RadioQ5.setAttribute('type', 'radio');
document.body.appendChild(RadioQ5);
RadioQ5.setAttribute('value', 'Very difficult')
RadioQ5.textContent = "Very difficult"

const none5 = document.createElement('br');
document.body.appendChild(none5);

const checkBoxQuestion = document.createElement('p')
document.body.appendChild(checkBoxQuestion);
checkBoxQuestion.textContent = 'Please check all that apply to you.';


const checkBoxOption1 = document.createElement('input');
document.body.appendChild(checkBoxOption1);
checkBoxOption1.setAttribute('type', 'checkbox')
checkBoxOption1.setAttribute('value', 'Any type of Seafood');

const none6 = document.createElement('br');
document.body.appendChild(none6);


const checkBoxOption2 = document.createElement('input');
document.body.appendChild(checkBoxOption2);
checkBoxOption2.setAttribute('type', 'checkbox');
checkBoxOption2.setAttribute('value', 'Nuts of any type');

const none7 = document.createElement('br');
document.body.appendChild(none7);

const checkBoxOption3 = document.createElement('input');
document.body.appendChild(checkBoxOption3);
checkBoxOption3.setAttribute('type', 'checkbox');
checkBoxOption3.setAttribute('value', 'Fruit of any type');

const none8 = document.createElement('br');
document.body.appendChild(none8);

const checkBoxOption4 = document.createElement('input');
document.body.appendChild(checkBoxOption4);
checkBoxOption4.setAttribute('type', 'checkbox');
checkBoxOption4.setAttribute('value', 'Other')