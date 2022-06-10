let firstNumber = 0;
let secondNumber = 0;
let operator;
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
    total = Math.round((firstNumber + Number.EPSILON) * decimals) / decimals;
    display.textContent = total;
  }

  switch (clickedId) {
    case "add":
      operator = "+";
      display.textContent = "0";
      return operatorClicked++;
    case "subtract":
      operator = "-";
      display.textContent = "0";
      return operatorClicked++;
    case "multiply":
      operator = "*";
      display.textContent = "0";
      return operatorClicked++;
    case "divide":
      operator = "/";
      display.textContent = "0";
      return operatorClicked++;
    case "remainder":
      operator = "%";
      display.textContent = "0";
      return operatorClicked++;
  }

  if (operatorClicked === 0) {
    firstNumber += clickedId;
    display.textContent = Number(firstNumber);
  } else if (operatorClicked === 1) {
    if (clickedId !== "=") {
      secondNumber += clickedId;
      firstNumber = operate(
        Number(firstNumber),
        operator,
        Number(secondNumber)
      );
      display.textContent = Number(secondNumber);
    }
  } else if (operatorClicked > 1) {
    if (clickedId !== "=") {
      secondNumber = 0;
      secondNumber += clickedId;
      firstNumber = operate(
        Number(firstNumber),
        operator,
        Number(secondNumber)
      );
      display.textContent = Number(secondNumber);
    }
  }
}
