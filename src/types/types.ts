export enum Category {
    GENERAL = 'genera;',
    WORK = 'work',
    GYM = 'gym',
    HOBBY = 'hobby',
    SOCIAl = 'social',
}

export interface Task {
    name: string;
    done: boolean;
    category?: Category;
}
