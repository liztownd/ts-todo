import { Todo, TodoState } from './models.js';
import { TodoService } from './DataAccess.js';
import * as $ from './node_modules/jquery/dist/jquery.min.js';

declare var jquery: any;
declare var $: any;

function init () {
   // renderTodos();
}

let service = new TodoService([]);
var container = $('#container');
$('#add').on('click', function(e) {
    e.preventDefault();
    var newTodo = $('input').val();
    console.log('new todo', newTodo) 
    service.add(newTodo);
    init()
})


let todos = service.getAll();

// render todos
// todos.forEach(todo => 
//     console.log(`${todo.name} [${TodoState[todo.state]}]`));

// mark completed

// clear completed




