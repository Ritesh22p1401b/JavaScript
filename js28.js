// how to clone an array

let array1=["item1","item2"];
// let array2=["item1","item2"];
// let array2=array.slice(0)

// how to concatenate a array

// let array2=array1.slice(0).concat(["item3","item3"]);
// let array2=[].concat(array1,["item3","item3"]);

// new way to concatenate
// spread operator
let array3=["item4","item5"];
let array2=[...array1,...array3];

console.log(array===array2);
console.log(array1);
console.log(array2);

