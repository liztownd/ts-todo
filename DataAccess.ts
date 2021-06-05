import { Todo } from './models';

let lastId: number = 0;

function generateTodoId() {
    return lastId += 1;
}

export interface ITodoService {
    add(todo: Todo): Todo,
    delete(todoId: number): void,
    getAll(): Todo[],
    getById(todoId: number): Todo,
}

export class TodoService implements ITodoService {

    private set nextId(nextId) {
        lastId = nextId - 1;
    }

    constructor(private todos: Todo[]) {
    }

    add(todo: Todo) {
        todo.id = generateTodoId();
        this.todos.push(todo);
        return todo
    }

    getAll(): Todo[] {
        var clone = JSON.stringify(this.todos)
        return JSON.parse(clone);
    }


    getById(todoId: number): Todo {
        var filtered = this.todos.filter(x => x.id === todoId);

        if (filtered.length) {
            return filtered[0];
        }
        return null;
    }

    delete(todoId: number): void {
        var toDelete = this.getById(todoId);
        var deletedIndex = this.todos.indexOf(toDelete);
        this.todos.splice(deletedIndex, 1);
    }
}

