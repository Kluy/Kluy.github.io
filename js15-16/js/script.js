/**
 * Created by TERM2 on 15.03.2017.
 */

'use strict';

$(function () {

    var question = $('<input type="text" id="question">');

    var body = $('body');

    body.append($('<div>Введите вопрос:</div>'))
             .append(question)
             .append($('<div>Введите варианты ответов:</div>'));

    for (var i = 1; i < 4; i++) {
        var answer = $('<input type="text">').appendTo('body');
        answer.attr('id', 'answer' + i);
    }

    var rightAnswer = $('<input type="text" id="rightAnswer">');

    var button = $('<button class="saveButton">Сохранить</button>');

    body.append($('<div>Введите правильный вариант ответа:</div>'))
             .append(rightAnswer)
             .append(button);

    button.on('click', save);

    var questionsList = [];

    function save() {

        function Test(questionArg,answersArg, rightAnswerArg) {
            this.question = questionArg;
            this.answer = answersArg;
            this.rightAnswer = rightAnswerArg;
        }

        var answers = [];
        for (var i = 1; i < 4; i++) {
            answers.push($('#answer' + i).val());
        }

        var newQuestion = new Test($('#question').val(), answers, $('#rightAnswer').val());

        questionsList.push(newQuestion);

        var questionsListSave = JSON.stringify(questionsList);
        localStorage.setItem('test', questionsListSave);

        var testFromStorage = localStorage.getItem('test');
        var testFromStorageObj = JSON.parse(testFromStorage);

        console.log('testFromStorageObj', testFromStorageObj);
        console.log('testFromStorageObj', testFromStorageObj[2]);
    }
});