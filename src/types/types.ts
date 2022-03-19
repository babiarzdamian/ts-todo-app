export type Category = 'general' | 'work' | 'gym' | 'hobby' | 'social';

export interface Task {
    name: string;
    done: boolean;
    category?: Category;
}
