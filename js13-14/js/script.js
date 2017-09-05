/**
 * Created by TERM2 on 01.03.2017.
 */
'use strict';

(function($){
    $(function () {
        var html = $("#test").html();
        var question =[
            {
                question: 'Question №1',
                answer: [
                    'Answer №1',
                    'Answer №2',
                    'Answer №3'
                ],
                rightAnswer: {
                    0:true
                }
            },
            {
                question: 'Question №2',
                answer: [
                    'Answer №1',
                    'Answer №2',
                    'Answer №3'
                ],
                rightAnswer: {
                    2:true
                }
            },
            {
                question: 'Question №3',
                answer: [
                    'Answer №1',
                    'Answer №2',
                    'Answer №3'
                ],
                rightAnswer: {
                    1:true
                }
            }
        ];

        var programmingTest = JSON.stringify(question);
        localStorage.setItem('test', programmingTest);
        var testFromStorage = localStorage.getItem('test');
        var testFromStorageObj = JSON.parse(testFromStorage);
        var content = tmpl(html, {
            data: testFromStorageObj
        });

        $('body').append(content);

        function check() {
            var user = [];
            var j;
            for (j = 0; j < question.length; j++) {
                var radios = document.getElementsByName("Question №"+[j+1]);
                for (i = 0; i < radios.length; i++) {
                    var checked = [];
                    var right = [];
                    if (radios[i].checked){
                        checked[i] = radios[i].checked;
                    }
                    right[i] = question[j].rightAnswer[i] == 1;
                    if (checked[i] !== right[i]) {
                        user.push("0");
                    } else {
                        user.push("1");
                    }
                }
            }

            console.log(user);
            var result = 0;
            for (var i = 0; i < user.length; i++) {
                if (user[i] == 1) {
                    result += 1;
                }
            }
                var modal = $('<div class="modal"><p> ' + 'Результат: ' + result + ' верных ответа </p></div>');
                var overlay = $('<div class="overlay"></div>');
                overlay.one('click', hideModal);
                $('body').append(overlay)
                         .append(modal);

            function hideModal(){
                $('.radio').prop('checked', false);
                modal.remove();
                overlay.remove();
            }
        }
        $('.button').on('click', check);
    });

})(jQuery);