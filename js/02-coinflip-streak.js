// Declare the variable without assigning a value
let coinFlip;

// Initialize a streak counter
let streak = 0;

do {
    // Generate a random number: 0 (Heads) or 1 (Tails)
    coinFlip = Math.round(Math.random());

    // Check the result and display it in the console
    if (coinFlip === 0) {
        console.log("Heads");
        streak++; // Increase streak count if it's Heads
    } else {
        console.log("Tails");
        console.log(`Your streak was: ${streak} Heads in a row!`);
    }
} while (coinFlip === 0); // Loop continues until Tails is flipped
