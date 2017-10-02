/**
 * Created by TERM2 on 08.09.2017.
 */
$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
});

$(function () {

    $('.button').on('click', search);

    function search (){

        $('a').remove();
        var keyWord = $('input').val();
        var url = "https://pixabay.com/api/?key=4870172-a6cd6d722569b9e8587abde34&q=" + keyWord;
        $.ajax({
            url: url,
            success: function(data){

                for (var i = 0; i < data.hits.length; i++) {
                    var href = $('<a href=""></a>');
                    href.appendTo('grid')
                        .attr('href', data.hits[i].pageURL);
                    var img = $('<img src="" alt="">');
                    href.append(img);
                    img.attr('src', data.hits[i].previewURL);
                }

                    // for (var i = 0; i < 7; i++) {
                    //     var gridItem = $('<div class="grid-item"></div>');
                    //     gridItem.appendTo('.grid');
                    //     var href = $('<a href=""></a>');
                    //     href.appendTo('.grid-item')
                    //         .attr('href', data.hits[i].pageURL);
                    //     var img = $('<img src="" alt="">');
                    //     href.append(img);
                    //     img.attr('src', data.hits[i].webformatURL);
                    //     }
            },

            error: function () {
                alert("error")
            }
        });
    }
});