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
let operands = [];
let operators = [];
let result;
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // if (input.placeholder.includes(".")) {
    //   input.placeholder += button.textContent;
    // } else {
    //   input.placeholder = button.textContent;
    // }
    input.placeholder = button.textContent;
    if (operands.length <= 1) {
      operands.push(Number(input.placeholder));
    } else {
      operands = [];
    }
  });
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operands.length === 1 && operators.length < 1) {
      operators.push(button.textContent);
    } else {
      return;
    }
    console.log(operators);
  });
});

const resultButton = document.querySelector(".equal");

resultButton.addEventListener("click", () => {
  if (operands.length === 2 && operators.length === 1) {
    const answer = operate(operands[0], operands[1], ...operators);
    result = answer;
    operands = [];
    operators = [];
    operands.push(result);
    input.placeholder = answer;
  } else {
    return;
  }
});

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  operands = [];
  operators = [];
  result = "";
  input.placeholder = "";
});

const dotButton = document.querySelector("#dot");

dotButton.addEventListener("click", () => {
  const placeholder = input.placeholder;
  if (placeholder === "") {
    return;
  } else if (placeholder.includes(dotButton.textContent)) {
    return (dotButton.disabled = true);
  }
  input.placeholder += dotButton.textContent;
  dotButton.disabled = true;
});
