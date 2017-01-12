/**
 * Created by TERM2 on 12.01.2017.
 */

var Names = [];

while (Names.length < 5) {
    var name = prompt('Введите имя');
    Names.push(name)
}

var yourName = prompt('Введите пожалуйсата Ваше имя');

for (var i = 0; i < Names.length; i++) {
    Names.pop()
}
if (Names.pop() == yourName) {
    alert('Hello, ' + yourName + '!');
} else {
    alert('Wrong name!');
}



// if (yourName == arrNames[0] || yourName == arrNames[1] || yourName == arrNames[2] || yourName == arrNames[3] || yourName == arrNames[4]) {
//     alert('Hello,' + yourName + '!');
// } else {alert('Wrong name!');}


// for (var i = 0; i < Names.length; i++) {
//     Names[i] == yourName && alert('Hello, ' + yourName + '!') || alert('Wrong name!');
// }