;

const year = parseInt(
  prompt("Please enter the date of the year"),
);

if ( year % 400 == 0 || year % 4 == 0 && year % 100 != 0 ) {
  console.log("Leap year", year);
} else {
  console.log("Not Leap year", year);
}
