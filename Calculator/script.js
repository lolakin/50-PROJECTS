let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#resultbox");
let clearBtn = document.querySelector('.allclearButton');
let operatorsBtn = document.querySelectorAll('.calc-action-button');

let back = document.querySelectorAll('.backspace');

let equals = document.querySelector(".equalButton");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];
let operatorsBtnSpread = [...operatorsBtn];

for (let i = 0; i < operatorsBtn.length; i++) {
  
  operatorsBtnSpread[i].addEventListener('click', () => {
    num1 = Number(resultBox.innerHTML);
    operator = operatorsBtnSpread[i].value;
    resultBox.innerHTML = '0';
  });

}

// variables for operations
var num1 = 0, num2 = 0, result = 0, operator = '+';

// For Number Inputs
btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    // Inner Values for calculator

    var value = btns[i].value;

    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = value;
    } else {
      resultBox.innerHTML += value;
    }

  });
});


// Function to evalute Strings
function evaluate() {
  num2 = Number(resultBox.innerHTML);
  switch (operator) {

    case '+':
      resultBox.innerHTML = num1 + num2;
    break;
    case '/':
      resultBox.innerHTML = num1 / num2;
      break;
    case '-':
      resultBox.innerHTML = num1 - num2;
      break;
    case 'X':
      resultBox.innerHTML = num1 * num2;
      break;
    case '%':
      resultBox.innerHTML = num1 % num2;
      break;
      
  }
}

// To calculate All Input
equals.addEventListener('click', ()=> {
  evaluate();
})

// Clear all Inputs
clearBtn.addEventListener('click', ()=> {
  resultBox.innerHTML = "0";
})

// back.addEventListener('click', ()=> {
//   resultBox.innerHTML = 
// })



