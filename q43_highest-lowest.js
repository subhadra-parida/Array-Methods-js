// There are no built-in functions for finding the max or min value in an array.
// However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
const mark = [40, 100, 1, 5, 25, 10];
mark.sort(function(a, b){return a -b});
console.log(mark)
mark.sort(function(a, b){return b -a});
console.log(mark)


// OUTPUT:-
// [1, 5, 10, 25, 40, 100]
// [100, 40, 25, 10, 5, 1]