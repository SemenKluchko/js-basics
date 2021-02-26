// Work in progress! 
;const perfectNum = parseInt(
  prompt("Enter number that you want to sort."),
  );
  
  const isPerfects = function(num) {
  let sum = 0;
  for ( let i = 1; i < num ; i++ ) {
    if ( num % i == 0 ) {
        sum += i;
     }
    if ( sum == num ) {
          console.log("Perfect number");
         } else {
           console.log("Not a perfect number");
         }
   
  } // end for
  
  return;
  }; // end func
  
  
  console.log(isPerfects(perfectNum));
  
  /* function isPerfect(num) {
  let temp = 0;
  for (let i = 1; i < num; i++) {
  if (num % i == 0) temp += i;
  }
  if (temp == num) return true;
  else return false;
  }
  
  console.log(isPerfect(perfectNum)); */
