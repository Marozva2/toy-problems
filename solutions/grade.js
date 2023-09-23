// Import the 'readline' module to read input from the terminal
const readline = require('readline');

// Create an interface to read input from standard input and write output to standard output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define a function to calculate the grade
function calculateGrade() {
  // Ask the user to enter student marks and provide a callback function to handle the input
  rl.question("Enter student marks (between 0 and 100): ", function(input) {
    // Convert the input string to a floating-point number
    const marks = parseFloat(input);

    // Check if the input is a valid number within the specified range
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
      let grade;

      // Determine the grade based on the input marks
      if (marks > 79) {
        grade = "A";
      } else if (marks >= 60 && marks <= 79) {
        grade = "B";
      } else if (marks >= 50 && marks <= 59) {
        grade = "C";
      } else if (marks >= 40 && marks <= 49) {
        grade = "D";
      } else {
        grade = "E";
      }

      // Display the calculated grade in the console
      console.log(`The student's grade is: ${grade}`);
    } else {
      // Display an error message for invalid input
      console.log("Invalid input. Marks should be between 0 and 100.");
    }

    // Close the 'readline' interface to allow the program to exit
    rl.close();
  });
}

// Call the function to calculate the grade
calculateGrade();
