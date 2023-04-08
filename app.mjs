import * as todos from "./todos.mjs";
import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface({ input, output });

const action = await rl.question("What is your main focus for today ? ");
todos.insertTodo(action);
const showTodo = todos.showTodo();
console.info(showTodo);
rl.close();
