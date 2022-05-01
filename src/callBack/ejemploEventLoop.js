'use strict'
//CLASE 27-04-22 MITAD DE CLASE

//:::::::::::: en entrevista pueden preguntar q se imprime primero
console.log('1');
console.log('2');

setTimeout(() => {
    console.log('3');
}, 3000);

setTimeout(() => {
    console.log('4');
}, 2000);

console.log('5');

//::::::::::::

console.log('1');
console.log('2');

setTimeout(() => {
    return console.log('tres');
}, 2000);

for (let i = 0; i < 1000; i++) {
    console.log(i);;
    
}

console.log('4');