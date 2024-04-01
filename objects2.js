const user = {}
user.id = '123abc'
user.name = "affan"
user.isLoggedIn = false

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2 )
// console.log(obj3);

// console.log(Object.keys(user));
// console.log(Object.values(user));

// console.log(Object.entries(user));
// console.log(user.hasOwnProperty('isLogged'));

const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor : instructor} = course
console.log(instructor);

// {
//     'courseName' : "js in hindi",
//     'price' : "999",
//     'courseInstructor' : "hitesh"
// }