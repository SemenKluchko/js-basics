;
// Destructuring with arrays and objects;
// here we need to exporting color to two different strings using destructuring;
const suspects = [
    {  
      name: 'Sem',
      color: 'red',
    } , {
      name: 'Lara',
      color: 'orange',
    }
];

// We have two ways to do this...
const [color1, color2] = [suspects[0].color , suspects[1].color ];
const [ {color: color1},{color: color2}] = suspects;

console.log(color1, color2);
