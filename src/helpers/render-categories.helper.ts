import { Category } from '../types/types';

export const render = (
    categories: Category[],
    categoriesContainerElement: HTMLElement,
    inputChangeCallback: (category: Category) => void
) => {
    categories.forEach((category) => {
        const categoryElement: HTMLElement = document.createElement('li');

        const radioInputElement: HTMLInputElement =
            document.createElement('input');
        radioInputElement.type = 'radio';
        radioInputElement.name = 'category';
        radioInputElement.value = category;
        radioInputElement.id = `cateogry-${category}`;
        radioInputElement.addEventListener('change', () => {
            inputChangeCallback(category);
        });

        const radioLabelElement: HTMLLabelElement =
            document.createElement('label');
        radioLabelElement.innerText = category;
        radioLabelElement.setAttribute('for', `cateogry-${category}`);

        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(radioLabelElement);

        categoriesContainerElement.appendChild(categoryElement);
    });
};
