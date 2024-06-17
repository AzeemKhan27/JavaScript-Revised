// # Primitive DataType :
// 7 types : 
    
// 1) String, 
// 2) Number, 
// 3) Boolean, 
// 4)null, 
// 5)undefined, 
// 6)Symbol, 
// 7)BigInt.

const score = 100;
const scoreVal = 100.36;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false : because Symbol dataType always return unique value.

const bigInteger = 23677889900746234n; //n make it bigInt

// # Reference (Non Primitive)

// Array, Object , Functions.

const heros = ["shaktiman","nagraj","doga"];
let myObj = {
    name : "azeem",
    age : 22
}

const myFunction = function(){
    console.log("Hello World.")
}

console.log("datatype of bigInt :", typeof bigInt) //undefined.