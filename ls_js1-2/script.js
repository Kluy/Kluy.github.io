/**
 * Created by TERM2 on 13.12.2016.
 */

function pow(number,power) {
    j = number;
    while (power < 0) {
        power = prompt('Введите степень > или = 0');
    }
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

number = prompt('Введите число');

Number.isNaN = Number.isNaN || function (number) {
        return typeof number === 'number' && isNaN(number)
    }
while (isNaN(number) == true) {
    number = prompt('Число введено неверно, введите число');
} if (isNaN(number) == false) {
    power = prompt('Введите степень');
    Number.isNaN = Number.isNaN || function (power) {
            return typeof power === 'number' && isNaN(power)
        }
    while (isNaN(power) == true) {
        power = prompt('Степень введена неверно, введите число');
    } if (isNaN(power) == false) {
        pow(number,power);
    }
}