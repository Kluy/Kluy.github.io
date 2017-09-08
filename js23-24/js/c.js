/**
 * Created by TERM2 on 07.09.2017.
 */
define(
    'c',
    ['m',
    'v'],
    
    function () {

    function Controller(view, model) {

        // $('button').on('click', addItem);
        // $('.item-delete').on('click', removeItem);

        view.elements.addBtn.on('click', addItem);
        view.elements.listContainer.on('click', '', removeItem);

        function addItem() {
            var newItem = view.elements.input.val();
            model.addItem(newItem);
            view.renderList(model.data);
            view.elements.input.val('');  // очищает поле инпута посли добавления в список
        }
        
        function removeItem() {
            var item = $(this).attr('data-value');
        
            model.removeItem(item);
            view.renderList(model.data);
        }
    }

        $(function () {

            var firstList = ['learn javascript', 'learn html', 'learn css'];
            var model = new Model(firstList);
            var view = new View(model);
            var controller = new Controller(model, view);

        });

        return {};
    }
);
// $(function () {
//     var firstList = ['learn javascript', 'learn html', 'learn css'];
//     var model = new Model(firstList);
//     var view = new View(model);
//     var controller = new Controller(model, view);
// });
