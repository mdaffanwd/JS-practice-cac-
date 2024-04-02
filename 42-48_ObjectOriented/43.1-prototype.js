let myName = 'hitesh           ';
// console.log(myName.trim().length);
// console.log(myName.truelength());

let myHeroes = ['thor', 'spiderman']

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log('hitesh is present in all objects');
}
Array.prototype.hey = function () {
    console.log('hey there!');
}
// heroPower.hey()
// myHeroes.hey()

// ***********Inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: false
}
const TASupoort = { 
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport
}
Teacher.__proto__ = User
// console.log(Teacher.email);
console.log(TASupoort.isAvailable);

let anotherUsername = "ChaiaurCode                                "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}
// anotherUsername.truelength()
// myName.truelength()

"Affan            ".truelength()