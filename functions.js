function renderListElement(data) {
    let itemElement = document.createElement('li');
    
    if(data.class) {
        itemElement.classList.add(data.class)
    }

    itemElement.innerHTML = `<a href="${data.href}">${data.content}</a>`;
    data.parentElement.append(itemElement);

    
}


function createDivWithElements(data) {
    let itemElement = document.createElement('div')
    itemElement.classList.add(data.class)
    itemElement.innerHTML = `<h2>${data}</h2>`
}