;const userAge = parseInt(
    prompt('Hello! Please type your age below by numbers.'),
  );
  
  if (userAge <= 2) {
    console.log(`User age is ${userAge}. He/She is a child. `)
  } else if ((userAge >= 12) && (userAge <= 18)) {
    console.log(`User age is ${userAge}. He or She is a teenager.`)
  } else if ((userAge >= 19) && (userAge <= 59)) { 
    console.log(`User age is ${userAge}. He or She is a adult.`)
  } else if (userAge >= 60) {
    console.log(`User age is ${userAge}. He or She is a old.`)
  } else {
    console.log(`User age is ${userAge}.`)
  }
