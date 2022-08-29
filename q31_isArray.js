// The Array.isArray() method determines whether the passed value is an Array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(fruits);
console.log(result);

// OUTPUT;- true

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Array.isArray([1, 2, 3]); 
Array.isArray({foo: 123}); 
Array.isArray('Subha');   
Array.isArray(undefined); 

// OUTPUT:-
// true
// false
// false
// false
