const User = {
    _username: 'affan',
    _password: 'affan123',

    get username(){
        return this._username.toUpperCase()
    },
    set username(value){
        this._username = value
    }
}

console.log(User.username);