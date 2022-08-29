// slice() extracts a part of a string and returns the extracted part in a new string.
// If a parameter is negative, the position is counted from the end of the string.

let name1 = "Aparna, Barsha, Chandana, Rani";
let name2= name1.slice(6, 13);
let name5 = name1.slice(7);
console.log(name2);
console.log(name5)

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

let name3 = "Aparna, Barsha, Chandana, Rani";
let name4 = name3.slice(-12, -6);
console.log(name4);



// OUTPUT:-
// Barsha
// Barsha, Chandana, Rani
// andana