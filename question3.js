// Create input for name
let nameInput = document.createElement("input");
nameInput.placeholder = "Enter name";

// Create input for isMorning (true/false)
let morningInput = document.createElement("input");
morningInput.placeholder = "Is it morning? true or false";

// Create button
let button = document.createElement("button");
button.textContent = "Greet";

// Output area
let output = document.createElement("div");

// Add elements to page
document.body.appendChild(nameInput);
document.body.appendChild(morningInput);
document.body.appendChild(button);
document.body.appendChild(output);

// Function using logical operator + template literal
function greetingBot(name, isMorning) {

  if (isMorning === true && name) {
    return `Good morning, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

// Button click event
button.onclick = function () {

  let name = nameInput.value;

  // Convert string input to boolean
  let isMorning = morningInput.value.toLowerCase() === "true";

  // Call function
  let result = greetingBot(name, isMorning);

  // Display output in window
  output.innerHTML = `
    <b>Name:</b> ${name} <br>
    <b>Output:</b> ${result}
  `;
};