;let check = [
	{ name: "Milk", quantity: 3, price: 6.9, },
  { name: "Pork", quantity: 2, price: 20, },
  { name: "Beef", quantity: 5, price: 42, },
  { name: "Potatoes", quantity: 6, price: 14, },
  { name: "Cheese", quantity: 1, price: 36, },
];


// First Task
const getMagazineCheck = function(list) {
let result; 

for (let key in list) {
 result = console.log("Product: " + list[key].name + "; Quantity: " +  list[key].quantity + "; Price: " + list[key].price + "$");
}

return result;
};

getMagazineCheck(check);

// Second Task 
// work in progress

// Third task 
