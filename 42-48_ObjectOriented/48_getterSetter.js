class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // *********username
    get username() {
        //? _ without underscore you'll get a rare callstack error.
        return this._username.toUpperCase()
    }
    set username(value) {
        this._username = value
    }

    // ********email
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    // ************password
    get password() {
        return this._password.toUpperCase()
    }
    set password(value) {
        this._password = `${value}-__abcdde`
    }
}
const u1 = new User('mdAffan', 'md.affan', 'abcdtuwio1847')
console.log(u1.username); //? MDAFFAN
console.log(u1.email); //? MD.AFFAN
console.log(u1.password); //? ABCDTUWIO1847-__ABCDDE