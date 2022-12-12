#!/usr/bin/env node
/**
 * This Proejct is part of class tasks assigned by Sir Zia for learning TypeScript
 * Name:Asim Nazeer
 * PIAIC NO:PIAIC 197123
 * Islamabad Section E
 */

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep=()=> new Promise((res,rej) =>  setTimeout(res, 2000));

async function welcome(){
const rainbowTitle=chalkAnimation.neon("Welcome Guest .. Please Enter your Name & Pin");
await sleep();
rainbowTitle.stop();
}

welcome();

// Ask the user guess
async function Greet(){
    let que=await inquirer
    .prompt({ 
        
    })
}