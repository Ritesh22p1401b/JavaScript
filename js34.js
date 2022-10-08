//  array destructuring 

const myarr=["val1","val2","val3","val4"];

let[myvar1,myvar2,...mynewarr]=myarr;
console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2);
console.log("value of new arr",mynewarr);
