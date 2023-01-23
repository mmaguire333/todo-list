import createProject from "./createProject";
import { openProjectForm, closeProjectForm } from "./projectFormControl";
import { myProjects } from "./projectsObject";
import { closeTodoForm, openTodoForm } from "./todoFormControl";

let newProjectBtn = document.querySelector('.new-project');

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

// highlight project in sidebar on click and display it in content section
document.addEventListener('click', function(e) {
    const target = e.target.closest('.sidebar-project-container');

    if(target) {
        // highlight within sidebar
        let projectDivs = document.querySelectorAll('.sidebar-project-container');
        for(let i = 0; i < projectDivs.length; i++) {
            projectDivs[i].style.backgroundColor = 'transparent';
        }
        target.style.backgroundColor = 'lightgray';

        // display within content section
        let content = document.querySelector('.content');

        let contentTitle = document.querySelector('.content-title');
        let contentTodos = document.querySelector('.todos');
        contentTitle.textContent = target.firstChild.textContent;

        let addTodoBtn = document.createElement('button');
        addTodoBtn.type = 'button';
        addTodoBtn.id = 'add-todo-button';
        addTodoBtn.textContent = 'Add Todo';
        content.appendChild(addTodoBtn);

        //load todos for current project
        let currentProject = myProjects.getProjects.find((project) => project.name === contentTitle.textContent);

    }
});


// load form to create todos on clicking add todo button
document.addEventListener('click', function(e) {
    const target = e.target.closest('#add-todo-button');

    if(target) {
        openTodoForm();
    }
});

// close todo form on clicking cancel
document.addEventListener('click', function(e) {
    const target = e.target.closest('#cancel-todo');

    if(target) {
        closeTodoForm();
    }
})