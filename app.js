System.register(["./models.js", "./DataAccess.js"], function (exports_1, context_1) {
    "use strict";
    var models_js_1, DataAccess_js_1, service, todos;
    var __moduleName = context_1 && context_1.id;
    function clone(value) {
        var clone = JSON.stringify(value);
        return JSON.parse(clone);
    }
    return {
        setters: [
            function (models_js_1_1) {
                models_js_1 = models_js_1_1;
            },
            function (DataAccess_js_1_1) {
                DataAccess_js_1 = DataAccess_js_1_1;
            }
        ],
        execute: function () {
            service = new DataAccess_js_1.TodoService([]);
            service.add({
                id: 1,
                name: 'Pick up drycleaning',
                state: models_js_1.TodoState.New,
            });
            todos = service.getAll();
            todos.forEach(function (todo) {
                return console.log(todo.name + " [" + models_js_1.TodoState[todo.state] + "]");
            });
            // moved to DataAccess.ts
            // class TodoService implements ITodoService {
            //     static lastId: number = 0;
            //     private get nextId() {
            //         return TodoService.lastId += 1;
            //     }
            //     private set nextId(nextId) {
            //         TodoService.lastId = nextId - 1;
            //     }
            //     constructor(private todos: Todo[]) {
            //     }
            //     add(todo: Todo) {
            //         todo.id = this.nextId;
            //         this.todos.push(todo);
            //         return todo
            //     }
            //     getAll(): Todo[] {
            //         var clone = clone(todo)
            //         return clone;
            //     }
            //     getById(todoId: number): Todo {
            //         var filtered = this.todos.filter(x => x.id === todoId);
            //         if(filtered.length) {
            //             return filtered[0];
            //         }
            //         return null;
            //     }
            //     delete(todoId: number): void {
            //         var toDelete = this.getById(todoId);
            //         var deletedIndex = this.todos.indexOf(toDelete);
            //         this.todos.splice(deletedIndex, 1);
            //     }
            // }
            // moved to StateChanger.ts
            // abstract class TodoStateChanger {
            //     constructor(protected newState: TodoState) {
            //     }
            //     abstract canChangeState(todo: Todo): boolean;
            //     changeState(todo: Todo): Todo {
            //         if (this.canChangeState(todo)) {
            //             todo.state - this.newState
            //         }
            //         return todo;
            //     }
            // }
            // class CompleteTodoStateChanger extends TodoStateChanger {
            //     constructor() {
            //         super(TodoState.Complete);
            //     }
            //     canChangeState(todo: Todo): boolean {
            //         return !!todo && (
            //             todo.state === TodoState.Active
            //             || todo.state === TodoState.Deleted
            //         );
            //     }
            // }
            // Moved to models.ts
            // interface Todo {
            //     id: number;
            //     name: string;
            //     state: TodoState;
            //};
            // moved to models.ts
            // enum TodoState {
            //     New = 1,
            //     Active,
            //     Complete,
            //     Deleted,
            // }
            // moved to DataAccess.ts
            // interface ITodoService {
            //     add(todo: Todo): Todo,
            //     delete(todoId: number): void,
            //     getAll(): Todo[],
            //     getById(todoId: number): Todo,
            // }
            // interface jQuery {
            //     (selector: (string | any)): jQueryElement,
            //     fn: any;
            //     version: number,
            // }
            // interface jQueryElement {
            //     data(name: string): any,
            //     data(name: string, data: any): jQueryElement
            // }
            // interface jQueryElement {
            //     todo(): Todo,
            //     todo(todo: Todo): jQueryElement
            // }
            // var $ = <jQuery>function (selector) {
            //     // Find DOM element
            // }
            // $.fn.todo = function (todo?: Todo): Todo {
            //     if (todo) {
            //         $(this).data('todo', todo)
            //     }
            //     else {
            //         return $(this).data('todo')
            //     }
            // }
            // var container = $('#container');
            // var todo: Todo = {
            //     name: "Pick up drycleaning",
            //     get state() {
            //         return this._state
            //     },
            //     set state(newState) {
            //         this._state = newState
            //     }
            // }
            // container.data('todo', todo);
            // var savedTodo = container.data('todo');
            // container.todo(todo)
        }
    };
});
