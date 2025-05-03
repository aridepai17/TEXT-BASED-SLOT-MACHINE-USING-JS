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

const getNumberOfLines = () => {
    while(true){
        const lines = prompt('Enter number of lines to bet on (1-3): ');
        const numberOflines = parseFloat(lines);

        if (isNaN(numberOflines) || numberOflines <= 0 || numberOflines > 3) {
            console.log("Invalid number of lines. Please enter a number between 1 and 3");
        } else {
            return numberOflines;
        }
    }
};

const getBet = (balance, lines) => {
    while(true){
        const bet = prompt('Enter the bet per line: ');
        const numberBet = parseFloat(bet);
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet amount. Please enter a positive number less than your balance");
        } else {
            return numberBet;
        }
    }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);