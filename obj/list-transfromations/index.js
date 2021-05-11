;
// List transformation and looping;

const game = { 
    suspects: [
      {  
        name: 'Sem',
        color: 'red',
      } , {
        name: 'Lara',
        color: 'orange',
      }
  ]
}; 


// Looping throughout nesting array

function foo() {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i]);
    }
  }
  
foo();




// here we loop through suspects array and log into console all values of properties;
// add 'guilty' to value that you think is guilty;  

function foo() {
    for (let i = 0; i < game.suspects.length; i++) {
        for(let key in game.suspects[i]) {
            if (game.suspects[i][key] === 'Sem') {
                console.log(game.suspects[i][key] + "Guilty");
            } else {
                console.log(game.suspects[i][key]);
            }
        }
    }
  }
  
foo();
