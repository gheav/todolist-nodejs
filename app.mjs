import * as fs from "fs";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });
const action = await rl.question("What is your main focus for today ? ");
const todo = { action: action, status: 0, createdAt: Date.now() };
const repo = fs.readFileSync("todo.json", "utf-8");
const todos = JSON.parse(repo);
todos.push(todo);
fs.writeFileSync("todo.json", JSON.stringify(todos));
rl.close();

console.log("Data has been saved!");
