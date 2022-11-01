// Functions Declration

function add(){
    return 2+4;
}
console.log(add())

function even(num){
    if(num%2===0){
        return "even";
    }else{
        return "odd";
    }
}

console.log(even(8));


// function
// input : array,target (number)
// output : index of target number if target is present 

function arr(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const array=[1,2,3,56,78]
const ans=arr(array,5);
console.log(ans);
