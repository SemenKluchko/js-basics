;let shoppingList = [
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

console.log(shoppingList.sort(compareShoppingList)); 


// Second task 
const products = [
{ name: "Water", quantity: 7, bought: "no", },
{ name: "Pork", quantity: 17, bought: "no", },
{ name: "Cheese", quantity: 7, bought: "no", }
];

function addProductsToList(rowList, newList)
{
	let isExists = false;
	let sizeOfRowList = rowList.length;
	let sizeOfNewList = newList.length;

	let tmp;

	for(let i = 0; i < sizeOfNewList; ++i)
	{
		for(let j = 0; j < sizeOfRowList; ++j)
		{
			if(newList[i].name === rowList[j].name)
			{
				rowList[j].quantity += newList[i].quantity;
				isExists = true;
			}
			else
			{
				tmp = newList[i];
			}
		}

		if(!isExists)
		{
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
    if (list[key].name === productName && list[key].bought === "no") {
      list[key].bought = "yes" ;
    } 
    }
    return list;
}

bougth(shoppingList, "Water");
console.log(shoppingList);
