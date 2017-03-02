/**
 * Created by TERM2 on 27.02.2017.
 */
$(function () {

    $('.carousel-arrow-left').left();
    $('.carousel-arrow-right').right();

});

$(function () {

   var html = $("#profile").html();

   var profile =[
        {
            header: 'КЛЮЙ АНДРЕЙ СЕРГЕЕВИЧ',
            img: 'img/foto.jpg',
            profesion: 'Cпециалист'
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
        profileData: profile
    });

    $('body').append(content);
    
});

// var page = {
//     author: {
//         name: 'КЛЮЙ АНДРЕЙ СЕРГЕЕВИЧ',
//         photo: 'img/foto.jpg',
//         spec: 'Cпециалист'
//     },
//
//     whyBlock :{
//
//         title: 'Хочу учить фронтенд, потому что:',
//         content:'интересно'
//     }
//     ,
//     contacts :{
//         title: 'Мой контактный телефон:',
//         tel: '+380'
//     }
//     ,
//     social :{
//         title: 'Мой профиль в контакте:',
//         link: '<a href="http://vk.com">vk.com</a>'
//     }
//     ,
//     feedback :{
//         title: 'Мой фидбек:',
//         message: 'Спасибо, Костя, ты настоящий друг!'
//     }
//
// };