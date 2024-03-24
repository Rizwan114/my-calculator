#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Please select of one operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Suptraction", "Multiplication", "Division",],
    },
]);
// condition statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Suptraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Slect Correct Number");
}
