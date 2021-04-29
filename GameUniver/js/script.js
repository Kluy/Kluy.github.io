$(function(){

    // Движение по точкам на карте

    var path = [114, 199, 289, 374, 471, 545, 626, 743, 834, 954, 1024, 1094, 1193, 1262, 1372, 1480, 1572, 1665,
        1750, 1835, 1935, 2017, 2099, 2210, 2334, 2441, 2531, 2603, 2681, 2756, 2828, 2897, 2969, 3050, 3132,
        3211, 3270, 3351, 3421, 3492, 3555, 3616, 3685, 3741, 3838, 3902, 3971, 4072, 4176, 4278, 4339, 4452];

    var j = 0;

    $(".univer").on("click", function(event){
        $("#person").css({
            "offset-distance": path[j]
        })
        j++;
    });

    // Всплывающее окно рейтинга

    $(".rating_button").on("click", function(event){
        $(".ratings").css({
            "top": 82
        })
        $(".pop_up_background").css({
            "visibility": "visible",
            "opacity": 0.4
        })
    });

    $(".x_button").on("click", function(event){
        $(".ratings").css({
            "top": -482
        })
        $(".pop_up_background").css({
            "visibility": "hidden",
            "opacity": 0
        })
    });

    // Наполнение списка с рейтингом

    var b = data.rating[0].id;

    for(var i = 0; i < data.rating.length; i++){
        $(".overflow_hidden").append("<div class='owner'><p id='id"+i+"' class='id'></p>" +
            "<p id='image"+i+"' class='image'></p><p id='name"+i+"' class='name'></p>" +
            "<p id='points"+i+"' class='points'></p></div>");
        $('#id'+ i + '').text(data.rating[i].id);
        $('#name' + i + '').text(data.rating[i].name + " " + data.rating[i].lastName);
        $('#points' + i + '').text(data.rating[i].points);
    }

    for(var n = 0; n < data.friends.length; n++){
        for(var m = 0; m < data.rating.length; m++){
            if(data.friends[n].id === data.rating[m].id){
                $('#name' + m + '').css({
                    "color" : "yellow"
                });
            }
        }
    }

    // Движение ленты

    var c = 0;

    $("#arrow_left").on("click", function(event){
        c -= 60;
        $(".friends_list").css({
            "left": c
        })
    });

    $("#arrow_right").on("click", function(event){
        if(c !== 0){
            c += 60;
            $(".friends_list").css({
                "left": c
            })
        }
    });

});