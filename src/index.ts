interface Todo {
    text: string,
    completed: boolean
}

const todos: Todo[] = [];

const btn = document.getElementById("submit") as HTMLButtonElement;
const input = document.getElementById("todoinput") as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo);
    todos.push(newTodo);
    input.value = "";
};

const createTodo = (todo: Todo) => {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
};

form.addEventListener("submit", handleSubmit);