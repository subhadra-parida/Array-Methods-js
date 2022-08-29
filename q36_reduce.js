// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().
// The reduce() method does not reduce the original array.

const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);
console.log(sumWithInitial);


// OUTPUT:-  10

const arr1 = [1, 2, 3, 4];
const arr2= arr1.reduce((function(Pre_val,Cur_val){
  return Pre_val+Cur_val;
  }),0);
console.log(arr2);


// OUTPUT:-  10