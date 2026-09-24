import './style.css';

let count = 0;

const countDisplay = document.querySelector('#count');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const resetButton = document.querySelector('#reset');

plusButton.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

minusButton.addEventListener('click', () => {
  count--;
  countDisplay.textContent = count;
});

resetButton.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
});