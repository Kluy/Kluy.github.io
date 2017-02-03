/**
 * Created by TERM2 on 31.01.2017.
 */

$(function form () {
    $('.header').on('click',function () {
        $('.header')
            .css({
                backgroundColor: 'gainsboro',
                borderColor: 'gray',
                cursor: 'pointer'});

        $(this)
            .css({
                backgroundColor:'#79abfc',
                borderColor: '#4f92ff',
                cursor: 'text'});

        var $text = $(this).siblings('.par');
        $('div.par').hide();
        $text.show();
    });
});

$(function form () {
    var $input = $('input');

    $input.hover(function () {
        var $tooltips = $(this).siblings('.input');
        $tooltips.css({display: 'inline-block'})
    },  function () {
        var $tooltips = $(this).siblings('.input');
        $tooltips.css({display: 'none'})
    });

    var $tooltipsText = $('.input');

    var $button = $('button');
    $button.on('click', function () {
        $tooltipsText.css({display: 'inline-block'})
    });
});