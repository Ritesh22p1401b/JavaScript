//  default parameter

// function addtwo(a,b){
//     return a+b;
// }

// const ans = addtwo(4,8);
// console.log(ans);

function addtwo(a,b=0){
    return a+b;
}

const ans = addtwo(4);
console.log(ans);
