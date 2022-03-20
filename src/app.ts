import { Task, Category } from './types/types.js';
import renderTasks from './helpers/render-tasks.helper.js';
import { render as renderCategories } from './helpers/render-categories.helper.js';

const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement =
    document.querySelector('.categories');

let selectedCategory: Category;

const categories: Category[] = [
    Category.GENERAL,
    Category.GYM,
    Category.HOBBY,
    Category.SOCIAl,
    Category.WORK,
];

const tasks: Task[] = [
    {
        name: 'take trash out',
        done: false,
    },
    { name: 'feed the cat', done: true },
    { name: 'go to gym', done: false, category: Category.GYM },
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

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ['Do chest', Category.GYM, false];

const taskName = task[0];
const taskCategory = task[1];
const taskDone = task[2];

addTask({ name: taskName, category: taskCategory, done: taskDone });

addTask({ name: 'task from Boss', done: true, category: Category.WORK });

renderCategories(
    categories,
    categoriesContainerElement,
    updateSelectedCategory
);
renderTasks(tasks, tasksContainerElement);
