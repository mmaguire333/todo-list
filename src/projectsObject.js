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
    }   
}