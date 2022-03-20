import { Category } from '../types/types.js';
export class TaskClass {
    constructor(name, done, category = Category.GENERAL) {
        this.name = 'New task';
        this.done = false;
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate(extra) {
        console.log(`Task created at ${this.createdAt} ${extra}`);
    }
}
