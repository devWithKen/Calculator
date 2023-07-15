const numbers = document.querySelectorAll(".number");
const operation = document.querySelector("#operation");
const del = document.querySelector('#delete');
const clear = document.querySelector('#clear');
const add = document.querySelector('#add');

let operate = [];

numbers.forEach((button) => {
  button.addEventListener("click", function() {
    const value = this.value;
    operate.push(value);
    operation.textContent = operate.join('');
    const num = parseInt(operation.textContent)
    console.log(typeof(num));
  });
});

del.addEventListener('click', function() {
    operation.textContent = operate.join('');
    operate.pop();
});

clear.addEventListener('click', function() {
    operate = [];
    operation.textContent = '0';
});

const equals = document.querySelector('#equals');

function addition() {
  const calculate = operation.textContent.split('+');
  let count = 0;
    for (let i=0; i<calculate.length; i++) {
      const result = count += 
      parseInt(calculate[i]);
      console.log(calculate);
      console.log(result);
    }
}

const operators = ['+', '-', '/', '*'];

function operation() {
  
}

equals.addEventListener('click', addition);
