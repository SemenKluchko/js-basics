;const getNumber = parseInt(
  prompt("Enter a number!"),
);

const getFact = function (num) {
  let result = 1;

  for (let i = 0; i < num; i++) {
   result *= (num - i);
  }

  return result;
};

console.log(getFact(getNumber));
