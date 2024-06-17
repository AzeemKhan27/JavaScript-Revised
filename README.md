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