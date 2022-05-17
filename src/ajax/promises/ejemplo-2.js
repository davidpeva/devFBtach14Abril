'use strict'
//todas las promesas reciben como parametro un callback que es la flecha y van el resolve y el reject

let x = 12;

const promesa = new Promise((resolve, reject) => {
    if (x === 12) {
    setTimeout(() => {
        x = x * 5
        console.log('2. Termine!!!');
        resolve(x);
    }, 2000);
    }else{
        reject('Promesa incumplida')
    }
});

console.log('1. Proceso Inciado');

promesa
    .then(response => {
        console.log('3. El resultado es: ' + response);
    })
    .catch(error => {
        console.error(error);
})

