/**
 * Created by TERM2 on 07.09.2017.
 */

require(
    [
        'm',
        'v',
        'c'
    ],
    function (Model, View, Controller) {

        $(function () {

            var firstList = ['learn javascript', 'learn html', 'learn css'];
            var model = new Model(firstList);
            var view = new View(model);
            var controller = new Controller(model, view);

        });
        // console.log('model', m);
        // console.log('view', v);
        // console.log('controller', c);
    }
);




// function Model(data) {
//     var self = this;
//
//     self.data = data;
//
//     self.addItem = function (item){
//         if (item.length === 0){
//             return;
//         }
//
//         self.data.push(item);
//
//         return self.data;
//     };
//
//     self.removeItem = function (item){
//         var index = self.data.indexOf(item);
//
//         if (item.length === -1){
//             return;
//         }
//
//         self.data.splice(index,1);
//
//         return self.data;
//     };
// }
//
// function View(model) {
//
//     var self = this;
//
//     function init () {
//         var wrapper = tmpl($('#wrapper-template').html());
//
//         $('body').append(wrapper);
//
//         self.elements = {
//             input: $('.item-value'),
//             addBtn: $('button'),
//             listContainer: $('.item-list')
//         };
//         self.renderList(model.data);
//     }
//
//     self.renderList = function (data) {
//         var list = tmpl($('#list-template').html(), {data: data});
//         self.elements.listContainer.html(list);
//     };
//
//     init();
// }
//
// function Controller(model, view) {
//
//     view.elements.addBtn.on('click', addItem);
//     view.elements.listContainer.on('click', '.item-delete', removeItem);
//
//     function addItem() {
//         var newItem = view.elements.input.val();
//         model.addItem(newItem);
//         view.renderList(model.data);
//         view.elements.input.val('');  // очищает поле инпута посли добавления в список
//     }
//
//     function removeItem() {
//         var item = $(this).attr('data-value');
//
//         model.removeItem(item);
//         view.renderList(model.data);
//     }
// }
//
// $(function () {
//     var firstList = ['learn javascript', 'learn html', 'learn css'];
//     var model = new Model(firstList);
//     var view = new View(model);
//     var controller = new Controller(model, view);
// });