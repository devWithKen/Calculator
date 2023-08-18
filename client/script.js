class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperandTextElement = previousOperand;
    this.currentOperandTextElement = currentOperand;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = ''; 
    previousOperand.innerText = '';
    this.operation = undefined; 
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
    console.log('Current Operand:', this.currentOperand);
  }

  chooseOperation(operation) {
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;

    if (this.operation === '%') {
        this.currentOperand = 100;
    } else {
      this.currentOperand = ''; 
    }
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "×":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      case "%":
        computation = prev / current;
        break;
      default:
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

getDisplayNumber(number) {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split('.')[0]);
  const decimalDigits = stringNumber.split('.')[1];
  let intergerDisplay;
  if (isNaN(integerDigits)) {
    intergerDisplay = '';
  } else {
    intergerDisplay = integerDigits.toLocaleString('en', {
      maximumFractionDigits: 0 });
  }
  if (decimalDigits != null) {
    return `${intergerDisplay}.${decimalDigits}`;
  } else {
    return intergerDisplay;
  }
}

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
    this.getDisplayNumber(this.currentOperand);
    if (this.previousOperand !== '') {
      this.previousOperandTextElement.innerText = 
        `${this.getDisplayNumber(this.previousOperand)}${this.operation}`
    }
  }
}

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
const previousOperand = document.querySelector('.previousOperand');
const currentOperand = document.querySelector('.currentOperand');
const equalsButton = document.querySelector('.equals');

const calculator = new Calculator(previousOperand, currentOperand);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
});

clearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
});
