// The map() method creates a new array populated with the results of calling a provided function 
// on every element in the calling array.

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x ** 2);
const map2 = array1.map(x => x + x);
console.log(map1);
console.log(map2)

// expected output: Array [1, 16, 81, 256]
// expected output: Array [2, 8, 18, 32]

