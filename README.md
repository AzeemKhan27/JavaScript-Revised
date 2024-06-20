# JavaScript-Revised
A Rivised code of my JS learning journey.

Note:

1) Null:
      dataType of null is : Object.
      but if we convert any null, it will show : 0.

2) Undefined :
     - dataType of undefined value is : undefined.
     - but if we convert with Number or anyother, it 
       will show : "number".
     - Actual Value : undefined.
     - Converted Value: NaN.

3) AlphaNumeric = "323ABC"

  - if the value is "123ABC".
  - datatype of original value :  string
  - dataType of convertedValueInNumber :  number
  - Actual Value : 12ABC
  - Converted Value: NaN  

4) Boolean Value :

 datatype of original value :  boolean
 dataType of convertedValueInNumber :  number
 Actual Value : true
 Converted Value: 1


5)  String :

 - datatype of original value :  string
 - dataType of convertedValueInNumber :  number
 - Actual Value : azeem
 - Converted Value: NaN
 - Converted String Number value :  33 not "33" with 
   String() method.
 - dataType of converted String Number value :  string


## Conversion in JS : 

console.log("--- # TRICKY CONVERSION ---");

# Tricky Conversion : 

In JavaScript, type conversions can sometimes lead to unexpected results. Here are a few examples:

```javascript

=========================================

// When converting a non-zero number to a boolean, the result is `true`
console.log(Boolean(1 + 2)); // true

// The unary plus operator (+) converts its operand to a number
console.log(+true); // 1
console.log(+false); // 0

// The string "false" cannot be converted to a number, so the result is NaN (Not-a-Number)
console.log(+"false"); // NaN

// An empty string converts to 0
console.log(+""); // 0

// Variables can be assigned in a chain. All variables will be set to the result of the expression on the right-hand side.
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1); // 4


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1) // 4

```

# JavaScript Type and Value Comparisons

Understanding how JavaScript handles type and value comparisons can help avoid unexpected results. Below are some examples:

```javascript
// When comparing a string that represents a number to a number, JavaScript attempts to convert the string to a number
=========================================
console.log("02" > 1); // true
console.log("2" > 1);  // true

console.log("--- # comparison for null ---");

// `null` has special behavior in comparisons:
console.log(null > 0);    // false
console.log(null >= 0);   // true
console.log(null == 0);   // false
console.log(null === 0);  // false

console.log("--- # comparison for undefined ---");

// `undefined` is also unique in comparisons:
console.log(undefined > 0);    // false
console.log(undefined < 0);    // false
console.log(undefined >= 0);   // false
console.log(undefined <= 0);   // false
console.log(undefined == 0);   // false
console.log(undefined === 0);  // false

```

# JavaScript Data Types

## Primitive Data Types
JavaScript has 7 primitive data types:

1. **String**
2. **Number**
3. **Boolean**
4. **null**
5. **undefined**
6. **Symbol**
7. **BigInt**

### Examples:

```javascript
const score = 100;           // Number
const scoreVal = 100.36;     // Number

const isLoggedIn = false;    // Boolean
const outsideTemp = null;    // null
let userEmail;               // undefined

const id = Symbol('123');    // Symbol
const anotherId = Symbol('123');
console.log(id === anotherId); // false: Symbol data type always returns unique values.

const bigInteger = 23677889900746234n; // BigInt: 'n' makes it a BigInt
```

```javascript
# Reference Type:
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
```

# Stack and Heap Memory in JavaScript :
### 1) Primitive save in Stack,  2) Non-Primitive save in Head.

``` javascript

let myGoal = "skilled software engineer.";

let anotherGoal = myGoal;
anotherGoal = "Entrepreneurship";

console.log("Original : ",myGoal); //skilled software engineer.
console.log("Updated String : ",anotherGoal); //Entrepreneurship
   
```
### Note : In JS variable make copies, whenever we used/assign original variable values in another variable.

``` javascript 

  let userOne = {
    email : "azeem@google.com",
    upi : "user@ybl"
};

let userTwo = userOne;

console.log("Value coming as a reffrence from Heap Memory:",userTwo.email); // azeem@google.com

```

### Note : whenever we retrieve values from the object in another variable, value retrieve as a refrence from the Heap memory.


# 1) Optional chaining : 
### is a feature in JS that allows you to access properties of an object or elements of an array without having to check whether the object or array is null or undefined first, It is represented by the "?." operator and can be used to concisely access deeply nested properties without having to write a long chain of if statements to check for null or undefined values. 



