
let checkValues =  "azeem"; //true; //"12ABC"; //undefined; // null; 

// console.log("# =======CHECK_VALUE======>");

let convertInNum = Number(checkValues);
// console.log("datatype of original value : ",typeof checkValues);
// console.log("dataType of convertedValueInNumber : ",typeof convertInNum);

// console.log("Actual Value :", checkValues);
// console.log("Converted Value:",convertInNum);

console.log("--- # CHECK VALUES OUTPUT : Boolean And String Converted. ---");

let isLoggedIn = "azeem";
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

// String

let someVal = 33;
let stringNumber = String(someVal);
// console.log("Converted String Number value : ",stringNumber);
// console.log("dataType of converted String Number value : ",typeof(stringNumber));

console.log("--- # check conversion ---")

console.log("1"+2);         // 12
console.log("1" + "2" + 3); // 123
console.log(1 + 2 + "3");   // 33
console.log(1 * 2 + "2")    // 22
console.log("1" * 2 + 2)    // 4
console.log("2" * 2 / "2" - 1) // 1


console.log("--- # TRICKY CONVERSION ---");

console.log(Boolean(1+2)) // true
console.log(+true) // 1
console.log(+false) // 0
console.log(+"false") // NaN
console.log(+"")      // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1) // 4

let gameCounter1 = 100;
let gameCounter2 = 100;
const prefix = ++gameCounter1;
const postfix = gameCounter2++;

console.log(`originalValue : ${gameCounter1} : prefix : ${prefix}`);

console.log(`originalValue : ${gameCounter2} : postfix : ${postfix}`);