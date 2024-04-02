function User(username, password) {
    this._username = username;
    this._password = password

    Object.defineProperty(this, 'username', {
        get: function () {
            //? _ without underscore you'll get a rare callstack error.
            return this._username.toUpperCase()
        },
        set: function (value) {
            this._username = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })

}
const u1 = new User('affan@code.com', 'affan123')
console.log(u1.username); //? AFFAN@CODE.COM
console.log(u1.password); //? AFFAN123