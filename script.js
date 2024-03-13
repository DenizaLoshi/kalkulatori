const container = document.querySelector('.container');
const keys = container.querySelector('.operatorKeys');
const display = container.querySelector('.display');

let operator = '';
let displayValue = '';


function updateDisplay(){
  display.textContent = displayValue;

}

function appendToDisplay(value){
  if (displayValue == '0'){
    displayValue = value;
  } else{
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay(){
  displayValue = '0';
  updateDisplay();
}

function operatorat(selectedOperator){
  operator = selectedOperator;
  displayValue += selectedOperator;
  updateDisplay();
}

function calculateNumbers() {
  let result = '';
  const operands = displayValue.split(operator);
  const n1 = parseFloat(operands[0]);
  const n2 = parseFloat(operands[1]);

  if (operator === '+') {
    result = n1 + n2;
  } else if (operator === '-') {
    result = n1 - n2;
  } else if (operator === '*') {
    result = n1 * n2;
  } else if (operator === ':') {
    result = n1 / n2;
  }

  displayValue = result.toString();
  updateDisplay();
}

document.getElementById('btnFloatNumber').addEventListener('click', function() {
  if (!displayValue.includes('.')) {
    appendToDisplay('.');
  }
});
