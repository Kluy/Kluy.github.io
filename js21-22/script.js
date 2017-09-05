/**
 * Created by TERM2 on 30.08.2017.
 */

var pow = {
    powNow: function (number,power) {
        j = number;
        if (isNaN(number) == true || isNaN(power) == true || power < 0 || power%1 != 0) {

            return false

        } else if (power == 0){

            number = 1;

        }  else {
            var i=1;
            while (i < power){
                number = number * j;
                i++
            }
        }

        return number
    }
};

// console.log(pow.powNow(2, 4.2));

try{
    module.exports = pow;
} catch (e) {}