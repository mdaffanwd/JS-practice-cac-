const User = {
    _email: 'affan@code',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        return this._email = value;
    }
}

const tea = Object.create(User) //? Object.create(User) => by default value is "null"

console.log(tea.email);

