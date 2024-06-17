// Stack => (Primitive) , Heap => (Non-Primitive)

let myGoal = "skilled software engineer.";

let anotherGoal = myGoal;
anotherGoal = "Entrepreneurship";

// console.log("Original : ",myGoal); //skilled software engineer.
// console.log("Updated String : ",anotherGoal); //Entrepreneurship

console.log("== Object ==")

let userOne = {
    email : "azeem@google.com",
    upi : "user@ybl"
};

let userTwo = userOne;

console.log("Value coming as a reffrence from Heap Memory:",userTwo.email);