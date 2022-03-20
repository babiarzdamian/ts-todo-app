import { Category } from '../types/types.js';
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        document.body.style.background = '#434444';
    }
    else if (category === Category.GYM) {
        document.body.style.background = 'pink';
    }
    else if (category === Category.HOBBY) {
        document.body.style.background = 'olive';
    }
    else if (category === Category.WORK) {
        document.body.style.background = 'black';
    }
    else if (category === Category.SOCIAl) {
        document.body.style.background = 'orchid';
    }
    else {
        const never = category;
        console.log(never);
    }
};
export const render = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement('li');
        const radioInputElement = document.createElement('input');
        radioInputElement.type = 'radio';
        radioInputElement.name = 'category';
        radioInputElement.value = category;
        radioInputElement.id = `cateogry-${category}`;
        radioInputElement.addEventListener('change', () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        const radioLabelElement = document.createElement('label');
        radioLabelElement.innerText = category;
        radioLabelElement.setAttribute('for', `cateogry-${category}`);
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(radioLabelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
