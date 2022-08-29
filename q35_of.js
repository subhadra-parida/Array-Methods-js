// The Array.of() method creates a new Array instance from a variable number of arguments, 
// regardless of number or type of the arguments.

number1 = new Array("2","7","9");
number2 = new Array("2");
console.log(number1.length); 
console.log(number2.length); 
console.log(number1[0]);
console.log(number1[2]);
console.log(number2[1]);
console.log(number1[4]);



// OUTPUT:-
// 3
// 1
// 2
// 9
// undefined
// undefined