;let styles = [
  { "color" : "black", },
  { "font-size" : "14px", },
  { "margin" : "0, auto", },
  { "text-decoration" : "none", },
];


const addStyles = function(arr,text) {
	let result = "";
  
  const concatStyles = arr.forEach(element => {
  	for(let key in element) {
     result += "" + key + ": " + element[key] + "; ";
    }
  })
  console.log("<p style="+ result + `> ${text} </p>`);
};

let newText = "Here a text which user can enter";

addStyles(styles, newText);
