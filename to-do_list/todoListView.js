const TodoList = {
    view: () => {
        return m('.container', [
            m('h1', 'Todo List'),
            m('input', {
                type: text,
                placeholder: "Add new task",
                oninput: () => {
                    taskInput = e.target.value;
                }
            }),
            m('button', {
                onclick: () => {
                    storageUtility.addTask(taskInput);
                    taskInput = '';
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