/**
 * Created by TERM2 on 01.11.2017.
 */
//
$(function () {
    for (j = 1; j <= 2; j++){
        var arr = swapiModule.getPeople([j], function array (data) {
            var i = 0;
            arr = [];
            while (i < data.results.length){
                arr.push(data.results[i].name);
                i++;
            }

            var html = $("#arr").html();
            var content = tmpl(html, {
                profileData: arr
            });
            $('form').append(content);

        });
        }



});

$(function () {
    // $('form')
    //     .on('click',function () {
    //         alert('ddd')
    //     });
    $('.person')
        .on('click',function () {
            alert('ddd')
        });
    $('.header')
        .on('click',function () {
            alert('ddd')
        });
});