// const user = {
//     username : "Affan",
//     price : 9999,

//     welcomeMessage : function () {
//         console.log(`${this.username}, welcome to the website`);
//     }
// }
// user.welcomeMessage();
// user.username = "Hassan";
// user.welcomeMessage();

// const chai = () => {
//     let username = "affan"
//     console.log(this.username);
// }
// chai()

// ************Practice*****************

let user = {
    username : "Affan",
    price : 999,

    welcomeMessage : function(){
        console.log(`hi, ${this.username} and price is ${this.price}`);
    }
}

// user.welcomeMessage()
// const add = (num1, num2) => {
//     return num1 + num2
// }

// const add = (num1, num2) => (num1 + num2)
// const add = (num1, num2) => num1 + num2
const add = (num1, num2) => ({username : "Affan"})

console.log(add(2,3));