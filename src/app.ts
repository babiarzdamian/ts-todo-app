const tasksContainerElement: HTMLElement = document.querySelector('.tasks');

const tasks: string[] = ['take trash out', 'feed the cat', 'go to gym'];

const render = () => {
    tasks.forEach((task) => {
        const taskElement: HTMLElement = document.createElement('li');
        taskElement.innerText = task;

        console.log(taskElement);

        tasksContainerElement.appendChild(taskElement);
    });
};

render();
