// (1) The findIndex() method returns the index of the first element in an array
//  that satisfies the provided testing function. If no elements satisfy the 
//  testing function, -1 is returned.
// (2)The findIndex() method returns the index of the first array element that passes a test function.

const array = [5,8,19,28,23,32];
const result = (element) => element>10;
console.log(array.findIndex(result));



// OUTPUT:-  2 (19)