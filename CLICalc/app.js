#!/usr/bin/env node
import { calculator } from "./mathWork.js";
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import promptSync from "prompt-sync";
let playerName;
let num1, num2, result;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("\t WelCome To My first Simple Calculator \n");
    await sleep();
    rainbowTitle.stop();
}
async function getNumbers() {
    const answers = await inquirer.prompt([
        {
            name: "number1",
            type: "input",
            message: "Enter First Number",
        },
        {
            name: "number2",
            type: "input",
            message: "Enter Second Number",
        },
    ]);
    num1 = answers.number1;
    num2 = answers.number2;
}
let op;
async function selectOp() {
    const answers = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "Which operation you want to perform?\n",
        choices: [" Add ", " Subtract ", " Multiply ", " Divide "],
    });
    op = answers.operation;
    result = calculator(Number(num1), Number(num2), String(answers.operation));
}
function getOp(parm1) {
    if (parm1 === " Add ") {
        return "+";
    }
    else if (parm1 == " Subtract ") {
        return "-";
    }
    else if (parm1 === " Multiply ") {
        return "x";
    }
    else if (parm1 === " Divide ") {
        return "/";
    }
    else {
        return " ";
    }
}
async function showRes() {
    const spinner = createSpinner("Checking answer...").start();
    await sleep();
    spinner.success({
        text: `Your Required Answer is : ${chalk.bgBlue(result[0])}  ${getOp(op)} ${chalk.bgBlue(result[1])} = ${chalk.bgBlue(result[2])}. `,
    });
}
// Call all the functions
const prompt = promptSync();
let repeat;
console.clear();
await welcome();
do {
    await getNumbers();
    await selectOp();
    await showRes();
    repeat = prompt("Do You want another Calcultation press y and press any other to exit");
} while (repeat.toLocaleLowerCase() === "y");
//await askName();
