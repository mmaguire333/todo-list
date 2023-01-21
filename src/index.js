import createProject from "./createProject";
import { openProjectForm, closeProjectForm } from "./projectFormControl";
import { myProjects } from "./projectsObject";

let newProjectBtn = document.querySelector('.new-project');
let cancelButton = document.querySelector('.cancel-button');

// open form on clicking new project
newProjectBtn.addEventListener('click', () => {
    openProjectForm(); 
});

// close form on clicking cancel
document.addEventListener('click', function(e) {
    const target = e.target.closest('.cancel-button');

    if(target) {
        closeProjectForm();
    }
});

// create project and add it to project object on submit
document.addEventListener('click', function(e) {
    const target = e.target.closest('.submit-project-button');
    let projectsList = document.querySelector('.projects-list');
    let listItem = document.createElement('li');
    let deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    let newProjContainer = document.createElement('div');
    newProjContainer.classList.add('sidebar-project-container');
    newProjContainer.appendChild(listItem);
    newProjContainer.appendChild(deleteButton);

    if(target) {
        let newProj = createProject(document.getElementById('new-project-name').value, []);
        myProjects.addProject(newProj);
        closeProjectForm();
        listItem.textContent = newProj.name;
        projectsList.appendChild(newProjContainer);
    }
});

// make delete button functional
document.addEventListener('click', function(e) {
    const target = e.target.closest('.delete-button');

    if(target) {
        let projectName = target.previousElementSibling.textContent;
        myProjects.removeProject(projectName);
        target.parentNode.remove();
    }
});