/**
 * Created by TERM2 on 27.02.2017.
 */
$(function () {

    $('.carousel-arrow-left').left();
    $('.carousel-arrow-right').right();

});


$(function () {

    var html = $("#test").html();

    var ar =[
        {
            header: 'КЛЮЙ АНДРЕЙ СЕРГЕЕВИЧ',
            img: 'img/foto.jpg',
            spec: 'Cпециалист'
        },
        {
            title: 'Хочу учить фронтенд, потому что:',
            content: 'интересно'
        },
        {
            title: 'Мой контактный телефон:',
            content: '+380'
        },
        {
            title: 'Мой профиль в контакте:',
            content: '<a href="http://vk.com">vk.com</a>'
        },
        {
            title: 'Мой фидбек:',
            content: 'Спасибо, Костя, ты настоящий друг!'
        }
    ];

    var content = tmpl(html, {
        data: ar
    });

    $('body').append(content);
    
});