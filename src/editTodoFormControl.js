let formContainer = document.createElement('form');
formContainer.classList.add('todo-form-container');

let titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.classList.add('todo-title-input');
titleInput.required = true;
titleInput.placeholder = 'Title:';

let descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.classList.add('todo-description-input');
descriptionInput.required = true;
descriptionInput.placeholder = 'Description:';

let dateLabel = document.createElement('label');
dateLabel.textContent = 'Due Date:';
dateLabel.for = 'due-date';
let dueDateInput = document.createElement('input');
dueDateInput.type = 'date';
dueDateInput.classList.add('duedate-input');
dueDateInput.name = 'due-date';
dueDateInput.required = true;

let priorityLabel = document.createElement('label');
priorityLabel.textContent = 'Is this todo high, medium, or low priority?';
priorityLabel.for = 'priority';
let priorityInput = document.createElement('select');
priorityInput.id = 'todo-priority';
priorityInput.name = 'priority';
priorityInput.required = true;

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

let statusLabel = document.createElement('label');
statusLabel.textContent = 'Has this todo been completed?';
statusLabel.for = 'todo-status-dropdown';
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
formContainer.appendChild(dateLabel);
formContainer.appendChild(dueDateInput);
formContainer.appendChild(priorityLabel)
formContainer.appendChild(priorityInput);
formContainer.appendChild(statusLabel);
formContainer.appendChild(statusDropdownInput);
formContainer.appendChild(buttonDiv);

let content = document.querySelector('.content');

function openEditForm(currentTodo) {
    titleInput.value = currentTodo.title;
    descriptionInput.value = currentTodo.description;
    let currentYear = currentTodo.dueDate.getFullYear().toString();
    let currentMonth = (currentTodo.dueDate.getMonth() + 1).toString();
    if(currentMonth.length === 1) { 
        currentMonth = "0" + currentMonth;
    }
    let currentDayofMonth = currentTodo.dueDate.getDate().toString();
    dueDateInput.value = currentYear + "-" + currentMonth + "-" + currentDayofMonth;

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