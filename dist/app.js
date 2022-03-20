import { Category } from './types/types.js';
import renderTasks from './helpers/render-tasks.helper.js';
import { render as renderCategories } from './helpers/render-categories.helper.js';
import { TaskClass } from './types/classes/task.js';
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector('.categories');
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.GYM,
    Category.HOBBY,
    Category.SOCIAl,
    Category.WORK,
];
const tasks = [
    {
        name: 'take trash out',
        done: false,
    },
    { name: 'feed the cat', done: true },
    { name: 'go to gym', done: false, category: Category.GYM },
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
const task = ['Do chest', Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDone = task[2];
addTask({ name: taskName, category: taskCategory, done: taskDone });
addTask({ name: 'task from Boss', done: true, category: Category.WORK });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
const taskClassInstance = new TaskClass('Task from Class', false);
taskClassInstance.logCreationDate('!');
