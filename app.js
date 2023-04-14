import express from "express";
import * as todos from "./services/todos.js";
const app = express();
const port = 3000;
todos.init();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", {
    title: "Todolist With NodeJS",
    todos: todos.showTodo(),
  });
});

app.listen(port, () => {
  console.log(`Todolist app listening on port ${port}`);
});
