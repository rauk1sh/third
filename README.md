Task Manager: Документация
Описание
Task Manager — это простое веб-приложение для управления задачами. Оно позволяет:

- Добавлять задачи.
- Отмечать задачи как выполненные.
- Редактировать текст задач.
- Удалять задачи.


1. Структура проекта
Проект состоит из 3 основных файлов:

1. HTML (index.html) — структура веб-страницы.
2. CSS (style.css) — стили для визуального оформления страницы.
3. JavaScript (script.js) — функциональность для управления задачами.


2. HTML: Структура страницы
Файл index.html содержит следующие основные элементы:

Заголовок и подключение стилей/шрифтов:
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="style.css">
    <title>Task Manager</title>

</head>

Основной контент:

<body>
    
    <div class="container">
        
        <div class="content">
            
            <h1>Task Manager</h1>
            
            <input type="text" id="task-input" placeholder="Add a new task...">
            
            <button id="add-btn">Add Task</button>
            
            <ul id="task-list"></ul>
        
        </div>
    
    </div>

</body>


Описание ключевых элементов:

- "task-input": поле ввода для новой задачи.
- "add-btn": кнопка для добавления новой задачи.
- "task-list": список задач, который обновляется динамически



3. CSS: Стили оформления
Файл style.css определяет внешний вид приложения.

Основные элементы стиля:
- Общие настройки:

body {
    
    margin: 0;
    
    padding: 0;
    
    height: 100vh;
    
    font-family: 'Montserrat', sans-serif;
    
    background-image: linear-gradient(to bottom right, rgb(34,14,105), rgb(10,213,240));

}

- Используется градиент для фона.
- Шрифт "Montserrat" подключён из Google Fonts.


- Контейнер и содержимое:

.container {
    
    display: flex;
    
    justify-content: center;
    
    align-items: center;
    
    height: 100vh;

}

.content {
    
    background-color: white;
    
    min-height: 400px;
    
    width: 540px;
    
    padding: 20px;
    
    border-radius: 10px;

}


- Стили кнопок задач:

-  button {

       padding: 10px 20px;

       background-color: #007bff;

       border: none;

       border-radius: 5px;

       color: white;

       cursor: pointer;   

}

.delete-btn {
    
    background-color: #dc3545;

}



4. JavaScript: Функциональность
Файл script.js отвечает за взаимодействие пользователя с приложением.

Основные функции:
1. Добавление задачи:

addBtn.addEventListener('click', () => {
   
    if (taskInput.value !== "") {
        addTask(taskInput.value);
        taskInput.value = "";                        
    }

});

- При нажатии на кнопку "Add Task" задача добавляется в список.


2. Создание новой задачи:

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


3. Обработка событий:

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

Функции:

- delete-btn: Удаляет задачу.
- done-btn: Помечает задачу как выполненную (перечёркивание текста).
- edit-btn: Позволяет редактировать текст задачи
