/**
 * Created by TERM2 on 07.09.2017.
 */
define(
    'v',
    ['m',
    'c'],
    function () {
    
    function View(model) {

        var self = this;

        function init () {
            var wrapper = tmpl($('#wrapper-template').html());
        
            $('body').append(wrapper);
        
            self.elements = {
                input: $('.item-value'),
                addBtn: $('button'),
                listContainer: $('.item-list')
            };
            self.renderList(model.data);
        }
        
        self.renderList = function (data) {
            var list = tmpl($('#list-template').html(), {data: ['learn javascript', 'learn html', 'learn css']});
            self.elements.listContainer.html(list);
        };
        
        init();
    }

        return {};
    }
);