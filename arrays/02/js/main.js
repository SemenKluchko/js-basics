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
const calculateTotalPrice = function(sum, list) {
  const result = sum + list.price;
  return result;
}
const totalPrice = check.reduce(calculateTotalPrice, 0);

console.log(totalPrice);

// Third task 
const result = check.sort(function(a, b){return b.price - a.price});
console.log ("Biggest price product: " +check[0].name + " " +check[0].price + "$");