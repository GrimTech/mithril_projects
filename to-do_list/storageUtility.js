const storageUtility = {
    tasks: [],
    error: '',
    
    addTask: ( taskText ) => {
        // taskText.trim() !== '' ? this.tasks.push(taskText) : this.error.push('empty task');
        if ( taskText.trim() !== '' ) {
            this.tasks.push( taskText );
            this.saveTasksToLocalStorage();
        }
        else {
            this.error = "Empty task";
        }
    },

    saveTasksToLocalStorage: () => {
        const taskElements = document.querySelectorAll('li p');

        taskElements.forEach(( taskElement ) => {
            tasks.push(taskElement.textContent.trim());
        })
        localStorage.setItem('tasks', JSON.stringify( tasks ));
    },

    loadTasksFromLocalStorage: () => {
        const storedTasks = localStorage.getItem('tasks');

        storedTasks ? this.tasks = JSON.parse( storedTasks ) : this.error = "No tasks stored";
    }
}

export { storageUtility }; 