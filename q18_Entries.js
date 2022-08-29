// The entries() method returns a new Array Iterator object that contains the 
// key/value pairs for each index in the array.

const name=["Subha", "Mona", "Gugul", "Suku", "Trupti"];
const Iterator=name.entries();
console.log(Iterator.next().value);
console.log(Iterator.next().value);
console.log(Iterator.next().value);
console.log(Iterator.next().value);
console.log(Iterator.next().value);



// OUTPUT:-
// [0, 'Subha']
// [1, 'Mona']
// [2, 'Gugugl']
// [3, 'Suku']
// [4, 'Trupti']