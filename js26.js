//  push and pop in array
//  shift and unshift

let fruits=["apple","mango","grapes"];
console.log(fruits);

// push
fruits.push("banana");
console.log(fruits);

// pop
let poppedfruits=fruits.pop();
console.log(fruits);
console.log("popped fruits is",poppedfruits);

// unshift
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

// shift
let removefruits=fruits.shift();
console.log(fruits);
console.log("remove fruit is ",removefruits);
