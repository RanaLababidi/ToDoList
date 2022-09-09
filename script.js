
let addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

let EntryBox = document.getElementById("write_element");
let toDoList = document.getElementById("list");

let empty_button = document.getElementById("empty");
empty_button.addEventListener("click", emptyList);

let save_button = document.getElementById("save");
save_button.addEventListener("click", saveList);


function newToDoItem(itemText, completed) {
    let NodeItem = document.createElement("li");
    let NodeText = document.createTextNode(itemText);
    NodeItem.appendChild(NodeText);
    if (completed) {
        NodeItem.classList.add("completed")
    }
    toDoList.appendChild(NodeItem);
    NodeItem.addEventListener("dblclick", makeCompleted);
}

function addItem() {
    let itemText = EntryBox.value;
    newToDoItem(itemText, false);

}

function makeCompleted() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}
function emptyList() {
    let Items = toDoList.children;
    while (Items.length > 0) {
        Items.item(0).remove();
    }
}

function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
    alert("Saved successfuly");
}
function loadList() {
    if (localStorage.getItem("toDos") !== null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}
 
