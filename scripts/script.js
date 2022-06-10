let firstNumber = 0;
let secondNumber = 0;
let operator = [];
let total = 0;
let operatorClicked = 0;

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
    const decimals = Math.pow(10, 8);
    total = operate(Number(firstNumber), operator[0], Number(secondNumber));
    totalFormatted = Math.round((total + Number.EPSILON) * decimals) / decimals;
    display.textContent = totalFormatted;
  }

  if (clickedId !== "=") {
    if (operatorClicked === 0) {
      firstNumber += clickedId;
      display.textContent = Number(firstNumber);
    } else if (operatorClicked === 1) {
      if (clickedId !== "=") {
        secondNumber += clickedId;
        display.textContent = Number(secondNumber);
      }
    } else if (operatorClicked > 1) {
      if (clickedId !== "=") {
        firstNumber = operate(
          Number(firstNumber),
          operator[1],
          Number(secondNumber)
        );
        secondNumber = 0;
        secondNumber += clickedId;
        display.textContent = Number(secondNumber);
      }
    }
  }
}

function findOperator(clickedId) {
  switch (clickedId) {
    case "add":
      operator.unshift("+");
      display.textContent = "0";
      return operatorClicked++;
    case "subtract":
      operator.unshift("-");
      display.textContent = "0";
      return operatorClicked++;
    case "multiply":
      operator.unshift("*");
      display.textContent = "0";
      return operatorClicked++;
    case "divide":
      operator.unshift("/");
      display.textContent = "0";
      return operatorClicked++;
    case "remainder":
      operator.unshift("%");
      display.textContent = "0";
      return operatorClicked++;
  }
}

function clearDisplay() {
  let display = document.getElementById("display");

  firstNumber = 0;
  secondNumber = 0;
  operator = [];
  total = 0;
  operatorClicked = 0;

  display.textContent = "0";
}
