const mySym = Symbol('Mysymbol')

const user1 = {
    name : 'Mohammad Affan',
    "full name" : "Mohammad Hassan",
    [mySym] : "mySymbol property",
    age : 18,
    location : 'Piler',
    email : "affan@google.com",
    isLoggedIn : false,
    lastLogggedIn : ["Monday", "Saturday"]
}
// console.log(user1["age"]);
// console.log(user1["full name"]);
// console.log(user1[mySym]);

user1.email = "hassan@richest.com"
// Object.freeze(user1)
user1.email = "rayyan@richest.com"
// console.log(user1);

user1.greeting = function(){
    console.log(`hi, user name is ${this}`);
}
console.log(user1.greeting());
console.log(user1[mySym]);