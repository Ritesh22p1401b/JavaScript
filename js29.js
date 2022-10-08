// for loop in array 

let arr=[1,2,3,45,6,4,52];

console.log(arr.length);
console.log(arr[arr.length-2]);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
let arr2=[];
for(let i=0;i<arr.length;i++){
    arr2.push(arr[i]);
}
console.log(arr2);
