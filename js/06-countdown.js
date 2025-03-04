// Prompt the user for a number
let userNumber = parseInt(prompt("Enter a number to count down from:"), 10);

// Validate if the input is a number
if (isNaN(userNumber) || userNumber < 0) {
    console.log("Please enter a valid positive number.");
} else {
    // Loop from the user's number down to 0
    for (let i = userNumber; i >= 0; i--) {
        console.log(i);
    }
}
