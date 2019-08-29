var todoList = {
    todos:[], 
    displayTodos () { 
        console.log('My Todos', this.todos); 
    }, 
    addTodo (todoText) { 
        this.todos.push({
            todoText: todoText,
            completed: false
        }); 
        this.displayTodos(); 
    }, 
    changeTodo (position, todoText) { 
        this.todos[position].todoText = todoText; 
        this.displayTodos(); 
    }, 
    deleteTodo (position) { 
        this.todos.splice(position,1); 
        this.displayTodos();
    }, 
    toggleCompleted (position) { 
        var todo = this.todos[position];
        todo.completed = todo.completed;
        this.displayTodos();
    }
}; 

