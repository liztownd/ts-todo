System.register(["./DataAccess.js"], function (exports_1, context_1) {
    "use strict";
    var DataAccess_js_1, service, container, todos;
    var __moduleName = context_1 && context_1.id;
    function init() {
        // renderTodos();
    }
    return {
        setters: [
            function (DataAccess_js_1_1) {
                DataAccess_js_1 = DataAccess_js_1_1;
            }
        ],
        execute: function () {
            service = new DataAccess_js_1.TodoService([]);
            container = $('#container');
            $('#add').on('click', function (e) {
                e.preventDefault();
                var newTodo = $('input').val();
                console.log('new todo', newTodo);
                service.add(newTodo);
                init();
            });
            todos = service.getAll();
            // render todos
            // todos.forEach(todo => 
            //     console.log(`${todo.name} [${TodoState[todo.state]}]`));
            // mark completed
            // clear completed
        }
    };
});
