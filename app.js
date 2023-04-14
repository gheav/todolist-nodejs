import express from "express";
import * as todos from "./services/todos.js";
const app = express();
const port = 3000;
todos.init();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index", {
    title: "Todolist With NodeJS",
    todos: todos.showTodo(),
  });
});
app.post("/", (req, res) => {
  todos.insertTodo(req.body.action);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Todolist app listening on port ${port}`);
});
