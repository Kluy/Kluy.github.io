/**
 * Created by TERM2 on 05.09.2017.
 */

var pow = require('../script.js');

describe("method pow", function() {

    it("pow", function() {

        //prepare

        var result;

        //act

        result = pow.powNow(2,3);
        
        //assert
        
        expect(result).toBe(8);
    });

    it("if power = 0", function() {

        var result2;

        result2 = pow.powNow(50,0);

        expect(result2).toBe(1);
    });

    it("if number or power is NaN, or power < 0, or power is not Integer", function() {

        var result3;

        result3 = pow.powNow('string','string') || pow.powNow(2,-20) || pow.powNow(2,4.2);

        expect(result3).toBeFalsy();
    });

    // it("if power < 0", function() {
    //
    //     var result4;
    //
    //     result4 = pow.powNow(2,-20);
    //
    //     expect(result4).toBeFalsy();
    //
    // });
    //
    // it("if power is not Integer", function() {
    //
    //     var result4;
    //
    //     result4 = pow.powNow(2,4.2);
    //
    //     expect(result4).toBeFalsy();
    //
    // });
});
