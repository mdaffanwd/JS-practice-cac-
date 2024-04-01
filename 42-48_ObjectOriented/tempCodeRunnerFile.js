function createUser(username, score) {
    this.username = username;
    this.score = score;
    return this
}
// const 
createUser('Affan', 300)
createUser.prototype.increment = function () {
    this.score++
    console.log(score);
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`)
}
const chai = new createUser('chai', 25)
const tea = new createUser('tea', 250)

// console.log(chai)
chai.increment()
tea.printMe()