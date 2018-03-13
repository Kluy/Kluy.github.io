/**
 * Created by TERM2 on 01.11.2017.
 */
//

$(function () {

    // for (j = 1; j <= 2; j++){
        swapiModule.getPeople(function (data) {
            var i = 0;
            arr = [];
            while (i < data.results.length) {
                arr.push(data.results[i].name);
                i++;
            }

            var html = $("#arr").html();
            var content = tmpl(html, {
                personList: arr
            });
            $('form').append(content);

            var a = $(".person_input");
            a.on('click',function () {
                if (a.prop("checked")) {
                    localStorage.setItem(a, 1);
                } else {
                    localStorage.setItem(a, 0);
                }
            });
            if (localStorage.getItem(a) == 1) {
                a.prop('checked','checked');
            }

            var a = $(".checkbox");

            a.on('click',function (event) {
                var currentCheckbox = $(event.currentTarget);
                var currentCheckboxId = currentCheckbox.attr('id');
                if (currentCheckbox.prop("checked")) {
                    localStorage.setItem(currentCheckboxId, 1);
                } else {
                    localStorage.setItem(currentCheckboxId, 0);
                }
            });

            // for (i = 0; i < arr.length; i++){
            //
            //     if (localStorage.getItem($("#perosn" + [i])) == 1) {
            //         $("#perosn" + [i]).prop('checked','checked');
            //     }
            //
            // }

            //
            // $('#person1').change(function () {
            //     if ($(this).prop("checked")) {
            //         $(this).parent().removeClass('person')
            //             .addClass('person2');
            //         localStorage.setItem($('#person1'), 1);
            //     } else {
            //         $(this).parent().removeClass('person2')
            //             .addClass('person');
            //         localStorage.setItem($('#person1'), 0);
            //     }
            // });
            // if (localStorage.getItem($('#person1')) == 1) {
            //     $('#person1').prop('checked','checked')
            //     .parent().removeClass('person')
            //         .addClass('person2');
            // }



            //
            // $(':checkbox').change(function () {
            //     if ($(this).prop("checked")) {
            //         $(this).parent().removeClass('person')
            //             .addClass('person2');
            //         localStorage.setItem($(this), 1);
            //     } else {
            //         $(this).parent().removeClass('person2')
            //             .addClass('person');
            //         localStorage.setItem($(this), 0);
            //     }
            // });
            //
            //
            //
            //
            //
            // if (localStorage.getItem($('#person5')) == 1) {
            //     $('#person5').prop('checked','checked')
            //         .parent().removeClass('person')
            //         .addClass('person2');
            // }
            //
            // if (localStorage.getItem(document.getElementById('person' + [1])) == "true") {
            //     //         document.getElementById('person' + [1]).setAttribute('checked','checked');
            //         }
            // localStorage.setItem('a', 'aassssasdd');
            // console.log(localStorage.getItem('a'));
        });
    // localStorage.clear();
});