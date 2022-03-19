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
        });
        const radioLabelElement = document.createElement('label');
        radioLabelElement.innerText = category;
        radioLabelElement.setAttribute('for', `cateogry-${category}`);
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(radioLabelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
