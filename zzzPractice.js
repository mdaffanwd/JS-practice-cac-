function abcd(val1, val2, val3) {
    console.log(this,val1, val2, val3);
}
var obj = {age: 19}
abcd.apply(obj, [1,2,3])
// var bindedfn = abcd.bind(obj)
// bindedfn()