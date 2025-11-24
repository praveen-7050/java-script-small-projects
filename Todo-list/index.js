function themes() {
  const bodytag = document.getElementById("maintag");
  bodytag.classList.toggle("lightmode");
}

let input = document.getElementById("input-type");
let add = document.getElementById("btn-add");
let taskContainer = document.querySelector(".task-container");
function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function renderTask(taskObj) {
  const { id, text, completed } = taskObj;

  const ul = document.createElement("ul");
  ul.classList.add(
    "list-unstyled", "d-flex", "listitem", "py-3", "justify-content-center",
    "flex-column", "flex-md-row", "align-items-md-center", "border-bottom", "p-2"
  );

  const liText = document.createElement("li");
  liText.classList.add(
    "mt-2", "litags-text", "flex-grow-1", "text-center",
    "text-md-start", "mb-2", "mb-md-0"
  );
  liText.textContent = text;

  if (completed) {
    liText.style.textDecoration = "line-through";
  }

  const liDelete = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger", "mx-2", "btn-delete");
  deleteBtn.textContent = "Delete";
  liDelete.appendChild(deleteBtn);

  const liComplete = document.createElement("li");
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("btn", "btn-info", "me-2", "btn-complete");
  completeBtn.textContent = "Completed";
  liComplete.appendChild(completeBtn);

  ul.appendChild(liText);
  ul.appendChild(liDelete);
  ul.appendChild(liComplete);
  taskContainer.appendChild(ul);
  deleteBtn.addEventListener("click", () => {
    ul.remove();
    let tasks = getTasksFromStorage();
    tasks = tasks.filter((task) => task.id !== id);
    saveTasksToStorage(tasks);
  });
  completeBtn.addEventListener("click", () => {
    liText.style.textDecoration =
      liText.style.textDecoration === "line-through" ? "none" : "line-through";

    let tasks = getTasksFromStorage();
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasksToStorage(tasks);
  });
}
function addTask() {
  let taskadd = input.value.trim();
  if (taskadd === "") {
    alert("please Enter the task");
    return;
  }

  const taskObj = {
    id: Date.now(),
    text: taskadd,
    completed: false,
  };
  const tasks = getTasksFromStorage();
  tasks.push(taskObj);
  saveTasksToStorage(tasks);
  renderTask(taskObj);

  input.value = "";
}

add.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
window.addEventListener("DOMContentLoaded", () => {
  const tasks = getTasksFromStorage();
  tasks.forEach((task) => renderTask(task));
});
