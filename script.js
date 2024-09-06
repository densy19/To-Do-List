document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});


function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}