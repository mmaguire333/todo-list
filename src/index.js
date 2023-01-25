import createProject from "./createProject";
import createTodo from "./createTodo";
import { openProjectForm, closeProjectForm } from "./projectFormControl";
import { myProjects } from "./projectsObject";
import { closeTodoForm, openTodoForm } from "./todoFormControl";
import { displayTodo } from "./todoDisplayControl";

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
    listItem.classList.add('sidebar-project-item');

    let deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');

    let newProjContainer = document.createElement('div');
    newProjContainer.classList.add('sidebar-project-container');
    newProjContainer.appendChild(listItem);
    newProjContainer.appendChild(deleteButton);

    if(target) {
        for(let i = 0; i < myProjects.getProjects().length; i++) {
            if(document.getElementById('new-project-name').value === myProjects.getProjects()[i].name) {
                alert("A project with this name already exists. Please choose a different name.");
                return;
            }
        }

        let newProj = createProject(document.getElementById('new-project-name').value, []);
        myProjects.addProject(newProj);
        closeProjectForm();
        listItem.textContent = newProj.name;
        projectsList.appendChild(newProjContainer);
    }
});

// make project delete button functional
document.addEventListener('click', function(e) {
    const target = e.target.closest('.delete-button');

    if(target) {

        let projectName = target.previousElementSibling.textContent;

        // remove project from display if currently being displayed
        if(document.querySelector('.content-title').textContent === projectName) {
            document.querySelector('.content-title').textContent = "";
            document.getElementById('add-todo-button').style.display = 'none';
            
            let list = document.querySelector('.todos');
            while(list.firstChild) {
                list.firstChild.remove();
            }
        }

        // remove project from project object and from sidebar display
        myProjects.removeProject(projectName);
        target.parentNode.remove();
    }
});

// highlight project in sidebar on click and display it in content section
document.addEventListener('click', function(e) {
    const target = e.target.closest('.sidebar-project-item');

    if(target) {
        // highlight within sidebar
        let projectDivs = document.querySelectorAll('.sidebar-project-item');
        for(let i = 0; i < projectDivs.length; i++) {
            projectDivs[i].style.backgroundColor = 'transparent';
        }
        target.style.backgroundColor = 'lightgray';

        // remove content currently displayed and add content associated with clicked project
        let content = document.querySelector('.content');

        let contentTitle = document.querySelector('.content-title');
        let contentTodos = document.querySelector('.todos');
        
        while(contentTodos.firstChild) {
            contentTodos.firstChild.remove();
        }

        contentTitle.textContent = target.textContent;

        let addTodoBtn = document.getElementById('add-todo-button');
        if(addTodoBtn.style.display === 'none') {
            addTodoBtn.style.display = 'block';
        }
        

        //load todos for current project
        let currentProject = myProjects.getProjects().find((project) => project.name === contentTitle.textContent);
        let currentTodos = currentProject.todos;
        for(let i = 0; i < currentTodos.length; i++) {
            displayTodo(currentTodos[i]);
        }

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
});

// create and display new todo on clicking submit
document.addEventListener('click', function(e) {
    const target = e.target.closest('#submit-todo');

    if(target) {
        let contentTitle = document.querySelector('.content-title');
        let currentProject = myProjects.getProjects().find((project) => project.name === contentTitle.textContent);
        
        let newTitle = document.querySelector('.todo-title-input').value;
        let newDescription = document.querySelector('.todo-description-input').value;
        let newDueDate = document.querySelector('.duedate-input').value;
        let newPriority = document.getElementById('todo-priority').value;
        let newStatus = document.getElementById('todo-status-dropdown').value;
        
        let newTodo = createTodo(newTitle, newDescription, newDueDate, newPriority, newStatus);
        currentProject.addTodo(newTodo);

        closeTodoForm();
        displayTodo(newTodo);
    }
});

// functionality for delete button