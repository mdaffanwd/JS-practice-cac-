const promiseOne = new Promise((res, rej) => {
    setTimeout(() => {
        // console.log('async task is completed')
        res()
    }, 1000);
})
promiseOne.then(() => {
    // console.log('promise consumed');
})

// ********Second

new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('this is settimeout');
        resolve()
    }, 1000);
})
    .then(() => {
        // console.log('2nd console log');
    })

// **********Third (passing values from resolve to .then)
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Chai", email: "chai@chaiaurcode.com" })
    }, 1000);
})
promiseThree.then((user) => {
    // console.log(user);
})

// **********Fourth (accessing the value)
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Affan", email: "Affan@gmail.com" });
        } else {
            reject('OOPS!, Something went wrong'); 
        }
    }, 1000);
})
promiseFour.then((user) => {
    // console.log(user);
    return user.username;
}).then((username) => {
    // console.log(username);
}).catch((error) => {
    // console.log(error);
}).finally(() => {
    // console.log('Finally! the promise is either resolved or rejected')
});

// ************Interesting
// *************** fifth Promise ************
// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "javascript", password: '123' })
//         } else {
//             reject("ERROR, js went wrong")
//         }
//     }, 1000);
// })
// async function consumeFive() {
//     try {
//         const response = await promiseFive
        // console.log(response);
    // } catch (error) {
        // console.log(error);
    // }
// }
// consumeFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }

// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
