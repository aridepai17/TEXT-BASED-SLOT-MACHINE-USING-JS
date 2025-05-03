// Deposit some money
// Determine number of lines to bet on 
// Collect bet amount
// Spin the slot machine
// Check if the user won
// Give the user their winnings
// Play again

const prompt = require('prompt-sync')();
const deposit = () => {
    while (true) {
        const depositAmount = prompt('Enter deposit amount: ');
        const numberDepositAmount = parseFloat(depositAmount);
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount. Please enter a positive number");
        } else {
            return numberDepositAmount;
        }
    }
};


const depositAmount = deposit();
