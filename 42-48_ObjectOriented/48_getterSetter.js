class User { 
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // *********username
    get username(){
        return this._username.toUpperCase()
    }
    set username(value){
        this._username = value
    }

    // ********email
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    // ************password
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = `${value}-__abcdde`
    }
}
const u1 = new User('mdAffan', 'md.affan', 'abcdtuwio1847')
console.log(u1.username);
console.log(u1.email);
console.log(u1.password);