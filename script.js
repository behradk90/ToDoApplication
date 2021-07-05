const input = document.querySelector('#input');
const sButton = document.querySelector('.submit');


sButton.addEventListener("click", eventHandle);
input.addEventListener("keypress", function onEvent(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        eventHandle()
    }

});

function eventHandle() {
    const toDoList = document.querySelector('.toDoList');
    const list = document.createElement('li');
    const btn = document.createElement("button");
    list.className = "list-group-item"
    btn.className = "btn btn-danger mx-2"
    btn.addEventListener("click", () => {
        list.parentNode.removeChild(list);
    });
    btn.innerText = "Remove";
    list.appendChild(document.createTextNode(input.value));
    list.appendChild(btn)
    toDoList.appendChild(list);
    input.value = '';
}