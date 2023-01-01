import chalkAnimation from "chalk-animation";

const sleep = (ms = 2000) => new Promise((res, rej) => setTimeout(res, ms));

const sleep1 = (ms = 2000) => {
  new Promise((res, rej) => setTimeout(res, ms));
};

async function greetUser() {
  const welcomeMsg = chalkAnimation.rainbow(
    "Hello Dear -- Hope you are having a good day"
  );

  await sleep1();
  welcomeMsg.stop();
}
console.clear();
greetUser();
