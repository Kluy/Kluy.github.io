/**
 * Created by TERM2 on 13.01.2017.
 */

var body = document.querySelector('body');
body.style.backgroundColor = 'gray';
body.style.padding = '50px';

var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.style.backgroundColor = 'white';
wrapper.style.border = '1px solid #000';
wrapper.style.padding = '10px 100px';
wrapper.style.width = '700px';
body.appendChild(wrapper);

var header = document.createElement('header');
header.innerHTML = 'Test';
header.style.textAlign = 'center';
body = document.querySelector('wrapper');
wrapper.appendChild(header);

var form = document.createElement('form');
form.classList.add('form');
wrapper.appendChild(form);

var question_1 = document.createElement('div');
question_1.innerHTML = '1. Question №1';
question_1.classList.add('question');

var question_2 = document.createElement('div');
question_2.innerHTML = '2. Question №2';
question_2.classList.add('question');

var question_3 = document.createElement('div');
question_3.innerHTML = '3. Question №3';
question_3.classList.add('question');

var paragraph_1 = document.createElement('p');
paragraph_1.classList.add('paragraph_1');

var paragraph_2 = document.createElement('p');
paragraph_2.classList.add('paragraph_2');

var paragraph_3 = document.createElement('p');
paragraph_3.classList.add('paragraph_3');

var paragraph_4 = document.createElement('p');
paragraph_3.classList.add('paragraph_3');

var paragraph_5 = document.createElement('p');
paragraph_3.classList.add('paragraph_3');

var paragraph_6 = document.createElement('p');
paragraph_3.classList.add('paragraph_3');

var paragraph_7 = document.createElement('p');
paragraph_3.classList.add('paragraph_3');

var paragraph_8 = document.createElement('p');
paragraph_3.classList.add('paragraph_3');

var paragraph_9 = document.createElement('p');
paragraph_3.classList.add('paragraph_3');

var answer_1 = document.createElement('label');
answer_1.classList.add('answer');
answer_1.innerHTML = 'Answer №1';

var answer_2 = document.createElement('label');
answer_2.classList.add('answer');
answer_2.innerHTML = 'Answer №2';

var answer_3 = document.createElement('label');
answer_3.classList.add('answer');
answer_3.innerHTML = 'Answer №3';

var answer_4 = document.createElement('label');
answer_4.classList.add('answer');
answer_4.innerHTML = 'Answer №1';

var answer_5 = document.createElement('label');
answer_5.classList.add('answer');
answer_5.innerHTML = 'Answer №2';

var answer_6 = document.createElement('label');
answer_6.classList.add('answer');
answer_6.innerHTML = 'Answer №3';

var answer_7 = document.createElement('label');
answer_7.classList.add('answer');
answer_7.innerHTML = 'Answer №1';

var answer_8 = document.createElement('label');
answer_8.classList.add('answer');
answer_8.innerHTML = 'Answer №2';

var answer_9 = document.createElement('label');
answer_9.classList.add('answer');
answer_9.innerHTML = 'Answer №3';

var input_1 = document.createElement('input');
input_1.setAttribute('type','checkbox');
input_1.classList.add('input_checkbox');

var input_2 = document.createElement('input');
input_2.setAttribute('type','checkbox');
input_2.classList.add('input_checkbox');

var input_3 = document.createElement('input');
input_3.setAttribute('type','checkbox');
input_3.classList.add('input_checkbox');

var input_4 = document.createElement('input');
input_4.setAttribute('type','checkbox');
input_4.classList.add('input_checkbox');

var input_5 = document.createElement('input');
input_5.setAttribute('type','checkbox');
input_5.classList.add('input_checkbox');

var input_6 = document.createElement('input');
input_6.setAttribute('type','checkbox');
input_6.classList.add('input_checkbox');

var input_7 = document.createElement('input');
input_7.setAttribute('type','checkbox');
input_7.classList.add('input_checkbox');

