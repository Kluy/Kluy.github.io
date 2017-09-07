/**
 * Created by TERM2 on 01.03.2017.
 */
'use strict';

(function ($) {
    $(function () {
        var html = $("#test").html();
        var questions = [{
            question: 'Question №1',
            answer: ['Answer №1', 'Answer №2', 'Answer №3'],
            rightAnswer: {
                0: true
            }
        }, {
            question: 'Question №2',
            answer: ['Answer №1', 'Answer №2', 'Answer №3'],
            rightAnswer: {
                2: true
            }
        }, {
            question: 'Question №3',
            answer: ['Answer №1', 'Answer №2', 'Answer №3'],
            rightAnswer: {
                1: true
            }
        }];

        var content = tmpl(html, {
            data: questions
        });

        $('body').append(content);

        function check() {
            var user = [];
            for (var j = 0; j < questions.length; j++) {
                var radioButton = document.getElementsByName("Question №" + [j + 1]);
                for (var i = 0; i < radioButton.length; i++) {
                    var checkedRadioButton = [],
                        right = [];
                    right[i] = questions[j].rightAnswer[i] == true;
                    radioButton[i].checked && (checkedRadioButton[i] = radioButton[i].checked);
                    checkedRadioButton[i] === right[i] ? user.push("1") : user.push("0");
                }
            }

            console.log(user);

            var result = 0;
            for (var _i = 0; _i < user.length; _i++) {
                user[_i] == 1 && (result += 1);
            }var modal = $('<div class="modal"><p> ' + 'Результат: ' + result + ' верных ответа </p></div>'),
                overlay = $('<div class="overlay"></div>');
            overlay.one('click', hideModal);
            $('body').append(overlay).append(modal);

            function hideModal() {
                $('.radio').prop('checked', false);
                modal.remove();
                overlay.remove();
            }
        }
        $('.button').on('click', check);
    });
})(jQuery);