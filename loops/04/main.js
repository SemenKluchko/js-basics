;let number = parseInt(
	prompt("Enter a number, and I'll give u a devider of this number"),
);
count = 0;

while(number > 1) {
  number /= 10;
  ++count;
}

console.log(count);
