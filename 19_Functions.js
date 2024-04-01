function addNumbers(a, b){
    console.log(a+b);
}

// addNumbers(3,"4")

function loginUserMessage(username){
    if (username === undefined){
        console.log('please enter the username');
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());

function calculate(val1, val2, ...num1){
    console.log(val1, val2, ...num1);
}
// calculate(299,2,23,3434,342342)

const user = {
    name : "Mohammad Affan",
    age : 19,
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
}
handleObject(user)
// handleObject({
//     name : "Mohammad Hassan",
//     age : 13
// })

// const arr = [200, 400, 600]
// function value(newArray) {
//     return newArray[1]
// }
// console.log(value(arr));

const arr = [200, 400, 600]
function value(anyArray) {
    return anyArray[1]
}
console.log(value(arr));