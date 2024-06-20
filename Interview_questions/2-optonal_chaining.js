// (1) Optional chaining :

const user = {
    name : "Azeem",
    age : 25,
    address : {
        street : "Main Street",
        city : "New delhi",
        state : "Delhi",
        zip : 10101
    },
};

console.log("Check : ", user.address.roadName?.houseName); // now it's simply returning "undefined" value but if we will not use "?." it will revert error.

// # 2) Optional chaining with an array :

const users = [
    {name : "azeem", age : 25},
    {name : "nupur", age : 35},
    {name : "riva", age : 36}
];

for(let itr in users){
    console.log("Optional chaining with an Array :",users[itr]?.name); // azeem //nupur //riva
};

console.log(`If key is not represent in array of object : ${user[4]?.name}`)