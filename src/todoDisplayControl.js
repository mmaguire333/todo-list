let todosList = document.querySelector('.todos');




function displayTodo(todo) {
    let listElement = document.createElement('li');
    let todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');

    let todoTitle = document.createElement('h3');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.title;

    let todoDescription = document.createElement('p');
    todoDescription.classList.add('todo-description-paragraph');
    todoDescription.textContent = todo.description;

    let todoDueDate = document.createElement('p');
    todoDueDate.classList.add('todo-due-date');
    todoDueDate.textContent = todo.dueDate;

    let todoPriority = document.createElement('p');
    todoPriority.classList.add('.todo-priority');
    todoPriority.textContent = todo.priority;

    let todoStatus = document.createElement('p');
    todoStatus.classList.add('.todo-status');
    todoStatus.textContent = todo.isDone;

    let editTodoBtn = document.createElement('button');
    editTodoBtn.type = 'button';
    editTodoBtn.id = 'edit-todo-btn';
    editTodoBtn.textContent = 'Edit';

    let deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.type = 'button';
    deleteTodoBtn.id = 'delete-todo-button';
    deleteTodoBtn.textContent = 'Delete';

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDescription);
    todoContainer.appendChild(todoPriority);
    todoContainer.appendChild(todoStatus);
    todoContainer.appendChild(todoDueDate);
    todoContainer.appendChild(editTodoBtn);
    todoContainer.appendChild(deleteTodoBtn);

    listElement.appendChild(todoContainer);
    todosList.appendChild(listElement);
}

function removeTodoFromDisplay() {

}

export { displayTodo, removeTodoFromDisplay }