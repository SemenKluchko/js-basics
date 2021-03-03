;let shoppingList = [
  { name: "Milk", quantity: 3, bought: true, },
  { name: "Potatoes", quantity: 5, bought: true, },
  { name: "Tomatoes", quantity: 9, bought: true, },
  { name: "Water", quantity: 2, bought: false, },
  { name: "Cheese", quantity: 1, bought: false, },
  { name: "Beef", quantity: 4, bought: true, },
];

// First task 
function compareShoppingList(firstItem, secondItem) {
  if (firstItem.bought === true && secondItem.bought === false) {
    return -1;
  } else if (firstItem.bought === false && secondItem.bought === true) 	{
    return 1;
  } else {
    return 0;
  }
}

console.log(shoppingList.sort(compareShoppingList)); 


// Second task 
const products = [
{ name: "Water", quantity: 7, bought: false, },
{ name: "Pork", quantity: 17, bought: false, },
{ name: "Cheese", quantity: 7, bought: false, }
];

function addProductsToList(rowList, newList)
{
	let isExists = false;
	let sizeOfRowList = rowList.length;
	let sizeOfNewList = newList.length;
	let tmp;

	for(let i = 0; i < sizeOfNewList; ++i){
		for(let j = 0; j < sizeOfRowList; ++j) {
			if(newList[i].name === rowList[j].name) {
				rowList[j].quantity += newList[i].quantity;
				isExists = true;
			}
			else {
				tmp = newList[i];
			}
			}
		if(!isExists) {
			rowList.push(tmp);
		}
	}
	return rowList;
}

addProductsToList(shoppingList, products);
console.log(shoppingList);


// Third task
function bougth(list, productName) {
  for (let key in list) {
    if (list[key].name === productName && list[key].bought === false) {
      list[key].bought = true ;
    } 
    }
    return list;
}

bougth(shoppingList, "Water");
console.log(shoppingList);
