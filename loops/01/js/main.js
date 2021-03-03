;let startNumber = parseInt(
  prompt("Type first number, whos start the line."),
);

let endNumber = parseInt(
  prompt("Type last number, whos end the line."),
);

let sum = 0;

// variant with while
while ( startNumber <= endNumber ) {
    sum = sum + startNumber;
    startNumber++;
}
console.log(sum);

// variant with for
// for ( let i = 0; i <= endNumber; ++i) {
//   sum = sum + i;
// }
// console.log(sum);
