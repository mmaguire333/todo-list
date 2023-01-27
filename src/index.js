import createProject from "./createProject";
import createTodo from "./createTodo";
import { openProjectForm, closeProjectForm } from "./projectFormControl";
import { myProjects } from "./projectsObject";
import { closeTodoForm, openTodoForm } from "./todoFormControl";
import { displayTodo } from "./todoDisplayControl";
import { openEditForm, closeEditForm } from "./editTodoFormControl";
import { isToday, isThisWeek } from "date-fns";

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
        document.querySelector('.today').style.backgroundColor = 'transparent';
        document.querySelector('.this-week').style.backgroundColor = 'transparent';
        document.querySelector('.all').style.backgroundColor = 'transparent';
        target.style.backgroundColor = 'lightgray';

        // remove content currently displayed and add content associated with clicked project
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
        let dateString = document.querySelector('.duedate-input').value;
        let newYear = parseInt(dateString.substring(0,4));
        let newMonth = parseInt(dateString.substring(5,7)) - 1;
        let newDay = parseInt(dateString.substring(8));
        let newDueDate = new Date(newYear, newMonth, newDay);
        let newPriority = document.getElementById('todo-priority').value;
        let newStatus = document.getElementById('todo-status-dropdown').value;
        
        if(!document.querySelector('.todo-form-container').checkValidity()) {
            alert("Please fill out all required fields.");
            return;
        }

        let newTodo = createTodo(newTitle, newDescription, newDueDate, newPriority, newStatus);
        currentProject.addTodo(newTodo);

        closeTodoForm();
        displayTodo(newTodo);
    }
});

// functionality for delete todo button
document.addEventListener('click', function(e) {
    const target  = e.target.closest('#delete-todo-button');

    if(target) {
        let currentProject = myProjects.getProjects().find((project) => project.name === document.querySelector('.content-title').textContent);
        let currentTodoTitle = target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        let currentTodoDescription = target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        let currentTodo = currentProject.todos.find((todo) => todo.title === currentTodoTitle && todo.description === currentTodoDescription);

        currentProject.removeTodo(currentTodo);

        let displayedList = document.querySelector('.todos');
        while(displayedList.firstChild) {
            displayedList.firstChild.remove();
        }
        
        let remainingTodos = currentProject.todos;
        for(let i = 0; i < remainingTodos.length; i++) {
            displayTodo(remainingTodos[i]);
        }
    }
});

// open edit form for current todo on clicking edit button
let currentlySelectedTodo;
document.addEventListener('click', function(e) {
    const target = e.target.closest('#edit-todo-btn');

    if(target) {
        let currentProject = myProjects.getProjects().find((project) => project.name === document.querySelector('.content-title').textContent);
        let currentTodoTitle = target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        let currentTodoDescription = target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        currentlySelectedTodo = currentProject.todos.find((todo) => todo.title === currentTodoTitle && todo.description === currentTodoDescription);

        openEditForm(currentlySelectedTodo);
    }
});

// functionality for cancel edit button
document.addEventListener('click', function(e) {
    const target = e.target.closest('#cancel-todo');

    if(target) {
        closeEditForm();
    }
});

