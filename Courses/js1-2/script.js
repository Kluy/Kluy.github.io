/**
 * Created by TERM2 on 12.01.2017.
 */

var Names = [];

while (Names.length < 5) {
    var name = prompt('Введите имя');
    Names.push(name);
}

var yourName = prompt('Введите пожалуйсата Ваше имя');

var success = false;
for (var i = 0; i < Names.length; i++) {
    console.log('Names[i]', Names[i]);
    console.log('yourName', yourName);
    if (Names[i] == yourName) {
        success = true;
        break;
    }
}
if (success == true) {
    alert('Hello,' + yourName + '!');
} else {
    alert('Wrong name!');
}