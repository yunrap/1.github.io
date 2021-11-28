const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []; // 기존 todolist 저장 변수 

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo){
   const li = document.createElement("li");
   li.id = newTodo.id;
   const span = document.createElement("span");
   const button = document.createElement("button");
   button.innerText = "❌";
   button.addEventListener("click", deleteToDo);
   li.appendChild(span);
   li.appendChild(button);
   span.innerText = newTodo.text;
   toDoList.appendChild(li);
}

function deleteToDo(event){
    const delElement = event.target.parentElement;
    delElement.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(delElement.id));
    saveToDos();
}

function handelToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),  
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handelToDoSubmit);

const saveToDosText = localStorage.getItem(TODOS_KEY);

if(saveToDosText !== null){
    const parsedToDos = JSON.parse(saveToDosText);
    toDos = parsedToDos;    //원래있던 toDolist 저장
    parsedToDos.forEach(paintToDo);
}

//새로운 array를 만드는 filterfunction 기능