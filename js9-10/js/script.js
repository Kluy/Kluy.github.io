/**
 * Created by TERM2 on 21.02.2017.
 */
(function($) {
    $(function() {
        $('input, select').styler({
            selectSearch: true
        });
    });
})(jQuery);

$(function () {
    var $links = $('.menu li');

    $links.hover(function () {
        $(this).children('.submenu').show(200);
        $(this).children('.submenu2').show(200);
    },  function () {
        $(this).children('.submenu').hide();
        $(this).children('.submenu2').hide();
    });
});