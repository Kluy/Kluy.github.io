/**
 * Created by TERM2 on 13.12.2016.
 */

function pow(number,power) {
    j = number;
    if (power > 0) {
        var i=1;
        while (i < power){
            number = number * j;
            i++
        }
    } else if (power == 0){
        number = 1;
    }
    alert(number);
    console.log('result', number);
}

function isInteger(arg) {
    return arg % 1 === 0;
}

number = prompt('Введите число');

while (isNaN(number) == true || number == "" || isInteger(number) == false) {
    number = prompt('Число введено неверно, введите число');
}

if (isNaN(number) == false) {
    power = prompt('Введите степень');

    while (isNaN(power) == true || power == "" || isInteger(power) == false || power < 0) {
        power = prompt('Степень введена неверно, введите целое число > или = 0');
    }

    if (isNaN(power) == false) {
        pow(number,power);
    }
}