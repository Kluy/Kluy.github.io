/**
 * Created by TERM2 on 13.01.2017.
 */

var body = document.querySelector('body');

var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.appendChild(wrapper);

var header = document.createElement('header');
header.innerHTML = 'Programming test';
wrapper.appendChild(header);

var form = document.createElement('form');
wrapper.appendChild(form);

for (var i = 0; i < 3; i++) {
    var question = document.createElement('div');
    question.classList.add('question');
    question.innerHTML = (i + 1) + '. Question №' + (i + 1);
    form.appendChild(question);
}

var questionList = document.getElementsByClassName('question');

for (var k = 0; k < 3; k++) {
    append (questionList[k])
}

function append (questionNumber){
    for (var j = 0; j < 3; j++) {
        var answer = document.createElement('label');
        answer.innerHTML = 'Answer №' + (j + 1);
        questionNumber.appendChild(answer);
        var input = document.createElement('input');
        input.setAttribute('type','checkbox');
        answer.appendChild(input);
    }
}

var button = document.createElement('button');
button.innerHTML = 'Check my results';
button.setAttribute('type','submit');
form.appendChild(button);