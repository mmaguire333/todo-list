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

document.addEventListener('click', function(e) {
    const target = e.target.closest('.submit-project-button');
    let projectsList = document.querySelector('.projects-list');
    let listItem = document.createElement('li');

    if(target) {
        let newProj = createProject(document.getElementById('new-project-name').value, []);
        myProjects.addProject(newProj);
        closeProjectForm();
        listItem.textContent = newProj.name;
        projectsList.appendChild(listItem);
    }
});