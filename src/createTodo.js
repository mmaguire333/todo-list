function createTodo(title, description, dueDate, priority, isDone) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        isDone: isDone
    };
}

export default createTodo;