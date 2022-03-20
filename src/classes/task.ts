import { Category } from '../types/types.js';

export class TaskClass {
    name: string = 'New task';
    done: boolean = false;
    category?: Category;

    private createdAt: Date;

    constructor(
        name: string,
        done: boolean,
        category: Category = Category.GENERAL
    ) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }

    public logCreationDate(extra?: string) {
        console.log(`Task created at ${this.createdAt} ${extra}`);
    }
}
