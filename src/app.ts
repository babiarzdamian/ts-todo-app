const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement =
    document.querySelector('.categories');

let selectedCategory: Category;

type Category = 'general' | 'work' | 'gym' | 'hobby';

interface Task {
    name: string;
    done: boolean;
    category?: Category;
}

const categories: Category[] = ['general', 'work', 'gym', 'hobby'];

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

const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement: HTMLElement = document.createElement('li');

        const radioInputElement: HTMLInputElement =
            document.createElement('input');
        radioInputElement.type = 'radio';
        radioInputElement.name = 'category';
        radioInputElement.value = category;
        radioInputElement.id = `cateogry-${category}`;
        radioInputElement.addEventListener('change', () => {
            selectedCategory = category;
        });

        const radioLabelElement: HTMLLabelElement =
            document.createElement('label');
        radioLabelElement.innerText = category;
        radioLabelElement.setAttribute('for', `cateogry-${category}`);

        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(radioLabelElement);

        categoriesContainerElement.appendChild(categoryElement);
    });
};

const addTask = (task: Task) => {
    tasks.push(task);
};

addButtonElement.addEventListener('click', (e) => {
    e.preventDefault();

    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    taskNameInputElement.value = '';

    render();
});

addTask({ name: 'task from Boss', done: true, category: 'work' });

renderCategories();
render();
