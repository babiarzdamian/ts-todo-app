const handleCategoryChange = (category) => {
    if (category === 'general') {
        document.body.style.background = '#434444';
    }
    else if (category === 'gym') {
        document.body.style.background = 'pink';
    }
    else if (category === 'hobby') {
        document.body.style.background = 'olive';
    }
    else if (category === 'work') {
        document.body.style.background = 'black';
    }
    else if (category === 'social') {
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
