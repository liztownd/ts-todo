System.register(["./DataAccess.js"], function (exports_1, context_1) {
    "use strict";
    var DataAccess_js_1, todos, service;
    var __moduleName = context_1 && context_1.id;
    function renderTodos() {
        let todoList = document.createElement('ul');
        for (let i = 0; i < todos.length; i++) {
            let todoItem = `<li id=${todos[i].id} class="p-2 list-inline"` + (todos[i].state === 2 ? "completed" : "") + `data-value=${todos[i].state}>${todos[i].name}</li>`;
            $(todoList).append(todoItem);
        }
        $('#todoContainer').append(todoList);
    }
    return {
        setters: [
            function (DataAccess_js_1_1) {
                DataAccess_js_1 = DataAccess_js_1_1;
            }
        ],
        execute: function () {
            todos = [
                {
                    id: 1,
                    name: 'Pick up drycleaning',
                    state: 1,
                },
                {
                    id: 2,
                    name: 'Save Gotham',
                    state: 1,
                },
                {
                    id: 3,
                    name: 'Clean batcave',
                    state: 2,
                }
            ];
            renderTodos();
            service = new DataAccess_js_1.TodoService([]);
            $('#add').on('click', function (e) {
                e.preventDefault();
                var newTodo = $('input').val();
                service.add(newTodo);
                renderTodos();
            });
            // mark completed
            $('li').on('click', function (e) {
                e.preventDefault();
                console.log('click', this.id);
                let index = todos.findIndex((t) => { t.id === this.id; });
                if (todos[index].state === 1) {
                    todos[index].state = 2;
                }
                else {
                    todos[index].state = 1;
                }
                renderTodos();
            });
            // clear completed
        }
    };
});
