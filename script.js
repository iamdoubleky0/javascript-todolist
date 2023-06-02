const input = document.getElementById("myInput");
const addButton = document.querySelector(".button");
const list = document.getElementById("list");

function createToDoItem(text) {
  const listItem = document.createElement("li");
  listItem.innerText = text;

  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.addEventListener("click", markAsDone);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", deleteToDoItem);

  listItem.appendChild(doneButton);
  listItem.appendChild(deleteButton);

  list.appendChild(listItem);
}

function addToList() {
  const text = input.value.trim();
    if (text !== "") {
        createToDoItem(text);
        input.value = "";
    } else {
        alert("Please enter your to do task.");
    }
}

function markAsDone(event) {
    const listItem = event.target.parentNode;
    const doneButton = event.target;
  
    if (listItem.classList.contains("done")) {
      listItem.classList.remove("done");
      doneButton.innerText = "Done";
    } else {
      listItem.classList.add("done");
      doneButton.innerText = "Undone";
    }
}

function deleteToDoItem(event) {
  const listItem = event.target.parentNode;
  list.removeChild(listItem);
}

addButton.addEventListener("click", addToList);

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addToList();
  }
});
