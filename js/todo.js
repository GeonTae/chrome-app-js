const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
// === const toDoInput = document.querySelector(".todo-form input")
const toDoList = document.querySelector(".todo-list");
const doneList = document.querySelector(".done-list");

const TODOS_KEY = "todos";
const DONE_KEY = "done";
let toDos = [];
let doneTasks = [];
//================================================================================

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function saveDoneTasks() {
  localStorage.setItem(DONE_KEY, JSON.stringify(doneTasks));
}

//delete todo list function
function deleteTodo(event) {
  event.stopPropagation();
  // console.dir(event);
  // console.dir(event.target.parentElement);
  //   const li = event.target.parentElement;
  const li = event.target.closest("li");
  // console.log(li.id);
  // console.log(typeof li.id);
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
  // this.parentElement.revmove()
  // this.parentNode.remove();
}

function moveToDone(event) {
  event.stopPropagation();
  const li = event.target.closest("li");
  //   const li = event.target.parentElement;

  // Move the item to "done" list
  const task = toDos.find((todo) => todo.id === parseInt(li.id));
  doneTasks.push(task);
  saveDoneTasks();

  // Remove it from "To-Do" list
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  saveToDos();

  paintDone(task);
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  // button
  //================================================================================
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const checkButton = document.createElement("button");
  checkButton.innerText = "✔️";
  checkButton.addEventListener("click", moveToDone);

  const divider = document.createElement("span");
  divider.classList.add("divider");
  divider.innerText = "/";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteTodo);

  //   const button = document.createElement("button");
  //   button.innerText = "❌";
  //   button.addEventListener("click", deleteTodo);

  buttonContainer.appendChild(checkButton);
  buttonContainer.appendChild(divider);
  buttonContainer.appendChild(deleteButton);
  //================================================================================

  li.appendChild(span);
  //   li.appendChild(button);
  li.appendChild(buttonContainer);
  toDoList.appendChild(li);
}

//================================================================================

function paintDone(doneTask) {
  const li = document.createElement("li");
  li.id = doneTask.id;
  const span = document.createElement("span");
  span.innerText = doneTask.text;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const li = event.target.closest("li");
    // const li = event.target.parentElement;
    doneTasks = doneTasks.filter((task) => task.id !== parseInt(li.id));
    li.remove();
    saveDoneTasks();
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  doneList.appendChild(li);
}

//================================================================================

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

//================================================================================
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  // if(savedToDos !== null)
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((element) => {
    paintTodo(element);
  }); //parsedToDos.forEach(paintTodo(element))
}

// console.log(savedToDos);
const savedDoneTasks = localStorage.getItem(DONE_KEY);

if (savedDoneTasks) {
  const parsedDoneTasks = JSON.parse(savedDoneTasks);
  doneTasks = parsedDoneTasks;
  parsedDoneTasks.forEach(paintDone);
}
