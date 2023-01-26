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

let priorityInput = document.createElement('select');
priorityInput.id = 'todo-priority';

let highPriority = document.createElement('option');
highPriority.textContent = 'High Priority';
highPriority.value = 'High';

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

let noStatus = document.createElement('option');
noStatus.textContent = 'No';
noStatus.value = 'no';
noStatus.selected = true;

let yesStatus = document.createElement('option');
yesStatus.textContent = 'Yes';
yesStatus.value = 'yes';

statusDropdownInput.appendChild(yesStatus);
statusDropdownInput.appendChild(noStatus);

let saveChangesBtn = document.createElement('button');
saveChangesBtn.type = 'button';
saveChangesBtn.textContent = 'Save Changes';
saveChangesBtn.id = 'save-todo-changes';

let cancelBtn = document.createElement('button');
cancelBtn.type = 'button';
cancelBtn.textContent = 'Cancel';
cancelBtn.id = 'cancel-todo';

let buttonDiv = document.createElement('div');
buttonDiv.appendChild(saveChangesBtn);
buttonDiv.appendChild(cancelBtn);
formContainer.appendChild(titleInput);
formContainer.appendChild(descriptionInput);
formContainer.appendChild(dueDateInput);
formContainer.appendChild(priorityInput);
formContainer.appendChild(statusDropdownInput);
formContainer.appendChild(buttonDiv);

let content = document.querySelector('.content');

function openEditForm(currentTodo) {
    titleInput.value = currentTodo.title;
    descriptionInput.value = currentTodo.description;
    dueDateInput.value = currentTodo.dueDate;

    if(currentTodo.priority === 'High') {
        highPriority.selected = true;
    } else if(currentTodo.priority === 'Medium') {
        mediumPriority.selected = true;
    } else {
        lowPriority.selected = true;
    }

    if(currentTodo.isDone === 'yes') {
        yesStatus.selected = true;
    } else {
        noStatus.selected = true;
    }

    content.appendChild(formContainer);
}

function closeEditForm() {
    formContainer.remove();
}

export { openEditForm, closeEditForm }