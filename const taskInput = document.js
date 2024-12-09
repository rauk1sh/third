const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    if (taskInput.value !== "") {
        addTask(taskInput.value);
        taskInput.value = "";                        
    }
});

function addTask(taskText) {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="done-btn">Done</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    
    taskList.appendChild(listItem);
}

taskList.addEventListener('click', (event) => {
    const listItem = event.target.parentElement;

    if (event.target.classList.contains("delete-btn")) {
        taskList.removeChild(listItem);
    } else if (event.target.classList.contains("done-btn")) {
        const taskText = listItem.querySelector('.task-text');
        taskText.classList.toggle('done');
    } else if (event.target.classList.contains("edit-btn")) {
        const taskText = listItem.querySelector('.task-text');
        const newText = prompt("Edit the task:", taskText.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskText.textContent = newText;
        }
    }
    
});



