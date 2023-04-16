// Import Core Modules
const fs = require("fs");

const repoDirectory = "./repositories";
const repoFile = "./repositories/todos.json";

const init = () => {
  if (!fs.existsSync(repoDirectory)) {
    fs.mkdirSync(repoDirectory);
  }

  if (!fs.existsSync(repoFile)) {
    fs.writeFileSync(repoFile, "[]", "utf-8");
  }
};

const insertTodo = async (action) => {
  const todo = { action: action.trim(), status: 0, createdAt: Date.now() };
  const repo = fs.readFileSync(repoFile, "utf-8");
  const todos = JSON.parse(repo);
  todos.push(todo);
  fs.writeFileSync(repoFile, JSON.stringify(todos));
};

const showTodo = () => {
  const repo = fs.readFileSync(repoFile, "utf-8");
  return JSON.parse(repo);
};

const checkTodo = (action, status) => {
  const repo = fs.readFileSync(repoFile, "utf-8");
  const todos = JSON.parse(repo);
  const newTodos = todos.filter(
    (todo) => todo.action.toLowerCase() !== action.toLowerCase()
  );

  if (todos.length === newTodos.length) {
    return false;
  }
  newTodos.push({ action: action, status: status, createdAt: Date.now() });
  fs.writeFileSync(repoFile, JSON.stringify(newTodos));
  return true;
};

const removeTodo = (action) => {
  const repo = fs.readFileSync(repoFile, "utf-8");
  const todos = JSON.parse(repo);

  const newTodos = todos.filter(
    (todo) => todo.action.toLowerCase() !== action.toLowerCase()
  );

  if (todos.length === newTodos.length) {
    return false;
  }
  fs.writeFileSync(repoFile, JSON.stringify(newTodos));
  return true;
};
module.exports = { init, insertTodo, showTodo, checkTodo, removeTodo };
