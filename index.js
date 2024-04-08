#! /usr/bin/env node
import inquirer from "inquirer";
let currencyRates = {
    USD: 1,
    PKR: 278.40,
    INR: 83.28,
    EURO: 0.92,
    SAR: 3.75,
    CAD: 1.36,
};
let userAnswers = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        choices: ["USD", "PKR", "INR", "EURO", "SAR", "CAD"],
        message: "Which currency you have to convert?"
    },
    {
        name: "toCurrency",
        type: "list",
        choices: ["USD", "PKR", "INR", "EURO", "SAR", "CAD"],
        message: " In which currency you will like to convert?"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount which  you have to convert : "
    }
]);
let fromCurrencyy = currencyRates[userAnswers.fromCurrency];
let toCurrency = currencyRates[userAnswers.toCurrency];
let baseCurrency = currencyRates.USD;
let amount = userAnswers.amount;
let baseAmount = amount / fromCurrencyy;
let finalAmount = baseAmount * toCurrency;
console.log(`Your Converted Amount is ${finalAmount.toFixed(2)} ${userAnswers.toCurrency}`);
