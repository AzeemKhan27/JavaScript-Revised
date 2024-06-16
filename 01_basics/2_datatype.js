let num = 123

let str = "azeem";

let arr = ["a","b","c"]; 
// console.log(typeof arr, "dataType of array will be 'object'");  

let obj = {
    a : "azeem",
    b : "banana",
    c : "computer"
};

let booleanValue = false;
let undefinedValue = undefined;
let nullValue = null;

console.table([`1) dataType of Null : ${typeof nullValue}`]);
console.table([`2) dataType of Object : ${typeof obj}`]);
console.table([`3) dataType of Undefined : ${typeof undefinedValue}`]);
console.table([`4) dataType of String : ${typeof str}`]);
console.table([`5) dataType of Array : ${typeof arr}`]);
console.table([`6) dataType of Number : ${typeof num}`]);


// :::::: data types in javascript ::::::

// 1) number => 2 to 53
// 2) bigint => use for big data and values.
// 3) string => ""
// 4) boolean => true/false
// 5) null => standalone value
// 6) undefined => 
// 7) symbol => unique