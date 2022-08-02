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

function saveTodos(): void {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodo(todo: Todo): void {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });

    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
};

const handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo);
    todos.push(newTodo);
    
    input.value = "";
};

form.addEventListener("submit", handleSubmit);