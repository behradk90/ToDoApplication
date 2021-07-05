
const input = document.querySelector('#input');
const sButton = document.querySelector('.submit');

sButton.addEventListener("click", () => {
    const toDoList = document.querySelector('.toDoList');
    const list = document.createElement('li');
    list.appendChild(document.createTextNode(input.value));
    toDoList.appendChild(list);
})

console.log(input)