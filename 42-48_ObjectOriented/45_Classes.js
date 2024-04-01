// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User('affan', 'chai@chai', 'p1234')
// console.log(chai.changeUsername());
// console.log(chai.encryptPassword());

// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }
// User.prototype.toUC = function () {
//     return `${this.username.toUpperCase()}`
// }
// User.prototype.enPswrd = function () {
//     return `${this.password}abc`
// }

// const chai = new User('chai', 'chai@chai', 'afda23897')
// console.log(chai.toUC());
// console.log(chai.enPswrd())

// *Behind the scene

function User(email, username, password) {
    this.username = username;
    this.email = email;
    this.password = password
}
User.prototype.encryptPassword = function () {
    return `${this.username.toUpperCase()}`
}
User.prototype.changeUsername = function () {
    return `${this.password}abc`
}
const chai = new User('tea', 'tea@google', '123')
// console.log(chai.encryptPassword());
console.log(chai);