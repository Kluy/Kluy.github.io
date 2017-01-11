/**
 * Created by TERM2 on 13.12.2016.
 */

function pow() {
    j = a;
    var i=1;
    while (i < b){
        a = a * j;
        i++
    }
    alert(a);
    console.log('result', a);
}

var a = prompt('Введите число');
var b = prompt('Введите степень');

pow();