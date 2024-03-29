import { Task, Category } from './types/types.js';
import renderTasks from './helpers/render-tasks.helper.js';
import { render as renderCategories } from './helpers/render-categories.helper.js';
import { TaskClass } from './types/classes/task.js';

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
    new Task('take trash out', false),
    new Task('feed the cat', true),
    new Task('go to gym', false, Category.GYM),
];

const addTask = (task: Task) => {
    tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
};

addButtonElement.addEventListener('click', (e) => {
    e.preventDefault();

    const newTask: Task = new Task(
        taskNameInputElement.value,
        false,
        selectedCategory
    );
    addTask(newTask);
    newTask.logCreationDate('!!!');
    taskNameInputElement.value = '';

    renderTasks(tasks, tasksContainerElement);
});

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ['Do chest', Category.GYM, false];

const taskName = task[0];
const taskCategory = task[1];
const taskDone = task[2];

addTask(new Task(taskName, taskDone, taskCategory));
addTask(new Task('task from Boss', true, Category.WORK));

renderCategories(
    categories,
    categoriesContainerElement,
    updateSelectedCategory
);
renderTasks(tasks, tasksContainerElement);

const taskClassInstance = new TaskClass('Task from Class', false);
taskClassInstance.logCreationDate('!');
