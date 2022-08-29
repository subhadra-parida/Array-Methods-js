// The Array.from() static method creates a new, shallow-copied Array instance from an 
// iterable or array-like object.

console.log(Array.from('food'));
console.log(Array.from([1, 2, 3, 4], x => x + x));



// expected output: Array ["f", "o", "o"]
// expected output: Array [2, 4, 6]
