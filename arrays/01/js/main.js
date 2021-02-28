; let shoppingList = [
  { name: "Milk", quantity: 3, bought: "no", },
  { name: "Potatoes", quantity: 5, bought: "yes", },
  { name: "Tomatoes", quantity: 9, bought: "yes", },
  { name: "Water", quantity: 2, bought: "no", },
  { name: "Cheese", quantity: 1, bought: "no", },
  { name: "Beef", quantity: 4, bought: "yes", },
];

// First task 
function compareShoppingList(firstItem, secondItem) {
  if (firstItem.bought === "yes" && secondItem.bought === "no") {
    return -1;
  } else if (firstItem.bought === "no" && secondItem.bought === "yes") 	{
    return 1;
  } else {
    return 0;
  }
}

/* console.log( shoppingList.sort(compareShoppingList) ); */


// Second task 
// Here i have a problem. This work only with one object, but not with array of objects
const products = { name: "Water", quantity: 7, bought: "no", };

function addItem(shoppingList, newItem) {
const result = shoppingList.find( list => list.name === products.name);
return (result) ? result.quantity = result.quantity + products.quantity : shoppingList.push(products);
}

addItem(shoppingList, products);
console.log(shoppingList);

 
// Third Task
function buyCheck(nameOfProduct) {
// TODO: iteration of array, find name of argument and change bougth to "yes", else = keep product in bought 
const result = shoppingList.find( list => list.name === products.name);
} 

buyCheck();

