function user(name, age, single) {
    this.name = name
    this.age = age
    this.single = single

    this.greeting =  function() {
        console.log(`hello, ${this.name}`);
    }
}
const userOne = new user('affan', 18, false)

console.log(userOne.constructor);