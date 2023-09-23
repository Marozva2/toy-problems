const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const speedLimit = 70;
const pointsPer5OverLimit = 1;
const maxPointsBeforeLicenseSuspension = 12;

// Function to calculate demerit points
function calculateDemeritPoints(speed) {
  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / 5);

    if (demeritPoints > maxPointsBeforeLicenseSuspension) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}

// Prompt the user for car's speed
rl.question("Enter the car's speed: ", function(inputSpeed) {
  // Convert the input string to a number
  const speed = parseFloat(inputSpeed);

  // Check if the input is a valid number
  if (!isNaN(speed)) {
    calculateDemeritPoints(speed);
  } else {
    console.log("Invalid input. Please enter a valid speed.");
  }

  // Close the readline interface to allow the program to exit
  rl.close();
});
