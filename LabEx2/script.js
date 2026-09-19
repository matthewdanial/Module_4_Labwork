
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultBox = document.getElementById("result");
const opButtons = document.querySelectorAll(".op-btn");
const equalsBtn = document.getElementById("equals-btn");
const resetBtn = document.getElementById("reset-btn");


let selectedOperator = null;


opButtons.forEach(button => {
  button.addEventListener("click", () => {
    
    opButtons.forEach(btn => btn.classList.remove("selected"));

   
    button.classList.add("selected");

    
    selectedOperator = button.dataset.op;
  });
});


equalsBtn.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  
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


resetBtn.addEventListener("click", () => {
  num1Input.value = "";
  num2Input.value = "";
  selectedOperator = null;
  opButtons.forEach(btn => btn.classList.remove("selected"));
  resultBox.textContent = "0";
});