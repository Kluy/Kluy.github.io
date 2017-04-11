/**
 * Created by TERM2 on 19.01.2017.
 */

$(function () {

    $('.header')
        .on('click',function () {
            $('.header')
                .removeClass('active')
                .addClass('unactive')
                .addClass('hover')
                .addClass('act');
            $(this)
                .removeClass('unactive')
                .removeClass('hover')
                .removeClass('act')
                .addClass('active');
            $('div.par').hide();
            $(this).siblings('.par').show();
        })
});

$(function () {

    $('input').hover(function () {
        $(this).siblings('.tooltips').addClass('inline')
    },  function () {
        $(this).siblings('.tooltips').removeClass('inline')
    });

    $('button').on('click', function () {
        $('.tooltips').addClass('inline')
    });
});