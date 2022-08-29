// The replace() method replaces a specified value with another value in a string.....
// The replace() method does not change the string it is called on........
// The replace() method returns a new string..........
// The replace() method replaces only the first match.......

let task1 = "Hello Everyone!!! I am Subhadra Parida. I am frrom Odisha.";
let task2 = task1.replace("Subhadra", "Barsha Priyadarshini");
console.log(task2);


// OUTPUT:-
// Hello Everyone!!! I am Barsha Priyadarshini Parida. I am frrom Odisha.



// Using (/i).........

let text = "Hello Everyone!!! I am Subhadra Parida. I am frrom Odisha.";
let newText = text.replace(/Subhadra/i, "Barsha Priyadarshini");
console.log(newText);


// OUTPUT:-
// Hello Everyone!!! I am Barsha Priyadarshini Parida. I am frrom Odisha.


// Using (/g).........
let text1 = "Please visit Microsoft and Microsoft!";
let newText1 = text1.replace(/Microsoft/g, "W3Schools");
console.log(newText1)