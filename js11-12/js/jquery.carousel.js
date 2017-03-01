/**
 * Created by TERM2 on 27.02.2017.
 */

$(function(){
    var $list = $('.carousel-list');
    var $leftBasic = 0;
    var $leftStop = 0;
    var $elemWidth = 125;
    var $elemQuantity = $list.find('li').length;
    var $rightStop = - (($elemQuantity - 5) * $elemWidth);

    $.fn.right = function () {

        var $rightButton = $('.carousel-arrow-right');

        function slideRight() {
            if ($leftBasic != $rightStop) {
                $leftBasic -= 125;
                $list.animate({
                    left: $leftBasic + 'px'
                }, 600);
            }
        }
        $rightButton.on('click',slideRight);
    };

    $.fn.left = function () {

        var $leftButton = $('.carousel-arrow-left');

        function slideLeft() {
            if ($leftBasic != $leftStop){
                $leftBasic += 125;
                $list.animate({
                    left: $leftBasic + 'px'
                }, 600);
            }
        }

        $leftButton.on('click',slideLeft)
    }
});


(function($){



})(jQuery);


// $(document).ready(function() {
//
//     var elementsList = $('.carousel-list');
//
//     var pixelsOffset = 125;
//     var currentLeftValue = 0;
//
//     leftUIEl.click(function() {
//         currentLeftValue += 125;
//         elementsList.animate({ left : currentLeftValue + "px"}, 500);
//     });
//
//     rightUIEl.click(function() {
//         currentLeftValue -= 125;
//         elementsList.animate({ left : currentLeftValue + "px"}, 500);
//     });
//
// });