//  functions inside function

function app(){
    const myfunc=() =>{
    console.log("hello from func")
    }

    const add=(num1,num2) =>{
        return num1+num2
    }

    const multiply=(num1,num2)=>{
        return num1*num2
    }
    
    console.log("inside app");
    myfunc();
    console.log(add(2,3));
    console.log(multiply(2,3));
}
app();
