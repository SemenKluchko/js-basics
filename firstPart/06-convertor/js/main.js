;

const selectValut = prompt("USD Convertor. Select the currency you want to convert: EUR, UAH, AZN");

let sum;

if (selectValut == "EUR") {
  sum = parseInt(
     prompt("USD to EUR. How many do yout want to convet?"),
  );
  console.log(sum * 0.83 + " €");
} else if (selectValut == "UAH") {
  sum = parseInt(
    prompt("USD to UAH. How many do yout want to convet?"),
  );
  console.log(sum * 27.85 + " ₴");
} else if (selectValut == "AZN") {
  sum = parseInt(
    prompt("USD to AZN. How many do yout want to convet?"),
  );
  console.log(sum * 1.7 + " m.");
}