const val = Object.getOwnPropertyDescriptor(Math, 'PI')
//console.log(val);
/* {
   value: 3.141592653589793,
   writable: false,
   enumerable: false,
   configurable: false
 } */
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log('code phat giya hai');
    }
}

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
// chai.name = 'chai' //? doesn't take any action. As "writable" property set as "false"
//* console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);

    }
    console.log(`${key}: ${value}`);
}