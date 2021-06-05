System.register(["./models"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var models_1, TodoStateChanger, CompleteTodoStateChanger;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (models_1_1) {
                models_1 = models_1_1;
            }
        ],
        execute: function () {
            TodoStateChanger = /** @class */ (function () {
                function TodoStateChanger(newState) {
                    this.newState = newState;
                }
                TodoStateChanger.prototype.changeState = function (todo) {
                    if (this.canChangeState(todo)) {
                        todo.state - this.newState;
                    }
                    return todo;
                };
                return TodoStateChanger;
            }());
            CompleteTodoStateChanger = /** @class */ (function (_super) {
                __extends(CompleteTodoStateChanger, _super);
                function CompleteTodoStateChanger() {
                    return _super.call(this, models_1.TodoState.Complete) || this;
                }
                CompleteTodoStateChanger.prototype.canChangeState = function (todo) {
                    return !!todo && (todo.state === models_1.TodoState.Active
                        || todo.state === models_1.TodoState.Deleted);
                };
                return CompleteTodoStateChanger;
            }(TodoStateChanger));
            exports_1("CompleteTodoStateChanger", CompleteTodoStateChanger);
        }
    };
});
