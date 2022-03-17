const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');

const tasks: {
    name: string;
    done: boolean;
}[] = [
    {
        name: 'take trash out',
        done: false,
    },
    { name: 'feed the cat', done: true },
    { name: 'go to gym', done: false },
];

const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const id: string = `task-${index}`;
        const taskElement: HTMLElement = document.createElement('li');

        const labelElement: HTMLLabelElement = document.createElement('label');
        labelElement.innerText = task.name;
        labelElement.setAttribute('for', id);

        const checkboxElement: HTMLInputElement =
            document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener(
            'change',
            () => (task.done = !task.done)
        );

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);

        tasksContainerElement.appendChild(taskElement);
    });
};

const addTask = (task: { name: string; done: boolean }) => {
    tasks.push(task);
};

addButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false });
    taskNameInputElement.value = '';

    render();
});

addTask({ name: 'task from Boss', done: true });

render();
