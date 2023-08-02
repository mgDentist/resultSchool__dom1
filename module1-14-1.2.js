const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];
const body = document.querySelector('body');
const tasksList = document.createElement('div');
tasksList.className = 'tasks-list';
body.prepend(tasksList);

tasks.forEach(task => {
    const taskItem = document.createElement('div');
    taskItem.dataset.taskId = task.id;
    tasksList.append(taskItem);

    const mainContainer = document.createElement('div');
    mainContainer.className = 'task-item__main-container';
    taskItem.append(mainContainer);

    const mainContent = document.createElement('div');
    mainContent.className = 'task-item__main-content';
    mainContainer.append(mainContent);

    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';
    mainContent.append(checkboxForm);

    const inputCheckbox = document.createElement('input');
    inputCheckbox.className = 'checkbox-form__checkbox';
    inputCheckbox.type = 'checkbox';
    inputCheckbox.setAttribute('id', `task-${task.id}`);
    checkboxForm.append(inputCheckbox);

    const label = document.createElement('label');
    label.setAttribute('for', `task-${task.id}`);
    checkboxForm.append(label);

    const spanItemText = document.createElement('span');
    spanItemText.className = 'task-item__text';
    spanItemText.textContent = task.text;
    mainContent.append(spanItemText);

    const formButton = document.createElement('button');
    formButton.className = 'task-item__delete-button default-button delete-button';
    // formButton.setAttribute('class', 'task-item__delete-button');
    // formButton.classList.add('default-button');
    // formButton.classList.add('delete-button');
    formButton.dataset.deleteTaskId = task.id;
    // formButton.setAttribute('data-delete-task-id', task.id);
    formButton.textContent = 'Удалить';
    mainContainer.append(formButton);
});
