// The slice() method slices out a piece of an array into a new array...........

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());



// expected output: Array ["camel", "duck", "elephant"]
// expected output: Array ["camel", "duck"]
// expected output: Array ["bison", "camel", "duck", "elephant"]
// expected output: Array ["duck", "elephant"]
// expected output: Array ["camel", "duck"]
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
