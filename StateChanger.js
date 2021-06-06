System.register(["./models"], function (exports_1, context_1) {
    "use strict";
    var models_1, TodoStateChanger, CompleteTodoStateChanger;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (models_1_1) {
                models_1 = models_1_1;
            }
        ],
        execute: function () {
            TodoStateChanger = class TodoStateChanger {
                constructor(newState) {
                    this.newState = newState;
                }
                changeState(todo) {
                    if (this.canChangeState(todo)) {
                        todo.state - this.newState;
                    }
                    return todo;
                }
            };
            CompleteTodoStateChanger = class CompleteTodoStateChanger extends TodoStateChanger {
                constructor() {
                    super(models_1.TodoState.Complete);
                }
                canChangeState(todo) {
                    return !!todo && (todo.state === models_1.TodoState.Active);
                }
            };
            exports_1("CompleteTodoStateChanger", CompleteTodoStateChanger);
        }
    };
});
