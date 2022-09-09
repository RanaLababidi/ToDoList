let display_button = document.getElementById("display");
display_button.addEventListener("click",loadList);
let toDoList2 = document.getElementById("list2");
function newToDoItem2(itemText, completed) {
    let NodeItem = document.createElement("li");
    let NodeText = document.createTextNode(itemText);
    NodeItem.appendChild(NodeText);
    if (completed) {
        NodeItem.classList.add("completed")
    }
    toDoList2.appendChild(NodeItem);
    NodeItem.addEventListener("dblclick", makeCompleted);
}

function loadList() {
    if (localStorage.getItem("toDos") !== null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem2(toDo.task, toDo.completed);
        }
    }
}
