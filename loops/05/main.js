;

let arr = [];

for (let i = 0; i < 10; ++i) {
  let number = prompt("Enter 10 numbers. Positive, negative and some zeros.");

  if (number === "" || number === null || isNaN(number)) break;

  arr.push(+number);
}
let positiveCounter = 0;
let negativeCounter = 0;
let equalZeroCounter = 0;
let oddNumbersCounter = 0;
let evenNumbersCounter = 0;

for (let i = 0; i < arr.length; ++i) {
  if (arr[i] < 0) ++negativeCounter;
  if (arr[i] > 0) ++positiveCounter;
  if (arr[i] === 0) ++equalZeroCounter;  
  if (arr[i] % 2 != 0) ++oddNumbersCounter;
  if (arr[i] != 0 && arr[i] % 2 === 0) ++evenNumbersCounter;
}

confirm(`Your numbers: ${arr}\n Positive: ${positiveCounter}\n Negative: ${negativeCounter}\n Equal Zero: ${equalZeroCounter}\n Odd Numbers: ${oddNumbersCounter}\n Even Numbers: ${evenNumbersCounter}`);
