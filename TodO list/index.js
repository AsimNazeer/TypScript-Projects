#! /usr/bin/env node
/**
 * The Purpose of this program is to demonstrate a prototype of
 * a todo application, where users can be added and their to do lists can be maintained
 * Programmed By : Asim Nazeer
 * PIAIC NO:PIAIC 197123
 * Islamabad Section E
 */
import inquirer from "inquirer";
import { users } from "./users.js";

// Ask the Admin to add a new user and his todo List
let usrAdditionChoice = true;

// Create an empty users array to hold all the users
let appUsers = [];

/**
 * This Function will check the user presence in the list
 * @param {*} user an object of class user
 * @returns Nothing
 */
function checkUser(user) {
  let check = true;
  if (appUsers.length < 1) {
    return true;
  }
  // check For Existance
  if (appUsers.length > 0) {
    for (let i = 0; i < appUsers.length; i++) {
      if (
        String(appUsers[i].name).toLowerCase() === String(user).toLowerCase()
      ) {
        check = false; // User is already present available
      }
    }

    return check;
  }
}

/**
 * This Funciton will return users list and -1 if no user is present
 * @returns user[]
 */
function getUsers() {
  if (appUsers.length < 1) {
    return -1;
  } else {
    let users = [];
    for (let i = 0; i < appUsers.length; i++) {
      users.push(String(appUsers[i].name).toUpperCase());
    }
    return users;
  }
}

/**
 * This funciton will check the users index location in the array
 * @param {*} arg1
 * @returns
 */
function getUsersIndex(arg1) {
  for (let i = 0; i < appUsers.length; i++) {
    if (String(appUsers[i].name).toLowerCase() === String(arg1).toLowerCase()) {
      return i; // User is already present available
    }
  }
}

/**
 * This Block will be the main execution body of the program
 * It will show the context menu until the users selects exit
 */
while (usrAdditionChoice) {
  // ----------------------------Show Context Menu -----------------------

  const userChoice = await inquirer.prompt([
    {
      name: "mainMenu",
      type: "list",
      choices: [
        { name: "Add User", value: 1 }, // 1 For Add User
        { name: "Select User To Add Todo", value: 2 }, // 2 For Add User
        { name: "View/delete Users TODO", value: 3 }, // 3 For View User
        { name: "Exit", value: 4 }, // 5 Exit
      ],
      message: "Please Select an Action",
    },
  ]);
  switch (userChoice.mainMenu) {
    case 1: // 1-- For Add User
      //------------------------------  Add New User  --------------------

      const addUserData = await inquirer.prompt([
        {
          name: "userName",
          type: "input",
          message: "Enter User Name: ",
        },
      ]);

      if (checkUser(addUserData.userName)) {
        appUsers.push(new users(addUserData.userName));
        console.log(
          "User Added Successfully :) " +
            String(addUserData.userName).toLowerCase()
        );
      } else {
        console.log("User Already Exists");
      }
      break;
    // ---------------------------  Select User for To Do list ----------------
    case 2: // 2-- Select User to Add ToDo Items
      if (appUsers.length > 0) {
        const todoUser = await inquirer.prompt([
          {
            name: "addTodoUser",
            type: "list",
            choices: getUsers(),
            message: "Select User to add TODO list",
          },
        ]);

        // Add todo items for the user
        let todoFlag = true;
        while (todoFlag) {
          // Add toDo item for this user
          const addToDo = await inquirer.prompt([
            {
              name: "addToDO",
              type: "input",
              message: "Please Enter To Do item: ",
            },
          ]);
          appUsers[getUsersIndex(todoUser.addTodoUser)].addTodoItem(
            addToDo.addToDO
          );
          console.log("Item Added Successfully");
          const choices = await inquirer.prompt([
            {
              name: "again",
              type: "confirm",
              message: "Want to add another item? :",
              default: false,
            },
          ]);
          todoFlag = choices.again;
        }
      } else {
        console.error("No User Found");
      }
      break;

    case 3: // 3-- View Users to do list
      if (getUsers().length < 1 || getUsers().length === undefined) {
        console.log("No User Found");
        break;
      }
      const vtodoUser = await inquirer.prompt([
        {
          name: "viewTodoUser",
          type: "list",
          choices: getUsers(),
          message: "Select User to view his TODO list",
        },
      ]);

      if (
        appUsers[getUsersIndex(vtodoUser.viewTodoUser)].viewTodo().length > 0
      ) {
        console.log(appUsers[getUsersIndex(vtodoUser.viewTodoUser)].viewTodo());
        const utodoUser = await inquirer.prompt([
          {
            name: "updateTodoUser",
            type: "confirm",
            default: false,
            message: "Do you want to delete",
          },
        ]);
        if (utodoUser.updateTodoUser) {
          const uptodoUser = await inquirer.prompt([
            {
              name: "upTodoUser",
              type: "list",
              choices:
                appUsers[getUsersIndex(vtodoUser.viewTodoUser)].viewTodo(),
              message: "Select item to delete in the list",
            },
          ]);

          let a = appUsers[
            getUsersIndex(vtodoUser.viewTodoUser)
          ].deleteTodoItem(uptodoUser.upTodoUser);

          console.log("Task Deleted Successfully");
        }
      } else {
        console.log("No Tasks in the list");
      }

      break;

    case 4:
      usrAdditionChoice = false;
      break;
    default:
      break;
  }
}
