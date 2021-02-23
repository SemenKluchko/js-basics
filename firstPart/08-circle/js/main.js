;confirm("Hi! Please click 'OK' if you would to find out if a circle fits to perimeter of square!")

let circle = parseInt(
  prompt("Please enter the circumference."),
);

let square = parseInt(
  prompt("Please enter perimeter of square."),
);

confirm("Let's go to find out!");

let squareSide = square / 4;
let radius = circle / (2 * 3.14);

if (squareSide / 2 >= radius ) {
  console.log(`Congradulations! Everything fine! Circle fit perfectly! Circle size: ${circle} Perimeter of square: ${square}`)
} else {
  console.log("Sorry, but this length of circle don't enought to fit in this square perimeter!")
}
