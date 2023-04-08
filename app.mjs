// Import Core Modules
import * as fs from "fs";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// Create Interface Readline
const rl = readline.createInterface({ input, output });

// Create Repository
const repoDirectory = "./repository";
const repoFile = "./repository/todos.json";
if (!fs.existsSync(repoDirectory)) {
  fs.mkdirSync(repoDirectory);
}

if (!fs.existsSync(repoFile)) {
  fs.writeFileSync(repoFile, "[]", "utf-8");
}

// Insert Todo
const action = await rl.question("What is your main focus for today ? ");
const todo = { action: action, status: 0, createdAt: Date.now() };
const repo = fs.readFileSync(repoFile, "utf-8");
const todos = JSON.parse(repo);
todos.push(todo);
fs.writeFileSync(repoFile, JSON.stringify(todos));
rl.close();

console.log("Data has been saved!");
