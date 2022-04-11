function operate(x, y, operator) {
  const operations = {
    "+": (x, y) => {
      return x + y;
    },

    "-": (x, y) => {
      return x - y;
    },

    "*": (x, y) => {
      return x * y;
    },

    "/": (x, y) => {
      if (y === 0) return "You can't divide by zero buddy.";
      const result = x / y;
      if (result % 1 === 0) {
        return result;
      } else {
        return Number(result.toFixed(2));
      }
    },
  };

  return operations[operator](x, y);
}

const numberButtons = document.querySelectorAll(".number");
const input = document.querySelector("input");
const dotButton = document.querySelector("#dot");
let operands = [];
let operators = [];
let result;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    input.value += button.textContent;
  });
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operands.length < 1) {
      operands.push(Number(Number(input.value)));
      input.placeholder = input.value;
      input.value = "";
    }

    if (operands.length === 1 && operators.length < 1) {
      operators.push(button.textContent);
    } else {
      operators = button.textContent;
    }

    if (dotButton.disabled === true) dotButton.disabled = false;
    console.log(operators);
    console.log(operands);
    console.log(result);
  });
});

const resultButton = document.querySelector(".equal");

resultButton.addEventListener("click", () => {
  if (operands.length === 1) {
    operands.push(Number(input.value));
    input.placeholder = input.value;
    input.value = "";
  }
  if (operands.length === 2 && operators.length === 1) {
    const answer = operate(operands[0], operands[1], ...operators);
    result = answer;
    operands = [];
    operators = [];
    operands.push(result);
    input.placeholder = result;
  } else {
    console.log(operands);
    console.log(operators);
    return;
  }

  if (dotButton.disabled === true) dotButton.disabled = false;
  console.log(operands);
  console.log(operators);
});

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  operands = [];
  operators = [];
  result = "";
  input.placeholder = "";
});

dotButton.addEventListener("click", () => {
  const value = input.value;
  if (value === "") {
    return;
  } else if (value.includes(dotButton.textContent)) {
    return (dotButton.disabled = true);
  }
  input.value += dotButton.textContent;
  dotButton.disabled = true;
});
