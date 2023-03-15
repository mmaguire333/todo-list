function addToStorage(project) {
    let todoArray = [];
    for(let i = 0; i < project.todos.length; i++) {
        todoArray.push({title: project.todos[i].title, description: project.todos[i].description, dueDate: project.todos[i].dueDate.toString(), priority: project.todos[i].priority, isDone: project.todos[i].isDone});
    }
    
    localStorage.setItem(project.name, JSON.stringify(todoArray));
}

function removeProjectFromStorage(nameOfProject) {
    localStorage.removeItem(nameOfProject);
}

function removeTodoFromStorage(project, todo) {
    for(let i = 0; i < localStorage.length; i++) {
        if(project.name === localStorage.key(i)) {
            let currentTodos = JSON.parse(localStorage.getItem(localStorage.key(i)));
            for(let j = 0; j < currentTodos.length; j++) {
                if(currentTodos[j].title === todo.title && currentTodos[j].description === todo.description) {
                    currentTodos.splice(j, 1);
                    localStorage.setItem(project.name, JSON.stringify(currentTodos));
                }
            }
        }
    }
}

function updateTodoInStorage(project, oldTodo, newTodo) {
    for(let i = 0; i < localStorage.length; i++) {
        if(project.name === localStorage.key(i)) {
            let currentTodos = JSON.parse(localStorage.getItem(localStorage.key(i)));
            for(let j = 0; j < currentTodos.length; j++) {
                if(currentTodos[j].title === oldTodo.title && currentTodos[j].description === oldTodo.description) {
                    currentTodos.splice(j, 1, newTodo);
                    localStorage.setItem(project.name, JSON.stringify(currentTodos));
                }
            }
        }
    }
}

export { addToStorage, removeProjectFromStorage, removeTodoFromStorage, updateTodoInStorage }