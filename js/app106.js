//Spread Operator
const arr1 = ['one', 'two'];//array
const arr2 = [...arr1, 'three','four', 'five']; //array
const obj1 = {num1: 'six', num2:'seven'};//object
const obj2 = {...arr2,num1: 'six', num2:'seven'};//object

console.log(arr1);
console.log(arr2);
console.log(obj1);
console.log(obj2);
