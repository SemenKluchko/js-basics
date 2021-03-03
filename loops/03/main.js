;const number = parseInt(
	prompt("Enter a number, and I'll give u a devider of this number"),
);

let result = 1;

for (let i = number; i > 0; i-- ) {
		if(number % i === 0) {
    result = i;
    console.log(result);
    }
}
