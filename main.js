#! /usr/bin/env node
import inquirer from "inquirer";
//Define the list of currencies and their exchange rates;
console.log("\n \t 'Welcome to code with Sabeen Currency converter'\t\n");
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70, //Pakistani rupees
};
//prompt user to select currency to convert from and to,
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select a currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//currency conversion formula;
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the converted amount;
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);
