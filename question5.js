// ===== OUTPUT AREA =====
let output = document.createElement("div");
document.body.appendChild(output);

// ===== INPUT FIELDS =====

// Array 1 input
let arr1Input = document.createElement("input");
arr1Input.placeholder = "Enter Array 1 (e.g. 1,2,3)";

// Array 2 input
let arr2Input = document.createElement("input");
arr2Input.placeholder = "Enter Array 2 (e.g. 4,5,6)";

// Button
let button = document.createElement("button");
button.textContent = "Process Arrays";

// Add to page
document.body.appendChild(arr1Input);
document.body.appendChild(arr2Input);
document.body.appendChild(button);

// ===== CLICK EVENT =====
button.onclick = function () {

  // Convert input strings into arrays
  let arr1 = arr1Input.value.split(",").map(Number);
  let arr2 = arr2Input.value.split(",").map(Number);

  // Spread operator merge
  let mergedArray = [...arr1, ...arr2];

  output.innerHTML = "";

  // =========================
  // 1. SPREAD OPERATOR OUTPUT
  // =========================
  output.innerHTML += "<b>Merged Array (Spread Operator):</b><br>";
  output.innerHTML += mergedArray.join(", ") + "<br><br>";

  // =========================
  // 2. FOR LOOP PATTERN
  // =========================
  output.innerHTML += "<b>Pattern Output:</b><br>";

  let pattern = "";

  for (let i = 1; i <= 5; i++) {
    let spaces = "&nbsp;&nbsp;&nbsp;".repeat(5 - i);
    let stars = "";

    for (let j = 1; j <= i; j++) {
      stars += "*&nbsp;&nbsp;&nbsp;";
    }

    pattern += spaces + stars + "<br>";
  }

  output.innerHTML += pattern + "<br>";

  // =========================
  // 3. WHILE LOOP (10 TO 1)
  // =========================
  output.innerHTML += "<b>While Loop (10 to 1):</b><br>";

  let num = 10;
  let countdown = "";

  while (num >= 1) {
    countdown += num + " ";
    num--;
  }
    output.innerHTML += countdown;
};