
$(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        navText: ["", ""],
        autoplay:true,
        autoplayTimeout:4000,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            }
        }
    });

    jQuery(function(f){
        let element = f('header');
        f(window).scroll(function(){
            element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);
        });
    });

})