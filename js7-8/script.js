/**
 * Created by TERM2 on 31.01.2017.
 */

$(function () {

    $('.header').mousedown(function() {
        $('.header:not(.red)').css('border','1px solid gray');
        $(this).css('border','1px solid #52abcb');
        $('.active').css('border','1px solid #4f92ff');
    });
});

$(function () {

    $('.header').on('click',function () {

        $('.header')
            .removeClass('active')
            .removeClass('red')
            .css({
                backgroundColor: 'gainsboro',
                borderColor: 'gray',
                cursor: 'pointer'})
            .hover(
                function() {
                    $(this).css('backgroundColor','#ececec');
                }, function() {
                    $(this).css('backgroundColor','gainsboro');
            });

        $(this)
            .css({
                backgroundColor:'#79abfc',
                borderColor: '#4f92ff',
                cursor: 'text'})
            .off('mouseenter mouseleave')
            .off('mousedown')
            .addClass('red');

        $('div.par').hide();
        $(this).siblings('.par').show();
    });
});

$(function () {

    $('input').hover(function () {
        $(this)
            .siblings('.input')
            .css('display','inline-block')
    },  function () {
        $(this)
            .siblings('.input')
            .css('display','none')
    });

    $('button').on('click', function () {
        $('.input').css({display: 'inline-block'})
    });
});