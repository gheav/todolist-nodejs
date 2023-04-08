import * as todos from "./todos.js";
import chalk from "chalk";
import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface({ input, output });
const showTodo = todos.showTodo();

console.info(chalk.blue("===== TODO LIST APP - Node JS ====="));

showTodo.forEach((d, i) => {
  if (d.status == 1) {
    console.info(`${i + 1}. ` + chalk.green(d.action));
  } else {
    console.info(`${i + 1}. ${d.action}`);
  }
});

const action = await rl.question("What is your main focus for today ? ");
todos.insertTodo(action);
rl.close();
