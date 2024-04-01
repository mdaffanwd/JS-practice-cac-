const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num);
}

const str = "Hello World"
for (const greet of str) {
    if(greet == " "){
        continue
    }
    // console.log(`the each values in str are:- ${greet}`);
}

// ****** Maps *****
const map = new Map()
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObj = {
    name : "Mohammad Affan",
    name2 : "Athooufa Rahmath"
}
for (const key in myObj) {
    // console.log(`${key} :- ${myObj[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cp'];
for (const key in programming) {
    // console.log(programming[key]);
}

for (const key in map) {
    // console.log(key);
}

// ******* forEach ***********
const coding = ['js', 'ruby', 'python']

coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach( (item) => {
    // console.log(item);
})
function printValues(item){
    // console.log(item);
}
// coding.forEach(printValues)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

