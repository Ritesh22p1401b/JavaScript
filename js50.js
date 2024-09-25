//  rest parameters

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`a is ${b}`)
//     console.log(`a is ${c}`)
// }

// myfunc(4,5,56,4,1)

function addall(...numbers){
    let total=0;
    for(let number of numbers){
        total=total+number
    }
    return total;
}

const ans= addall(4,78,89,9,25,6);
console.log(ans);
