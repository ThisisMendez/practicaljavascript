gvar todos = ['item1', 'item 2', "item 3']; 

// It should have a function to display todos. 
// 
function displayTodos() { 
    console.log('My todos:', todos)
}; 

// It should have a function to add todos. 
function add todo(todo) { 
    todos.push(todo); 
    displayTodos (); 
}

// It should have a function to change todos. 
function changeTodo (position, newValue) { 
    todos[position] = newValue; 
    displayTodos (); 
}

