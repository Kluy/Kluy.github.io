/**
 * Created by TERM2 on 01.03.2017.
 */
'use strict';

(function($){
    $(function () {
        let html = $("#test").html();
        const questions = [
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
                rightAnswer:  {
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

        let content = tmpl(html, {
            data: questions
        });

        $('body').append(content);

        function check() {
            const user = [];
            for (let j = 0; j < questions.length; j++) {
                const radioButton = document.getElementsByName("Question №"+[j+1]);
                for (let i = 0; i < radioButton.length; i++) {
                    let checkedRadioButton = [],
                        right = [];
                    right[i] = questions[j].rightAnswer[i] == true;
                    radioButton[i].checked && (checkedRadioButton[i] = radioButton[i].checked);
                    checkedRadioButton[i] === right[i] ? user.push("1") : user.push("0");
                }
            }

            console.log(user);

            let result = 0;
            for (let i = 0; i < user.length; i++) user[i] == 1 && (result += 1);

                const modal = $('<div class="modal"><p> ' + 'Результат: ' + result + ' верных ответа </p></div>'),
                      overlay = $('<div class="overlay"></div>');
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