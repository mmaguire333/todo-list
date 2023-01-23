let formContainer = document.createElement('div');
formContainer.classList.add('todo-form-container');

let titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.classList.add('todo-title-input');

let descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.classList.add('todo-description-input');

let dueDateInput = document.createElement('input');
dueDateInput.type = 'date';
dueDateInput.classList.add('duedate-input');

let statusDropdownInput = document.createElement('select');
statusDropdownInput.id = 'todo-status-dropdown';
statusDropdownInput.name = 'todo-status-dropdown';

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
    formContainer.remove();
}

export { openTodoForm, closeTodoForm }