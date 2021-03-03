;const userNum1 = parseInt(
  prompt("Please enter number one."),
);

const userNum2 = parseInt(
  prompt("Please enter number two."),
);

const userNum3 = parseInt(
  prompt("Please enter number three."),
);

const splitNumber = function (a, b, c) {
  let result = "" + a + b + c;

  return result;
}

console.log(splitNumber(userNum1, userNum2, userNum3));
