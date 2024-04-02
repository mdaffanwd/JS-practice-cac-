class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const affan = new User('affan');
console.log(affan); //? User { username: 'affan' }
// console.log(affan.createId()); //? error, to access this 'console.log(affan.constructor.createId())
console.log(affan.constructor.createId()) //? 123
class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('iphone', 'i@phone.com');
iphone.logMe() //? USERNAME: iphone