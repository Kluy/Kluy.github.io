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

        console.log('newQuestion', newQuestion);


        questionsList.push(newQuestion);

        var questionsListSave = JSON.stringify(questionsList);

        console.log('questionsListSave', questionsListSave);

        localStorage.setItem('test', questionsListSave);

        var testFromStorage = localStorage.getItem('test');

        console.log('testFromStorage', testFromStorage);

        var testFromStorageObj = JSON.parse(testFromStorage);

        console.log('testFromStorageObj', testFromStorageObj);
        console.log('testFromStorageObjN', testFromStorageObj[2]);
    }
});

// $(function () {
//
//     var button = $('<button class="searchButton">Поиск</button>');
//
//     $('body').append($('<div>Введите поисковый запрос:</div>'))
//              .append($('<input type="text" id="search">'))
//              .append(button);
//
//     $('.searchButton').on('click', search);
//
//     function search (){
//
//         // var keyWord = document.getElementById('text').value;
//         var keyWord = $('#search').val();
//         var api_key = '4870172-a6cd6d722569b9e8587abde34';
//         var url = "https://pixabay.com/api/?key=" + api_key + "&q=" + keyWord;
//
//         // var url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=goodluck";
//         $.ajax({
//             url: url,
//             success: function(data){
//                 // var context = data;
//                 console.log('data', data);
//                 var img = $('<img src="" alt="">').appendTo('body');
//                     img.attr('src', data.hits[1].previewURL);
//                 // $('body').append('<img src="" alt="">');
//                 // $('img').append(data.results[1].url);
//                 console.log('data:url', data.hits[1].previewURL);
//                 console.log('data:obj', data.hits);
//             }
//         });
//     };
// });