
// Input field
let input = document.createElement("input");
input.placeholder = 'Enter value like "100"';

// Button
let button = document.createElement("button");
button.textContent = "Process";

// Output area
let output = document.createElement("div");

// Add to page
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(output);

button.onclick = function () {

  // Get user input (including quotes)
  let rawValue = input.value;

  // Remove only outer quotes if they exist
  let cleanedValue = rawValue.replace(/^"|"$/g, "");

  // Convert to number
  let numValue = Number(cleanedValue);

  // Display conversion result
  output.innerHTML = `
    <b>Original Input:</b> ${rawValue} <br>
    <b>Converted Number:</b> ${numValue} <br><br>
  `;

  // Values to test
  let values = [0, "", "hello", null, undefined, NaN];

  output.innerHTML += "<b>Truthy & Falsy Results:</b><br>";

  // Loop through values
  values.forEach(function (val) {
    if (val) {
      output.innerHTML += val + " → Truthy<br>";
    } else {
      output.innerHTML += val + " → Falsy<br>";
    }
  });
};