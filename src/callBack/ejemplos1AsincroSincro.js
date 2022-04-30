//CLASE 27-04-22

'use strict'
//EJEMPLO ASINCRONO
console.log('1');
console.log('2');

setTimeout(() => {
    return console.log('3');
}, 3000);

setTimeout(() => {
    return console.log('4');
}, 2000);

//OTRO EJEMPLO
console.log('1');
console.log('2');

setTimeout(() => {
    console.log('tres');
}, 2000);

for (let i = 0; i < 1000; i++) {
    console.log(i);
}

console.log('4');
