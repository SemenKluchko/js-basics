; const userNum1 = parseInt(
  prompt("Hi there! Please type a number here!"),
);

const userNum2 = parseInt(
  prompt("And type second number"),
);

const getNumber = function (a, b) {
    let result = 10;

    if (a < b) {
      result = -1;
    } else if (a > b) {
      result = 1;
    } else if (a == b) {
      result = 0;
    }

    return result;
 }

 console.log(getNumber(userNum1, userNum2));
