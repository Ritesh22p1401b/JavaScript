// for in loop in array

const fruits=["apple","mango","banana"];

for(let index in  fruits){
    console.log(index);
}

console.log("-------------x----------------x------------")

const fruits2=[]
for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
