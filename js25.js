//  intro to arrays
//  reference type
// how to create an array

//  ordered collection of items

let fruits=["apple","mango","grapes"];
let numbers=[1,2,3,4];
let mixed =[1,2,3,"apple","banana"];
console.log(fruits)
console.log(numbers)
console.log(mixed)
fruits[1]="watermelon"
console.log(fruits)
console.log(fruits[0]);
console.log(fruits[1]);
let obj={}; // objects literals
console.log(typeof obj);
console.log(typeof fruits);
//  if we want to know the collection of items is array or not.
console.log(Array.isArray(fruits)); // it will give true if array 
// and false if not .
console.log(Array.isArray(obj));
