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
            lastId = 0;
            TodoService = /** @class */ (function () {
                function TodoService(todos) {
                    this.todos = todos;
                }
                Object.defineProperty(TodoService.prototype, "nextId", {
                    set: function (nextId) {
                        lastId = nextId - 1;
                    },
                    enumerable: false,
                    configurable: true
                });
                TodoService.prototype.add = function (todo) {
                    todo.id = generateTodoId();
                    this.todos.push(todo);
                    return todo;
                };
                TodoService.prototype.getAll = function () {
                    return clone(this.todos);
                };
                TodoService.prototype.getById = function (todoId) {
                    var filtered = this.todos.filter(function (x) { return x.id === todoId; });
                    if (filtered.length) {
                        return filtered[0];
                    }
                    return null;
                };
                TodoService.prototype.delete = function (todoId) {
                    var toDelete = this.getById(todoId);
                    var deletedIndex = this.todos.indexOf(toDelete);
                    this.todos.splice(deletedIndex, 1);
                };
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
        }
    };
});
