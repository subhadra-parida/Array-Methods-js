// The toLocaleString() method returns a string representing the elements of the array.
//  The elements are converted to Strings using their toLocaleString methods and these Strings 
//  are separated by a locale-specific String (such as a comma ",").

// Get a date as string, using locale conventions:

const d = new Date();
let text = d.toLocaleString();
console.log(text);


// OUTPUT:=  CURRENT DATE & TIME