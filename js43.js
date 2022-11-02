//  function Expression 


const arr =function(array,target){    //function expression.
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
console.log(arr([12,3,5,8,56],56))
