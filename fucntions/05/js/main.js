;const perfectNum = parseInt(
  prompt("Enter number that you want to sort."),
  );

  let sum = 0;

  const isPerfect = function(num) {
  for (let i = 1; i < num ; i++) {
    if (num % i == 0)  {
        sum += i; 
     } else {
       return console.log("No! It's not a perfect number!");
     }
    if (sum == num) {
       return console.log("It's perfect number ");
     } 
         
  } // end for
}; // end func
  
isPerfect(perfectNum);
