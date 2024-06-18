const newGame = new String("azeem");

console.log(newGame[0]);
console.log(newGame.__proto__);

console.log(newGame.length)
//console.log(newGame.toUpperCase()) //AZEEM 
//Note this String Method will not make any changes in original variable of the string, because it is take new reference from.
// console.log(newGame.charAt(2))
console.log("check index of the character : ",newGame.indexOf('z'));

const newString = newGame.substring(0,4);
console.log("Substring method gives characters according to given start and end index : ",newString);

//Note : Substring count till given end index like end index is 5 but count till 4 only.

const anotherString = newGame.slice(0,4);
console.log("Slice Method :",anotherString);
//Note : Slice method same as substring but Slice method can work with negative value and we can pass like this : gameName.slice(-8,4).

const url = "https://azeem.com/azeem%20khan";
console.log(url.replace('%20','_'));

console.log("Asking value by Include Method : ",url.includes("az"))
//Note : includes always return boolean value.

const splitTest = "er-azeem-khan";
console.log("Split Method : ",splitTest.split("-"));
