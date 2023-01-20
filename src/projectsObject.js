export const myProjects = {
    projects: [],

    getProjects() {
        return this.projects;
    },

    addProject(newProject) {
        this.projects.push(newProject);
    }, 

    removeProject(projectToRemove) {
        let index = this.projects.findIndex((project) => project.name === projectToRemove.name);
        this.projects.splice(index, 1);
    }   
}