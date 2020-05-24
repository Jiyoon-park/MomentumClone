const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function paintToDo(text) {
    console.log(toDoList)
    const li = document.createElement("li");
    li.innerText = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.value = "X";
    toDos.append(li, deleteBtn);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if (loadedtoDos !== null){
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();