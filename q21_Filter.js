// The filter() method creates a new array with array elements that passes a test.
// This example creates a new array from elements with a value larger than 5:

const name= ["Subhadra", "Lisha", "Subhashree", "Payal", "Amit","Sahil"]
const result = name.filter(word => word.length >= 5);
console.log(result);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18)


// OUTPUT:- [ "Subhadra", "Lisha", "Subhashree", "Payal", "Sahil" ]
// OUTPUT:- [45, 25]