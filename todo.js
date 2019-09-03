var todoList = {
    todos:[], 
    displayTodos () { 
        if (this.todos.length === 0){
            console.log('Your todo list is empty!');
        } else {
            console.log('My Todos:');
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true){
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText); 
                }
            }
        }
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
        todo.completed = !todo.completed;
        this.displayTodos();
    }
}; 

