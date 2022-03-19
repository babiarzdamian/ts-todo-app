import { Task, Category } from './types/types';
import renderTasks from './helpers/render-tasks.helper.js';
import { render as renderCategories } from './helpers/render-categories.helper.js';

const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement =
    document.querySelector('.categories');

let selectedCategory: Category;

const categories: Category[] = ['general', 'work', 'gym', 'hobby'];

const tasks: Task[] = [
    {
        name: 'take trash out',
        done: false,
    },
    { name: 'feed the cat', done: true },
    { name: 'go to gym', done: false, category: 'gym' },
];

const addTask = (task: Task) => {
    tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
};

addButtonElement.addEventListener('click', (e) => {
    e.preventDefault();

    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    taskNameInputElement.value = '';

    renderTasks(tasks, tasksContainerElement);
});

addTask({ name: 'task from Boss', done: true, category: 'work' });

renderCategories(
    categories,
    categoriesContainerElement,
    updateSelectedCategory
);
renderTasks(tasks, tasksContainerElement);
