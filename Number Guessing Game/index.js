#!/usr/bin/env node
/**
 * This Proejct is part of class tasks assigned by Sir Zia for learning TypeScript
 * Name:Asim Nazeer
 * PIAIC NO:PIAIC 197123
 * Islamabad Section E
 */
import chalk from "chalk";
import gradient from "gradient-string";
import promptSync from "prompt-sync";
console.log(process.env.udr);
// This is the variable used to store the number to be guessed
let check = Math.floor(Math.random() * 10);
let coolGradient = gradient('red', 'green', 'blue');
console.clear();
let prompt = promptSync();
let name = prompt(chalk.blue("Enter Your Name:  "));
console.log(coolGradient("Welcome : " + name));
let duck = gradient('orange', 'yellow').multiline([
    "  __",
    "<(o )___",
    " ( ._> /",
    "  `---'",
].join('\n'));
let life = 3;
do {
    console.log(chalk.bold("Remaining Lifes : " + life));
    if (life < 1) {
        console.log(duck);
        let cont = prompt(gradient.rainbow("Do you want to play again(y/n)"));
        if (cont.toLowerCase() === 'y') {
            check = Math.floor(Math.random() * 10);
            console.clear();
            life = 3;
            continue;
        }
        else {
            break;
        }
        break;
    }
    let num = prompt(gradient('cyan', 'red')("WelCome : " + name + " -- Please Enter a Number between 0-10 : "));
    if (Number.parseInt(num) === check) {
        console.log("Wow ... You Guessed It right");
        let cont = prompt(gradient.rainbow("Do you want to play again(y/n)"));
        if (cont.toLowerCase() === 'y') {
            life = 3;
            check = Math.floor(Math.random() * 10);
            console.clear();
            continue;
        }
        else {
            break;
        }
    }
    else if (!Number.parseInt(num)) {
        console.log("Please enter a valid number between 0-10");
        continue;
    }
    else {
        if (Number.parseInt(num) > check) {
            console.log("Ooppss You Guessed it wrong.. Your number is higher then result");
            life--;
            continue;
        }
        else if (Number.parseInt(num) < check) {
            console.log("Ooppss You Guessed it wrong.. Your number is less then result");
            life--;
            continue;
        }
    }
} while (true);
