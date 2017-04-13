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

    var questionList = [];

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
        questionList.push(newQuestion);
        var questionListSave = JSON.stringify(questionList);
        localStorage.setItem('test', questionListSave);
        var testFromStorage = localStorage.getItem('test');
        var testFromStorageObj = JSON.parse(testFromStorage);

        console.log('testFromStorageObj', testFromStorageObj);
        console.log('testFromStorageObjN', testFromStorageObj[2]);
    }
});


$(function () {
    var button = $('<button class="searchButton">Поиск</button>');
    $('body').append($('<div>Введите поисковый запрос:</div>'))
             .append($('<input type="text" id="search">'))
             .append(button);
    $('.searchButton').on('click', search);
    function search (){
        $('a').remove();
        var keyWord = $('#search').val();
        var url = "https://pixabay.com/api/?key=4870172-a6cd6d722569b9e8587abde34&q=" + keyWord;
        $.ajax({
            url: url,
            success: function(data){

                for (var i = 0; i < data.hits.length; i++) {
                    var href = $('<a href=""></a>');
                        href.appendTo('body')
                            .attr('href', data.hits[i].pageURL);
                    var img = $('<img src="" alt="">');
                        href.append(img);
                        img.attr('src', data.hits[i].previewURL);
                }
            },
            error: function () {
                alert("error")
            }
        });
    }
});