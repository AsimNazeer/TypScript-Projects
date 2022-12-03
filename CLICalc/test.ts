import inquirer from "inquirer";

let num: number;
async function test() {
  const ans = await inquirer.prompt([
    {
      name: "one",
      type: "input",
      message: "Enter Value",
    },
  ]);
  return ans.one;
}

let myPromise = test();

myPromise.then(function (data) {
  num = data;
  console.log("You Entered :" + num);
});
