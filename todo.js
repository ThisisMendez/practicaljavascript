var todoList = {
    todos:[], 
    addTodo (todoText) { 
        this.todos.push({
            todoText: todoText,
            completed: false
        }); 
    }, 
    changeTodo (position, todoText) { 
        this.todos[position-1].todoText = todoText; 
    }, 
    deleteTodo (position) { 
        this.todos.splice(position-1,1); 
    }, 
    toggleCompleted (position) { 
        var todo = this.todos[position-1];
        todo.completed = !todo.completed;
    }, 
    toggleAll () { 
        var totalTodos = this.todos.length; 
        var completedTodos = 0; 
        
        // Get number of completed todos. 
        this.todos.forEach(function(todo) { 
            if (todo.completed === true){
                completedTodos++;
            }
        });
        
        this.todos.forEach(function(todo) {
            //Case 1: If everything's true, make everything false 
            if (completedTodos === totalTodos){ 
                todo.completed = false;
            // Case 2: Otherwise, make everything true
        } else { 
            todo.completed = true;
            }
        });
    } 
};

var handlers = { 
    addTodo () { 
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo () { 
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput'); 
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value); 
        changeTodoPositionInput.value = ''; 
        changeTodoTextInput.value = '';
        view.displayTodos();
    }, 
    deleteTodo (position) { 
        todoList.deleteTodo(position); 
        view.displayTodos();
    }, 
    toggleCompleted () { 
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput'); 
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber); 
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    }, 
    toggleAll (){
        todoList.toggleAll(); 
        view.displayTodos();
    }
}; 

var view = { 
    displayTodos (){ 
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = ''; 

        todoList.todos.forEach(function(todo, position) { 
            var todoLi = document.createElement('li'); 
            var todoTextWithCompletion = '';
            
            if (todo.completed === true) { 
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else { 
                todoTextWithCompletion = '( ) ' + todo.todoText; 
            }
        
        todoLi.id = position; 
        todoLi.textContent = todoTextWithCompletion; 
        todoLi.appendChild(this.createDeleteButton()); 
        todosUl.appendChild(todoLi); 
        }, this); 
    }, 
        createDeleteButton (){ 
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete'; 
            deleteButton.className = 'deleteButton'; 
            return deleteButton; 
        }, 
        setUpEventListeners () { 
            var todosUl = document.querySelector('ul');

            todosUl.addEventListener('click', function (event) { 
                //Get the element that was clicked on. 
                var elementClicked = event.target; 

                //Check if elementClicked is a delete button. 
                if (elementClicked.className === 'deleteButton') { 
                    handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); 
                    }
            }); 
        }
    };

    view.setUpEventListeners ();

