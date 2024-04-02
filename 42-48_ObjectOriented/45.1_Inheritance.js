class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username, email, password){
        super(username)

        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}
//? simply this is like Teacher.__proto__ = User. matlab 'teacher', 'user' k saare properties use kar sakte hein 
const chai = new Teacher('chai', 'chai@fb.com', '1374k')
// chai.addCourse();
// chai.logMe()



const masalaChai = new User('masalaChai');
// masalaChai.addCourse()
// masalaChai.logMe();
// masalaChai.addCourse() //? throws error

console.log(chai === masalaChai); //?false, because 'chai' is made of "Teacher" class and "masalaChai" is made of "User" class
console.log(chai instanceof Teacher); //? true, kyunki 'chai', 'teacher' se hi bana hai.