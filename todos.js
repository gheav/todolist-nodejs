// Import Core Modules
import * as fs from "fs";

const repoDirectory = "./repository";
const repoFile = "./repository/todos.json";

if (!fs.existsSync(repoDirectory)) {
  fs.mkdirSync(repoDirectory);
}

if (!fs.existsSync(repoFile)) {
  fs.writeFileSync(repoFile, "[]", "utf-8");
}

export const insertTodo = async (action) => {
  const todo = { action: action, status: 0, createdAt: Date.now() };
  const repo = fs.readFileSync(repoFile, "utf-8");
  const todos = JSON.parse(repo);
  todos.push(todo);
  fs.writeFileSync(repoFile, JSON.stringify(todos));
};

export const showTodo = () => {
  const repo = fs.readFileSync(repoFile, "utf-8");
  const todos = JSON.parse(repo);
  return todos;
};

export const checkTodo = (action) => {
  const repo = fs.readFileSync(repoFile, "utf-8");
  const todos = JSON.parse(repo);
  console.log(action + " checked");
};

export const removeTodo = (action) => {
  const repo = fs.readFileSync(repoFile, "utf-8");
  const todos = JSON.parse(repo);

  const newTodos = todos.filter(
    (todo) => todo.action.toLowerCase() !== action.toLowerCase()
  );

  if (todos.length === newTodos.length) {
    console.log(action + " Not Found!");
  }
  fs.writeFileSync(repoFile, JSON.stringify(newTodos));
  console.log(action + " deleted");
};
