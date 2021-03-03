;const firstNum = parseInt(
    prompt("Type first number."),
  );

const secondNum = parseInt(
    prompt("Type second number."),
  ); 

let result = 1;
const smallerNumber = firstNum > secondNum ? secondNum : firstNum;
  
  for (let i = smallerNumber; i > 0; --i) {
    if (firstNum % i == 0 && secondNum % i == 0) {
        result = i;
        break;  
    }
  }
  
  console.log(result);
