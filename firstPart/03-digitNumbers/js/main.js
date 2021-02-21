;

let numbers = parseInt(
  prompt("Please type a three-digit numbers"),
);

numbers = numbers.toString();
if (numbers.length != 3) {
  console.log("Please! Type a theree numbers!");
} else if (numbers[0] == numbers[1] || numbers[1] == numbers[2] || numbers[0] == numbers[2]) {
  console.log("There is the same numbers!");
} else {
  console.log("Result is:", numbers);
} 
