const sibs = ["affan", "athufa", "hassan", "rayyan"]
const names = ['adnan', 'toufiq', 'athar']

// sibs.push(names)

// const all = sibs.concat(names)

// console.log(sibs);
// console.log(all);
// console.log(sibs[4][0]);

const all = [...sibs, ...names]
// console.log(all);

const another_array = [1,2,3, [4,5,6,7, [7,8,9]]]
const realAnotherArray = another_array.flat(Infinity)

// console.log(realAnotherArray);
// console.log(Array.isArray("Affan"));
// console.log(Array.from("Affan"));
// console.log(Array.from({name : "Affan"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
let str = toString(score1)
console.log(typeof str);
let all1 = Array.of(score1, score2, score3);
console.log(typeof all1);

