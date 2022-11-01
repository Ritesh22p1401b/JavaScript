//  nested destructuring

const users=[
    {userId:1,firstName:"ritesh",gender:"Male"},
    {userId:2,firstName:"rohit",gender:"Male"},
    {userId:3,firstName:"rohan",gender:"Male"},
]

const [{firstName:user1firstName}, ,{gender:user1gender}]=users;

console.log(user1firstName);
console.log(user1gender);
