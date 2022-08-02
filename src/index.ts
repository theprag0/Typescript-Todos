interface Todo {
    text: string,
    completed: boolean
}

const btn = document.getElementById("submit") as HTMLButtonElement;
const input = document.getElementById("todoinput") as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if(todosJSON === null) return [];
    else return JSON.parse(todosJSON);
}

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo);
    todos.push(newTodo);
    
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
};

function createTodo(todo: Todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
};

form.addEventListener("submit", handleSubmit);