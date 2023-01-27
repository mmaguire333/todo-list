let formContainer = document.createElement('form');
formContainer.classList.add('todo-form-container');

let titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.classList.add('todo-title-input');
titleInput.required = true;

let descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.classList.add('todo-description-input');
descriptionInput.required = true;

let dueDateInput = document.createElement('input');
dueDateInput.type = 'date';
dueDateInput.classList.add('duedate-input');
dueDateInput.required = true;

let priorityInput = document.createElement('select');
priorityInput.id = 'todo-priority';
priorityInput.required = true;

let highPriority = document.createElement('option');
highPriority.textContent = 'High Priority';
highPriority.value = 'High';
highPriority.selected = true;

let mediumPriority = document.createElement('option');
mediumPriority.textContent = 'Medium Priority';
mediumPriority.value = 'Medium';

let lowPriority = document.createElement('option');
lowPriority.textContent = 'Low Priority';
lowPriority.value = 'Low';

priorityInput.appendChild(highPriority);
priorityInput.appendChild(mediumPriority);
priorityInput.appendChild(lowPriority);

let statusDropdownInput = document.createElement('select');
statusDropdownInput.id = 'todo-status-dropdown';
statusDropdownInput.name = 'todo-status-dropdown';
statusDropdownInput.required = true;

let noStatus = document.createElement('option');
noStatus.textContent = 'No';
noStatus.value = 'no';
noStatus.selected = true;

let yesStatus = document.createElement('option');
yesStatus.textContent = 'Yes';
yesStatus.value = 'yes';

statusDropdownInput.appendChild(yesStatus);
statusDropdownInput.appendChild(noStatus);

let submitBtn = document.createElement('button');
submitBtn.type = 'button';
submitBtn.textContent = 'Submit';
submitBtn.id = 'submit-todo';

let cancelBtn = document.createElement('button');
cancelBtn.type = 'button';
cancelBtn.textContent = 'Cancel';
cancelBtn.id = 'cancel-todo';

let buttonDiv = document.createElement('div');
buttonDiv.appendChild(submitBtn);
buttonDiv.appendChild(cancelBtn);
formContainer.appendChild(titleInput);
formContainer.appendChild(descriptionInput);
formContainer.appendChild(dueDateInput);
formContainer.appendChild(priorityInput);
formContainer.appendChild(statusDropdownInput);
formContainer.appendChild(buttonDiv);

let content = document.querySelector('.content');

function openTodoForm() {
    content.appendChild(formContainer);
}

function closeTodoForm() {
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    noStatus.selected = true;
    highPriority.selected = true;
    formContainer.remove();
}

export { openTodoForm, closeTodoForm }