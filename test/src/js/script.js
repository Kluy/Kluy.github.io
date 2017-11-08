/**
 * Created by TERM2 on 08.09.2017.
 */

$(function () {

    function search (){

        $('.grid-item').remove();
        var keyWord = $('input').val();
        var url = "https://pixabay.com/api/?key=4870172-a6cd6d722569b9e8587abde34&q=" + keyWord;
        $.ajax({
            url: url,
            success: function(data){

                    for (var i = 0; i < 8; i++) {
                        var href = $('<a class="grid-item" href=""></a>');
                        href.appendTo('.grid')
                            .attr('href', data.hits[i].pageURL);
                        var img = $('<img src="" alt="">');
                        href.append(img);
                        img.attr('src', data.hits[i].webformatURL);
                        }

            },

            error: function () {
                alert("error")
            }
        });
    }
    $(document).ready(function(){

        search();

    });

    $('.search_activity').on('click', search);

    /*HIDE PARTNERS*/

    var opened = false;

    function showMorePartners (e) {
        e.preventDefault();

        var $partners = $('.hidden');

        if (opened) {
            opened = false;
            $partners.slideUp();
            $('.button--see-partners').html('See other partners');

        } else {
            opened = true;
            $partners.slideDown();
            $('.button--see-partners').html('Hide more partners');
        }
    }

    $('.button--see-partners').on("click", showMorePartners);

});