System.register([], function (exports_1, context_1) {
    "use strict";
    var lastId, TodoService;
    var __moduleName = context_1 && context_1.id;
    function generateTodoId() {
        return lastId += 1;
    }
    function clone(value) {
        var clone = JSON.stringify(value);
        return JSON.parse(clone);
    }
    return {
        setters: [],
        execute: function () {
            lastId = 4;
            TodoService = class TodoService {
                constructor(todos) {
                    this.todos = todos;
                }
                set nextId(nextId) {
                    lastId = nextId - 1;
                }
                add(todo) {
                    todo.id = generateTodoId();
                    this.todos.push(todo);
                    return todo;
                }
                getAll() {
                    return clone(this.todos);
                }
                getById(todoId) {
                    var filtered = this.todos.filter(x => x.id === todoId);
                    if (filtered.length) {
                        return filtered[0];
                    }
                    return null;
                }
                delete(todoId) {
                    var toDelete = this.getById(todoId);
                    var deletedIndex = this.todos.indexOf(toDelete);
                    this.todos.splice(deletedIndex, 1);
                }
            };
            exports_1("TodoService", TodoService);
        }
    };
});
