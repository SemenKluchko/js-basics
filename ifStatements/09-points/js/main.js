;const firstQuestion = parseInt(
  prompt("What tag going after head? \n 1. <body /> \n 2. <main /> \n 3. <html />"),
);

const secondQuestion = parseInt(
  prompt("What tag make biggest heading? \n 1. <h1 /> \n 2. <big /> \n 3. <strong />"),
);

const thirdQuestion = parseInt(
  prompt("Which css property make text uppercase? \n 1. text-decoration  \n 2. text-tranform \n 3. font-style"),
);

let totalScore = 0;

// Here i'm watching video about pro-style coding on youtube, i'm trying and it's works. Comment please if it's bad style!
if ( firstQuestion == 1 ) totalScore = 2;
  if ( secondQuestion == 1 ) totalScore = totalScore + 2;
    if ( thirdQuestion == 2 ) totalScore = totalScore + 2;

  
console.log(`Wow! Your score is ${totalScore}`);
