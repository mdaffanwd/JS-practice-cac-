// const coding = ['js', 'py', 'java', 'ruby']

// const value = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(value);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);
// let newNums = []
// myNums.forEach( (num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
let userRequest = books.filter((book) => {
    return book.genre === 'History'
})
userRequest = books.filter((book) => {
    return book.publish >= 1995 && book.genre == 'Science'
})
// console.log(userRequest);

// ******** MAP ******
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => {return num + 10})
// myNumbers.forEach(function (item) { 
// console.log(item + 10) 
// })
// console.log(values);
// console.log(newNums);

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumbers
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 40)
// console.log(newNums);
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 3)
// const myTotal = myNums.reduce((acc, currVal) => {return acc + currVal}, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName : "Mobile Dep course",
        price : 5999
    },
    {
        itemName : "Data Science course",
        price : 12999
    },
    {
        itmeName : "Backend Course",
        price : 6999
    }
]
const price = shoppingCart.reduce((acc, item) => {
    return item.price + acc
}, 0);
console.log(price);