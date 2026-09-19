//Grab the elements we need to work with
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultBox = document.getElementById("result");
const opButtons = document.querySelectorAll(".op-btn");
const equalsBtn = document.getElementById("equals-btn");
const resetBtn = document.getElementById("reset-btn");

//Keep track of which operator is currently selected
let selectedOperator = null;

//When an operator button is clicked
opButtons.forEach(button => {
  button.addEventListener("click", () => {
    //Remove "selected" style from all operator buttons
    opButtons.forEach(btn => btn.classList.remove("selected"));

    //Add "selected" style to the one just clicked
    button.classList.add("selected");

    //Store which operator was chosen (+, -, *, /)
    selectedOperator = button.dataset.op;
  });
});

//When "=" is clicked
equalsBtn.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  // Check both numbers are valid
  if (isNaN(num1) || isNaN(num2)) {
    resultBox.textContent = "Enter both numbers";
    return;
  }


  if (!selectedOperator) {
    resultBox.textContent = "Choose an operator";
    return;
  }

  let result;

  if (selectedOperator === "+") {
    result = num1 + num2;
  } else if (selectedOperator === "-") {
    result = num1 - num2;
  } else if (selectedOperator === "*") {
    result = num1 * num2;
  } else if (selectedOperator === "/") {
    if (num2 === 0) {
      resultBox.textContent = "Cannot divide by 0";
      return;
    }
    result = num1 / num2;
  }

  resultBox.textContent = result;
});

//When "Reset" is clicked
resetBtn.addEventListener("click", () => {
  num1Input.value = "";
  num2Input.value = "";
  selectedOperator = null;
  opButtons.forEach(btn => btn.classList.remove("selected"));
  resultBox.textContent = "0";
});