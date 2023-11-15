// Selecting DOM elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;

        // Append the new list item to the task list
        taskList.appendChild(li);

        // Save tasks to local storage
        saveTasksToLocalStorage();

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to delete a task
function deleteTask(element) {
    const li = element.parentElement;
    taskList.removeChild(li);

    // Save tasks to local storage after deletion
    saveTasksToLocalStorage();
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
    const tasks = [];
    const taskElements = document.querySelectorAll('li');

    taskElements.forEach((taskElement) => {
        tasks.push(taskElement.textContent.trim());
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        const tasks = JSON.parse(storedTasks);

        tasks.forEach((taskText) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${taskText}
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }
}

// Load tasks from local storage when the page is loaded
loadTasksFromLocalStorage();
