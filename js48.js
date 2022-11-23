//  let and const are block scope
//  var is function scope

// let and const are block scope

if(true){
    let firstName="ritesh";
    console.log(firstName)
}

// console.log(firstName);

// var function scope

function myapp(){
    if(true){
        let firstname="ritesh"; //let is block scope and var is function scope
        console.log(firstname);
    }
    console.log(firstname);
}

myapp();
