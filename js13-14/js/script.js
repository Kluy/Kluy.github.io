/**
 * Created by TERM2 on 01.03.2017.
 */
'use strict';

$(function () {

    var html = $("#test").html();

    var test =[
        {
            header: 'Programming test',
            button: 'Check results'
        },
        {
            question: 'Question №1',
            answer: [
                'Answer №1',
                'Answer №2',
                'Answer №3'
            ]
        },
        {
            question: 'Question №2',
            answer: [
                'Answer №1',
                'Answer №2',
                'Answer №3'
            ]
        },
        {
            question: 'Question №3',
            answer: [
                'Answer №1',
                'Answer №2',
                'Answer №3'
            ]
        }
    ];

    var programmingTest = JSON.stringify(test);
    localStorage.setItem('test', programmingTest);
    var testFromStorage = localStorage.getItem('test');
    var testFromStorageObj = JSON.parse(testFromStorage);

    var content = tmpl(html, {
        data: testFromStorageObj
    });

    $('body').append(content);

});