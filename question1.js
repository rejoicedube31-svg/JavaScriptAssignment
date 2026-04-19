// Create input field
let input = document.createElement("input");
input.type = "number";
input.placeholder = "Enter score (0–100)";

// Create button
let button = document.createElement("button");
button.textContent = "Check Grade";

// Create output area
let output = document.createElement("p");

// Add elements to page
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(output);

// Button click event
button.onclick = function () {
  let score = Number(input.value);
  let grade;

  // Switch for grade
  switch (true) {
    case (score >= 90 && score <= 100):
      grade = "A";
      break;
    case (score >= 80 && score < 90):
      grade = "B";
      break;
    case (score >= 70 && score < 80):
      grade = "C";
      break;
    case (score >= 60 && score < 70):
      grade = "D";
      break;
    case (score >= 0 && score < 60):
      grade = "F";
      break;
    default:
      grade = "Invalid score";
  }

  // Ternary for pass/fail
  let result = (score >= 60 && score <= 100) ? "Passed" : "Failed";

  // Display result (input stays visible for next use)
  output.textContent = "Grade: " + grade + " | Result: " + result;
};