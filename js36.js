//  difference b/w dot and braket notation.
const key = "email"
const person={
    name:"ritesh",
    age:25,
    "person hobbies":["painting","listening music"]
}

console.log(person["person hobbies"]);
person[key]="ritesh@gmail.com";
console.log(person);
