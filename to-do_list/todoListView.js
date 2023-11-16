import { storageUtility } from './storageUtility.js';

const TodoList = {
    // storageUtility: {},
    // bringStoUtiInScope: function(storageUtility) {
    //     this.storageUtilty = storageUtility;
    // },
    taskInput: '',

    view: function() {
        return m('.container', [
            m('h1', 'Todo List'),
            m('input[type=text]', {
                placeholder: "Add new task",
                oninput: (e) => {
                    this.taskInput = e.target;
                }
            }),
            m('button', {
                onclick: () => {
                    storageUtility.addTask(this.taskInput.value);
                    this.taskInput.value = '';
                },
            }, 'Add Task'),
            m("ul", storageUtility.tasks.map(function (task, index) {
                return m("li", [
                    task,
                    m("button.delete-btn", {
                        onclick: function () {
                            storageUtility.deleteTask(index);
                        },
                    }, "Delete"),
                ]);
            })),
        ])
    }
}

export { TodoList };