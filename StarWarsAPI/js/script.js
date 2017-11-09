/**
 * Created by TERM2 on 01.11.2017.
 */
//

$(function () {
        var arr = swapiModule.getPeople(function array (data) {
            var i = 0;
            arr = [];
            while (i < data.results.length){
                arr.push(data.results[i].name);
                i++;
            }

            var html = $("#arr").html();
            var content = tmpl(html, {
                profileData: arr
            });
            $('form').append(content);

            for (i = 0; i <= arr.length - 1; i++){
                var a = document.getElementById('person' + [i]);

                console.log(a);

                a.onclick = function() {
                if(a.checked) {
                    localStorage.setItem(a, "true");
                } else {
                    localStorage.setItem(a, "false");
                }
            };
            if (localStorage.getItem(a) == "true") {
                a.setAttribute('checked','checked');
            }
            }
        });
});