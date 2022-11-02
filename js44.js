//  arrow  functions

const arr =(array,target) => {    //function expression.
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const call =arr([12,3,5,8,56],56);
console.log(call);


const oddoreven=(num) =>{
    if(num%2===0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(oddoreven(12));

