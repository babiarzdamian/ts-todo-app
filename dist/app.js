import renderTasks from './helpers/render-tasks.helper.js';
import { render as renderCategories } from './helpers/render-categories.helper.js';
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector('.categories');
let selectedCategory;
const categories = ['general', 'work', 'gym', 'hobby', 'social'];
const tasks = [
    {
        name: 'take trash out',
        done: false,
    },
    { name: 'feed the cat', done: true },
    { name: 'go to gym', done: false, category: 'gym' },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
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
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
