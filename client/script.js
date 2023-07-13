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

