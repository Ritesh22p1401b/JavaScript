//  how to iterate objects

const person={
    name:"ritesh",
    age:25,
    "person hobbies":["painting","listening music"]
}

// for in 
// object.keys

for(let key in person){
    // console.log(person[key]);
    console.log(key,":",person[key]);
}

console.log(typeof Object.keys(person));
const val=Array.isArray(Object.keys(person));
console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key]);
}

for(let key of Object.keys(person)){
    console.log(key);
}
