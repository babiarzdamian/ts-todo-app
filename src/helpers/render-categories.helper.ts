import { Category } from '../types/types';

const handleCategoryChange = (category: Category) => {
    if (category === 'general') {
        document.body.style.background = '#434444';
    } else if (category === 'gym') {
        document.body.style.background = 'pink';
    } else if (category === 'hobby') {
        document.body.style.background = 'olive';
    } else if (category === 'work') {
        document.body.style.background = 'black';
    } else if (category === 'social') {
        document.body.style.background = 'orchid';
    } else {
        const never: never = category;
        console.log(never);
    }
};

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
            handleCategoryChange(category);
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
