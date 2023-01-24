function createProject(name, todos) {
    return {
        name: name,

        todos: todos,

        addTodo(newTodo) {
            this.todos.push(newTodo);
        },
        
        removeTodo(todoToRemove) {
            let index = this.todos.findIndex((todo) => todo.name === todoToRemove.name);
            this.todos.splice(index, 1);
        }
    };
}

export default createProject;