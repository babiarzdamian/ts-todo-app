const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');

const tasks: string[] = ['take trash out', 'feed the cat', 'go to gym'];

const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task) => {
        const taskElement: HTMLElement = document.createElement('li');
        taskElement.innerText = task;

        console.log(taskElement);

        tasksContainerElement.appendChild(taskElement);
    });
};

const addTask = (task: string) => {
    tasks.push(task);
};

addButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    addTask(taskNameInputElement.value);
    taskNameInputElement.value = '';

    render();
});

render();
