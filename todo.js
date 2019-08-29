var todoList = {
    todos:['item1', 'item 2', 'item 3'], 
    displayTodos () { 
        console.log('My Todos', this.todos); 
    }, 
    addTodo (todo) { 
        this.todos.push(todo); 
        this.displayTodos(); 
    }, 
    changeTodo (position, newValue) { 
        this.todos[position] = newValue; 
        this.displaytodos(); 
    }, 
    deleteTodo (position) { 
        this.todos.splice(position,1); 
        this.displayTodos();
    }
}; 

