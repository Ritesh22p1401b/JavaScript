// object destructuring

const band ={
    bandname:"led zeppelin",
    famoussong:"stairway to heaven",
    year:1968,
    anotherfamoussong:"kashmir"
};

// const {bandname , famoussong}=band;
// console.log(bandname);

// let {bandname:var1,famoussong:var2}=band;
// console.log(var1);
// console.log(var2);

let {bandname,famoussong, ...restprops}=band;
console.log(bandname);
console.log(restprops);
