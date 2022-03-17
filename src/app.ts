const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');

interface Task {
    name: string;
    done: boolean;
    category?: string;
}

const category: string[] = ['general', 'work', 'gym', 'work'];

const tasks: Task[] = [
    {
        name: 'take trash out',
        done: false,
    },
    { name: 'feed the cat', done: true },
    { name: 'go to gym', done: false, category: 'gym' },
];

const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const id: string = `task-${index}`;
        const taskElement: HTMLElement = document.createElement('li');
        if (task.category) {
            taskElement.classList.add(task.category);
        }

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

const addTask = (task: Task) => {
    tasks.push(task);
};

addButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false });
    taskNameInputElement.value = '';

    render();
});

addTask({ name: 'task from Boss', done: true, category: 'work' });

render();
