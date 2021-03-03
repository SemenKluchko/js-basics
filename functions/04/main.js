;const num1 = parseInt(
  prompt("Enter first number"),
  );

const num2 = parseInt(
  prompt("Enter second number"),
  );


const getAreaRectacle = function (a, b) {
let result = 0;

 if ( isNaN(a) ) {
 	result = Math.pow(b, 2);
 } else if ( isNaN(b) ) {
  result = Math.pow(a, 2);
 } else  {
 	result = a * b;
 } 
 
 return result;
};

console.log(getAreaRectacle(num1, num2));
