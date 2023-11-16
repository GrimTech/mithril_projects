const storageUtility = {
    tasks: [],
    error: '',
    taskElements: document.querySelectorAll('li p'),
    
    addTask: function( taskText ) {
        // taskText.trim() !== '' ? this.tasks.push(taskText) : this.error.push('empty task');
        if ( taskText.trim() !== '' ) {
            this.tasks.push( taskText );
            this.saveTasksToLocalStorage();
        }
        else {
            this.error = "Empty task";
        }
    },

    saveTasksToLocalStorage: function() {
        this.taskElements.forEach(( taskElement ) => {
            this.tasks.push(taskElement.textContent.trim());
        })
        localStorage.setItem('tasks', JSON.stringify( this.tasks ));
    },

    loadTasksFromLocalStorage: function() {
        const storedTasks = localStorage.getItem('tasks');

        if (storedTasks) {
            this.tasks = JSON.parse(storedTasks);
        } 
        else {
            this.error = "No tasks stored";
        }
    },

    deleteTask: function(index) {
        this.tasks.splice(index, 1);
        this.saveTasksToLocalStorage();
    }
}

export { storageUtility }; 