const val = Object.getOwnPropertyDescriptor(Math, 'PI')

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log('code phat giya hai');
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name',{
    // writable: false,
    enumerable: false
})

for (const [key, value] of Object.entries(chai)) {
if(typeof value !== 'function'){
    console.log(`${key}: ${value}`);

}
    // console.log(`${key}: ${value}`); 
}