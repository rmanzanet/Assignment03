// Declare the variable without assigning a value
let coinFlip;  

// Get the number of times to flip the coin from the user
let numberOfFlips = parseInt(prompt("Enter the number of times to flip the coin:"), 10);

// Validate user input to ensure it's a number
if (isNaN(numberOfFlips) || numberOfFlips <= 0) {
    console.log("Invalid input. Please enter a positive number.");
} else {
    // Loop the specified number of times
    for (let i = 0; i < numberOfFlips; i++) {
        // Generate a random number: 0 (Heads) or 1 (Tails)
        coinFlip = Math.round(Math.random());

        // Check the result and display it in the console
        if (coinFlip === 0) {
            console.log("Heads");
        } else {
            console.log("Tails");
        }
    }
}
