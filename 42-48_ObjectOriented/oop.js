// const username = "Md Affan"
// const user = {
//     username: "Affan",
//     logInCount: 8,
//     signedIn: true,
//     getUserDetails: function(){

//     }
// }

function User(username, logInCount, isLoggedIn) {
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Hello, ${this.username}`);
    }
    // return this
}
const userOne = new User('Affan', 18, true)
const userTwo = new User('Hassan', 45, false)

// console.log(userOne.constructor);
// console.log(userTwo);
userOne.greeting()



