#!/usr/bin/env node
/**
 * This Proejct is part of class tasks assigned by Sir Zia for learning TypeScript
 * Name:Asim Nazeer
 * PIAIC NO:PIAIC 197123
 * Islamabad Section E
 */
// Importing required libraries
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
// A small delay funtcion to wait for anything
const sleep = () => new Promise((res, rej) => setTimeout(res, 2000));
// Welcome Note to the User
async function welcome() {
    const rainbowTitle = chalkAnimation.neon("Welcome Guest .. Please Enter your Name & Pin");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
// Ask the user guess
async function getCredentials() {
    let que = await inquirer.prompt([
        {
            name: "UserName",
            type: "input",
            message: "Enter User Name: ",
        },
        {
            name: "passWord",
            type: "password",
            message: "Enter Password : ",
        },
    ]);
    console.log(`User Name : ${que.UserName}`);
    console.log(`Password : ${que.passWord}`);
}
getCredentials();
