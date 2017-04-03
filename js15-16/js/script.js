/**
 * Created by TERM2 on 15.03.2017.
 */

$(function () {

    var html = $("#test").html();

    $('button').on('click', search);

    function search (){

        var keyWord = document.getElementById('text').value;

        var API_KEY = '4870172-a6cd6d722569b9e8587abde34';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(keyWord);
        $.getJSON(URL, function (data) {
            if (parseInt(data.totalHits) > 0)
                $.each(data.hits, function (i, hit) {

                    // ddd = hit.pageURL;

                    console.log(hit.pageURL);


                });
            else
                console.log('No hits');
        });
    }

    // var data = {
    //     titel: 'ddd'
    // };

    var content = tmpl(html, {
        titel: 'sfsdf'
    });

    $('body').append(content);
});