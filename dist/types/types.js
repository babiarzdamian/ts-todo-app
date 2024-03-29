export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
    Category["SOCIAl"] = "social";
})(Category || (Category = {}));
export class Task {
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
