import { Todo, TodoState } from './models.js';
import { TodoService } from './DataAccess.js';
import * as $ from './node_modules/jquery/dist/jquery.min.js';

declare var jquery: any;
declare var $: any;

let todos = [
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
]

renderTodos()

function renderTodos(){
    let todoList = document.createElement('ul')
    for (let i=0; i<todos.length; i++){
        let todoItem = 
        `<li id=${todos[i].id} class="p-2 list-inline"`+ (todos[i].state === 2 ? "completed" : "") + `data-value=${todos[i].state}>${todos[i].name}</li>`
        $(todoList).append(todoItem)
    }
    $('#todoContainer').append(todoList)
}


let service = new TodoService([]);

$('#add').on('click', function(e) {
    e.preventDefault();
    var newTodo = $('input').val();
    service.add(newTodo);
    renderTodos();
})

// mark completed

$('li').on('click', function(e) {
    e.preventDefault();
    console.log('click', this.id)
    let index = todos.findIndex((t) => {t.id === this.id })
    if (todos[index].state === 1) {
        todos[index].state = 2
    }
    else {
        todos[index].state = 1
    }
    renderTodos()
})


// clear completed
