// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// FUNCTION TO VALIDATE USER INPUT
function getValidNumber(promptMessage, min, max) {
    let value;
    do {
        value = parseFloat(prompt(promptMessage));
    } while (isNaN(value) || value < min || value > max);
    return value;
}

// COLLECT VALIDATED VALUES FROM THE USER
investment = getValidNumber('Enter investment amount as xxxx.xx (positive number only)', 0.01, Number.MAX_VALUE);
rate = getValidNumber('Enter interest rate as xx.x (between 0 and 6%)', 0, 6);
years = getValidNumber('Enter the number of years you want to invest for (between 1 and 30)', 1, 30);

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);
