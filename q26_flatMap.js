// The array.flatMap() is an inbuilt function in JavaScript which is used to flatten the input 
// array element into a new array. 

const arr1 = [1, 2, [3], [4, 5], 6, []];
const result = arr1.flatMap(num => num);
console.log(result);



// OUTPUT:- [1, 2, 3, 4, 5, 6]