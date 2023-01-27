// New project form elements
let newProjectForm = document.createElement('form');
newProjectForm.classList.add('project-form');
let newProjectInput = document.createElement('input');
newProjectInput.type = 'text';
newProjectInput.id = 'new-project-name';
newProjectInput.name = 'new-project-name';
newProjectInput.required = true;
newProjectInput.placeholder = 'Enter project title';
    
let newProjectSubmit = document.createElement('button');
newProjectSubmit.type = 'button';
newProjectSubmit.textContent = "Submit";
newProjectSubmit.classList.add('submit-project-button');

let newProjectCancel = document.createElement('button');
newProjectCancel.type = 'button';
newProjectCancel.textContent = 'Cancel';
newProjectCancel.classList.add('cancel-button');

// put for elements together
let buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('project-form-buttons');
buttonsDiv.appendChild(newProjectSubmit);
buttonsDiv.appendChild(newProjectCancel);
newProjectForm.appendChild(newProjectInput);
newProjectForm.appendChild(buttonsDiv);


let projectsDiv = document.querySelector('.projects');

function openProjectForm() {
    projectsDiv.appendChild(newProjectForm);
}

function closeProjectForm() {
    newProjectInput.value = "";
    newProjectForm.remove();
}

export { openProjectForm, closeProjectForm }