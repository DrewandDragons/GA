let toDos = [];

const toDoList = document.querySelector("#to-do-list");

const form = document.querySelector("#to-do-form");
form.addEventListener("submit", addToDo);

const toDoInput = document.querySelector("#to-do-input");

function addToDo(event) {
    event.preventDefault();

    let toDo = toDoInput.value;

    if (toDo) {
        toDos.push(toDo);

        renderToDos();
    }
    toDoInput.value = "";
}

function renderToDos() {
    toDoList.innerHTML = "";

    for (let i = 0; i < toDos.length; i++) {
        renderToDo(toDos[i]);
    }
    document.querySelector("#to-do-count").innerText = toDos.length;
}

function renderToDo(toDo) {
    let li = document.createElement("li");
    li.classList.add("to-do-item");
    li.innerText = toDo;
    toDoList.appendChild(li);

    li.addEventListener("click", function(){
        completeToDo(toDo);
    })
}

let completedToDos = [];
const completedToDoList = document.querySelector("#completed-list");

function completeToDo(toDo) {
    completedToDos.push(toDo);
    toDos = toDos.filter(t => t !== toDo);

    renderToDos();
    renderCompletedToDos();
}

function renderCompletedToDos() {
    completedToDoList.innerHTML = "";

for (completedToDo of completedToDos) {
        renderCompleted(completedToDo);
}

    document.querySelector("#completed-to-do-count").innerText = completedToDos.length;
}

function renderCompleted(completed) {
    let li = document.createElement("li");
    li.classList.add("done-item");
    li.innerText = completed;
    completedToDoList.appendChild(li);

}