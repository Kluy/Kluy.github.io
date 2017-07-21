/**
 * Created by TERM2 on 19.04.2017.
 */
$(function () {

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: -10
        });

    // WOW.init();

    //CAROUSEL ANIMATION

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            }
        }
    });

    //ICON ANIMATION

    $('.about-us-gear').hover(function () {
        $('.about-us__ico-gear').addClass('gear');
    },  function () {
        $('.about-us__ico-gear').removeClass('gear');
    });
    $('.about-us-truck').hover(function () {
        $('.about-us__ico-truck').addClass('truck');
    },  function () {
        $('.about-us__ico-truck').removeClass('truck');
    });

    //ACCORDION

    var allPanels = $('.banners__accordion  .accordion__text').hide();

    $('.accordion__block').click(function() {

        if ($(this).hasClass('accordion__block--active')) {
            $(this).next().slideUp(300);
            $(this).children('.opener').html('+');
            $(this).removeClass( 'accordion__block--active' );

        } else {

            allPanels.not($(this).next()).slideUp(300);
            $('.accordion__block').children('.opener').html('+')
                                  .removeClass( 'accordion__block--active' );
            $(this).children('.opener').html('-');
            $(this).addClass( 'accordion__block--active' );
            $(this).next().slideDown(300);
            return false;
        }
    });
});