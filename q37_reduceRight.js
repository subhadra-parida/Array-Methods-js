// The reduceRight() method applies a function against an accumulator and each value of 
// the array (from right-to-left) to reduce it to a single value.

const array1 = [[0, 1], [2, 3], [4, 5], [6]];
const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(result);


// expected output:  [6, 4, 5, 2, 3, 0, 1]
                                                                                                                                                                                    