export const myProjects = {
    projects: [],

    getProjects() {
        return this.projects;
    },

    addProject(newProject) {
        this.projects.push(newProject);
    }, 

    removeProject(projectToRemoveName) {
        let index = this.projects.findIndex((project) => project.name === projectToRemoveName);
        this.projects.splice(index, 1);
    },
    
    getAllTodos() {
        let allTodos = [];
        for(let i = 0; i < this.projects.length; i++) {
            for(let j = 0; j < this.projects[i].todos.length; j++) {
                allTodos.push(this.projects[i].todos[j]);
            }
        }
        return allTodos.sort((a, b) => a.dueDate - b.dueDate);
    }
}