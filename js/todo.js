const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo){
   const li = document.createElement("li");
   const span = document.createElement("span");
   const button = document.createElement("button");
   button.innerText = "❌";
   button.addEventListener("click", deleteToDo);
   li.appendChild(span);
   li.appendChild(button);
   span.innerText = newTodo;
   toDoList.appendChild(li);
}

function deleteToDo(event){
    const delElement = event.target.parentNode;
    delElement.remove();
}

function handelToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),  
    };
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handelToDoSubmit);


function sayHello(item){
    console.log("hello", item);
}


const saveToDosText = localStorage.getItem(TODOS_KEY);
console.log(saveToDosText);

if(saveToDosText !== null){
    const parsedToDos = JSON.parse(saveToDosText);
    parsedToDos.forEach(item => { console.log("해야할일 list", item)
        
    });
}