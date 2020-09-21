// cache the DOM
// let display = document.getElementById('display');
// const clear = document.getElementById('clear');
// const numbers = document.getElementsByClassName('numBtn');
// const addSubtract = document.getElementById('switch');

// Make buttons "clickable"
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener('click', function(){
//         updateDisplay(numbers[i].innerText);
//     })
// }
//     
// // Clear 
// clear.addEventListener('click', function() {
//     updateDisplay(0);
//     });
// 
// // Make display
// function updateDisplay(number) {
//     let numberString = number.toString();
//     display.innerText = numberString;
// }
// 
// // Logic 
// 
// let currentNumber;
// let previousNumber;
// let operator;
// let equals;
// let decimal;

// ATTEMPT #2
const numbers = document.getElementsByClassName('numBtn');
let currentNumber = 0;
let previousNumber = 0;
let display = document.getElementById('display');

// Create userinput to be passed to Current Number
for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function(){
        createCurrentNumber(numbers[i].innerText);
        })
}

// Create currentNumber
function createCurrentNumber(input) {
    
    display.innerText = createCurrentNumber(numbers[i].innertext)

}

