import { openProjectForm, closeProjectForm } from "./projectFormControl";

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
