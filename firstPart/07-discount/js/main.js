;let discount = parseInt(
  prompt("Please type your purchase amount here and GET your DISCOUNT!"),
);

let discountSum,
totalValue;

if (discount >= 200 && discount < 300) {
  discountSum = discount * 0.03;
  totalValue = discount - discountSum;
  confirm(`You purchase amount is ${discount}! Your personal DICSOUNT 3%!!! Amount to pay with discount is ${totalValue}. Thank you!`);
} else if (discount >= 300 && discount < 500) {
  discountSum = discount * 0.05;
  totalValue = discount - discountSum;
  confirm(`You purchase amount is ${discount}! Your personal DICSOUNT 5%!!! Amount to pay with discount is ${totalValue}. Thank you!`);
} else if (discount >= 500) {
  discountSum = discount * 0.07;
  totalValue = discount - discountSum;
  confirm(`You purchase amount is ${discount}! Your personal DICSOUNT 7%!!! Amount to pay with discount is ${totalValue}. Thank you!`);
} else {
  confirm(`You purchase amount is ${discount}! It is not enough to receive a discount. Please continue your shooping and get discount!`);
}