// save and display changes after
document.addEventListener('click', function(e) {
    const target = e.target.closest('#save-todo-changes');

    if(target) {
        // values of edited form
        let newTitle = document.querySelector('.todo-title-input').value;
        let newDescription = document.querySelector('.todo-description-input').value;
        let dateString = document.querySelector('.duedate-input').value;
        let newYear = parseInt(dateString.substring(0,4));
        let newMonth = parseInt(dateString.substring(5,7)) - 1;
        let newDay = parseInt(dateString.substring(8));
        let newDueDate = new Date(newYear, newMonth, newDay);
        let newPriority = document.getElementById('todo-priority').value;
        let newStatus = document.getElementById('todo-status-dropdown').value;

        // get dom elements associated with currently selected todo
        let list = document.querySelector('.todos');
        let displayedTodos = list.children;
        let todoDom;
        for(let i = 0; i < displayedTodos.length; i++) {
            if(displayedTodos[i].firstChild.firstChild.textContent === currentlySelectedTodo.title && displayedTodos[i].firstChild.firstChild.nextSibling.textContent === currentlySelectedTodo.description) {
                todoDom = displayedTodos[i].firstChild;
            }
        }

        // set current todo values to values from edited form
        currentlySelectedTodo.title = newTitle;
        currentlySelectedTodo.description = newDescription;
        currentlySelectedTodo.dueDate = newDueDate;
        currentlySelectedTodo.priority = newPriority;
        currentlySelectedTodo.isDone = newStatus;

        // updated dom elements to the new values of the current todo
        todoDom.firstChild.textContent = newTitle;
        todoDom.firstChild.nextSibling.textContent = newDescription;
        todoDom.firstChild.nextSibling.nextSibling.textContent = newPriority;
        todoDom.firstChild.nextSibling.nextSibling.nextSibling.textContent = newStatus;
        todoDom.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.textContent = newDueDate;

        closeEditForm();
    }
});

let todaySection = document.querySelector('.today');
let thisWeekSection = document.querySelector('.this-week');
let allSection = document.querySelector('.all');

// highlight today section and display todos for today
todaySection.addEventListener('click', () => {
    thisWeekSection.style.backgroundColor = 'transparent';
    allSection.style.backgroundColor = 'transparent';
    todaySection.style.backgroundColor = 'lightgray';

    let projectDivs = document.querySelectorAll('.sidebar-project-item');
    for(let i = 0; i < projectDivs.length; i++) {
        projectDivs[i].style.backgroundColor = 'transparent';
    }

    document.querySelector('.content-title').textContent = 'Todos Due Today';
    document.getElementById('add-todo-button').style.display = 'none';

    let todos = document.querySelector('.todos');
    while(todos.firstChild) {
        todos.firstChild.remove();
    }

    let allTodos = myProjects.getAllTodos();
    for(let i = 0; i < allTodos.length; i++) {
        if(isToday(allTodos[i].dueDate)) {
            displayTodo(allTodos[i]);
        }
    }
});

// highlight this week section and display todos for this week
thisWeekSection.addEventListener('click', () => {
    todaySection.style.backgroundColor = 'transparent';
    allSection.style.backgroundColor = 'transparent';
    thisWeekSection.style.backgroundColor = 'lightgray';

    let projectDivs = document.querySelectorAll('.sidebar-project-item');
    for(let i = 0; i < projectDivs.length; i++) {
        projectDivs[i].style.backgroundColor = 'transparent';
    }

    document.querySelector('.content-title').textContent = 'Todos Due This Week';
    document.getElementById('add-todo-button').style.display = 'none';

    let todos = document.querySelector('.todos');
    while(todos.firstChild) {
        todos.firstChild.remove();
    }

    let allTodos = myProjects.getAllTodos();
    for(let i = 0; i < allTodos.length; i++) {
        if(isThisWeek(allTodos[i].dueDate)) {
            displayTodo(allTodos[i]);
        }
    }
});

// highlight all section and display todos for this week
allSection.addEventListener('click', () => {
    todaySection.style.backgroundColor = 'transparent';
    thisWeekSection.style.backgroundColor = 'transparent';
    allSection.style.backgroundColor = 'lightgray';

    let projectDivs = document.querySelectorAll('.sidebar-project-item');
    for(let i = 0; i < projectDivs.length; i++) {
        projectDivs[i].style.backgroundColor = 'transparent';
    }

    document.querySelector('.content-title').textContent = 'All Upcoming Todos';
    document.getElementById('add-todo-button').style.display = 'none';

    let todos = document.querySelector('.todos');
    while(todos.firstChild) {
        todos.firstChild.remove();
    }

    let allTodos = myProjects.getAllTodos();
    for(let i = 0; i < allTodos.length; i++) {
        displayTodo(allTodos[i]);
    }
});