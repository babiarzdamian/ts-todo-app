import { Task, Category } from './types/types.js';
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
    new Task('take trash out', false),
    new Task('feed the cat', true),
    new Task('go to gym', false, Category.GYM),
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.logCreationDate('!!!');
    taskNameInputElement.value = '';
    renderTasks(tasks, tasksContainerElement);
});
const task = ['Do chest', Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDone = task[2];
addTask(new Task(taskName, taskDone, taskCategory));
addTask(new Task('task from Boss', true, Category.WORK));
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
const taskClassInstance = new TaskClass('Task from Class', false);
taskClassInstance.logCreationDate('!');
