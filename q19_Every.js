// The every() method tests whether all elements in the array pass the test 
// implemented by the provided function. It returns a Boolean value.

const number=(currentValues)=>currentValues<=40;
const array=[21,23,45,65,13,89];
const array1=[10,20,30,34,29,40]
console.log(array.every(number))
console.log(array1.every(number))



// OUTPUT:-
// false
// true