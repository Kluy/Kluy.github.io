/**
 * Created by TERM2 on 07.09.2017.
 */

define(
    'm',
    [],

    function () {

    function Model(data) {
        var self = this;

        self.data = data;

        self.addItem = function (item){
            if (item.length === 0){
                return;
            }

            self.data.push(item);

            return self.data;
        };

        self.removeItem = function (item){
            var index = self.data.indexOf(item);

            if (item.length === -1){
                return;
            }

            self.data.splice(index,1);

            return self.data;
        };
    }
        return Model;
    }
);
//
// define(
//     'model',
//     [],
//
//
//
//     function Model(data) {
//         let self = this;
//
//         self.data = data;
//
//         self.addItem = function (item){
//             if (item.length === 0){
//                 return;
//             }
//
//             self.data.push(item);
//
//             return self.data;
//         };
//
//         self.removeItem = function (item){
//             let index = self.data.indexOf(item);
//
//             if (item.length === -1){
//                 return;
//             }
//
//             self.data.splice(index,1);
//
//             return self.data;
//         };
//         return {};
//     }
// );