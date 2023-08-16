let sum = 0;

const num = document.querySelector('.num');
const increment = document.querySelector('.increment'); 
const decrement = document.querySelector('.decrement');
const reset = document.querySelector('.reset');
// increment
increment.addEventListener('click', function () {
    sum++;
    num.textContent = sum;
     if (sum > 0) {
        num.style.color = 'green'
    }
})
// decrement
decrement.addEventListener('click', function () {
    sum--;
    num.textContent = sum;
    if (sum < 0) {
        num.style.color = 'red'
    }
})
reset.addEventListener('click', function () {
    sum = 0;
    num.textContent = sum;
})