let nested_arr = [1,[2,[3, [[[4,[5]]]]]]];

// using with flat
// console.log(nested_arr.flat())
//Note: flat() method will not work with so nested array.

console.log("1) Using with toString Method and String Methods :");

let convertIntoString = nested_arr.toString();

let splitVal = convertIntoString.split(',');

let num;
let arr=[];
for(iterator of splitVal){
    arr.push(Number(iterator));
}
// console.log(arr);  // [ 1, 2, 3, 4, 5 ]

console.log("--- 3) recursion ---")

function flat(arr,level){
    const result = [];

    arr.forEach(function(value){
        if(Array.isArray(value) && level > 0){
            result.push(...flat(value,level - 1));
        }else{
            result.push(value);
        }
    });

    return result;
}

let flated = flat(nested_arr,6)

console.log("flated array : ",flated)