const tasksContainerElement = document.querySelector('.tasks');
const tasks = ['take trash out', 'feed the cat', 'go to gym'];
const render = () => {
    tasks.forEach((task) => {
        const taskElement = document.createElement('li');
        taskElement.innerText = task;
        console.log(taskElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
render();
