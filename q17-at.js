// The at() method takes an integer value and returns the item at that index, 
// allowing for positive and negative integers. Negative integers count back from the last 
// item in the array.


const array1 = [5, 12, 8 , 5, 7, 130, 44];
let index = 4;
console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
index = -4
console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);







// expected output: "Using an index of 2 the item returned is 8"
// expected output: "Using an index of -2 item returned is 130"
