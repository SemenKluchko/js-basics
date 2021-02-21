;

function palindrome(str) {
  let re = /[\W_]/g; // remove some unwanted 
  let lowRegStr = str.toLowerCase().replace(re, ''); // everything to lovercase and remove spaces and all what we type in 're' variable
  let reverseStr = lowRegStr.split('').reverse().join(''); // so split is change our variable to array, reverse array, and join all together in reverse position
  return reverseStr === lowRegStr; // return a boolean value, and understand palindrom number or not
}

console.log( 
  palindrome( 
    prompt("Type a five numbers"), 
  )
);
