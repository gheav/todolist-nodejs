import * as todos from "./todos.js";
import * as readline from "readline/promises";
import chalk from "chalk";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface({ input, output });
const showTodo = todos.showTodo();

const createTodo = async () => {
  const action = await rl.question("What is your main focus for today ? ");
  todos.insertTodo(action);
  rl.close();
};

const readTodo = () => {
  showTodo.forEach((d, i) => {
    if (d.status == 1) {
      console.info(`${i + 1}. ` + chalk.green(d.action));
    } else {
      console.info(`${i + 1}. ${d.action}`);
    }
  });
};

const updateTodo = async () => {
  readTodo();
  const todo = await rl.question("type todo : ");
  todos.checkTodo(todo);
  rl.close();
};

const deleteTodo = async () => {
  readTodo();
  const todo = await rl.question("type todo : ");
  todos.removeTodo(todo);
  rl.close();
};

const main = async () => {
  console.info(chalk.blue("===== TODO LIST APP - Node JS ====="));
  console.info("1. Show List");
  console.info("2. Add");
  console.info("3. Checked");
  console.info("4. Remove");
  console.info("x. Exit");
  const menu = await rl.question("Select Menu : ");

  switch (menu) {
    case "1":
      readTodo();
      rl.close();
      break;
    case "2":
      createTodo();
      break;
    case "3":
      updateTodo();
      break;
    case "4":
      deleteTodo();
      break;

    default:
      console.info("Bye bye!");
      rl.close();
      break;
  }
};

main();
