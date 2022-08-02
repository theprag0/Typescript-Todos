"use strict";
const todos = [];
const btn = document.getElementById("submit");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    input.value = "";
};
const createTodo = (todo) => {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
};
form.addEventListener("submit", handleSubmit);
