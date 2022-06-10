let firstNumber = 0;
let secondNumber = 0;
let operator;
let total = 0;
let operatorClicked = false;

function add(a, b) {
  let c = a + b;
  return c;
}

function subtract(a, b) {
  let c = a - b;
  return c;
}

function multiply(a, b) {
  let c = a * b;
  return c;
}

function divide(a, b) {
  let c = a / b;
  return c;
}

function remainder(a, b) {
  let c = a % b;
  return c;
}

function operate(a, x, b) {
  switch (x) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return remainder(a, b);
    default:
      console.log("Invalid operator");
  }
}

function populate(clickedId) {
  let display = document.getElementById("display");

  if (clickedId === "=") {
    total = operate(Number(firstNumber), operator, Number(secondNumber));
    display.textContent = total;
  }

  switch (clickedId) {
    case "add":
      operator = "+";
      display.textContent = "0";
      return (operatorClicked = true);
    case "subtract":
      operator = "-";
      display.textContent = "0";
      return (operatorClicked = true);
    case "multiply":
      operator = "*";
      display.textContent = "0";
      return (operatorClicked = true);
    case "divide":
      operator = "/";
      display.textContent = "0";
      return (operatorClicked = true);
    case "remainder":
      operator = "%";
      display.textContent = "0";
      return (operatorClicked = true);
  }

  if (operatorClicked === false) {
    firstNumber += clickedId;
    display.textContent = Number(firstNumber);
  } else {
    if (clickedId !== "=") {
      secondNumber += clickedId;
      display.textContent = Number(secondNumber);
    }
  }
}