var input_8 = document.createElement('input');
input_8.setAttribute('type','checkbox');
input_8.classList.add('input_checkbox');

var input_9 = document.createElement('input');
input_9.setAttribute('type','checkbox');
input_9.classList.add('input_checkbox');

var button = document.createElement('button');
button.classList.add('button');
button.innerHTML = 'Check my results';
button.style.textAlign = 'center';
button.style.backgroundColor = '#cfe2f3';
button.style.border = '2px solid #000';
button.style.borderRadius = '4px';

div = document.querySelector('form');
form.appendChild(question_1);
form.appendChild(paragraph_1);
form.appendChild(paragraph_2);
form.appendChild(paragraph_3);
form.appendChild(question_2);
form.appendChild(paragraph_4);
form.appendChild(paragraph_5);
form.appendChild(paragraph_6);
form.appendChild(question_3);
form.appendChild(paragraph_7);
form.appendChild(paragraph_8);
form.appendChild(paragraph_9);
form.appendChild(button);


form = document.querySelector('paragraph_1, paragraph_2, paragraph_3');
paragraph_1.appendChild(input_1);
paragraph_1.appendChild(answer_1);
paragraph_2.appendChild(input_2);
paragraph_2.appendChild(answer_2);
paragraph_3.appendChild(input_3);
paragraph_3.appendChild(answer_3);
paragraph_4.appendChild(input_4);
paragraph_4.appendChild(answer_4);
paragraph_5.appendChild(input_5);
paragraph_5.appendChild(answer_5);
paragraph_6.appendChild(input_6);
paragraph_6.appendChild(answer_6);
paragraph_7.appendChild(input_7);
paragraph_7.appendChild(answer_7);
paragraph_8.appendChild(input_8);
paragraph_8.appendChild(answer_8);
paragraph_9.appendChild(input_9);
paragraph_9.appendChild(answer_9);

// form.appendChild(input_1);
// form.appendChild(answer_1);
// form.appendChild(input_2);
// form.appendChild(answer_2);
// form.appendChild(input_3);
// form.appendChild(answer_3);
// form.appendChild(question_2);
// form.appendChild(input_4);
// form.appendChild(answer_4);
// form.appendChild(input_5);
// form.appendChild(answer_5);
// form.appendChild(input_6);
// form.appendChild(answer_6);
// form.appendChild(question_3);
// form.appendChild(input_7);
// form.appendChild(answer_7);
// form.appendChild(input_8);
// form.appendChild(answer_8);
// form.appendChild(input_9);
// form.appendChild(answer_9);





// var input_all;
// input_all = document.querySelectorAll('.input_checkbox');
// // var input_all = document.getElementsByClassName('input_checkbox');
// input_all.style.border = '2px solid #000';
// console.log(input_all);

// var question_all = document.querySelectorAll('.question');
// var question_all = document.getElementsByClassName('question');
// question_all.style.fontSize = '15px';
// console.log(question_all);


// var ArrayTest = [question_1,question_2,question_3];
// var ArrayTest2 = document.getElementsByClassName('question');
// ArrayTest2.forEach (function(){
//     this.style.fontSize = '15px';
// });



// var ul_1 = document.createElement('ul');
// ul_1.innerHTML = '1. Question №1';
// ul_1.className = 'ul_1';
//
// var ul_2 = document.createElement('ul');
// ul_2.innerHTML = '2. Question №2';
// ul_2.className = 'ul_2';
//
// var ul_3 = document.createElement('ul');
// ul_3.innerHTML = '3. Question №3';
// ul_3.className = 'ul_3';
//
//
// div = document.querySelector('div');
// div.appendChild(ul_1);
// div.appendChild(ul_2);
// div.appendChild(ul_3);
//
// var li = document.createElement('li');
// li.innerHTML = 'Answer №1';
//
// div = document.querySelector('ul');
// ul_1.appendChild(li);


console.log(body);