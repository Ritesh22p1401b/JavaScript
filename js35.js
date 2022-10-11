// objects reference type
//  arrays are good but not efficient for real world data
// objects stores key value pairs
// objects don't have index

// how to create objects

// const person={name:"ritesh",age:25};
const person={
    name:"ritesh",
    age:25,
    hobbies:["painting","listening music"]
}
console.log(person);

//  . notation

// console.log(person.name);
// console.log(person.age);
console.log(person.hobbies);
// key of an object is also called properties.

// how to add key value pairs in objects.
person.gender="Male";
console.log(person);

// [] notation
console.log(["name"]);
console.log(["age"]);

// adding by dot notation.
person["date_of_birth"]="05/01/1997";
console.log(person);