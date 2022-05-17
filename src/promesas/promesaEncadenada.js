'use strict'
//CLASE 04-05-22

const promesa = new Promise((resolve, reject) => {
    //esta me genera un numero random
    const number = Math.floor(Math.random() * 10);

    setTimeout(() => {
        number > 1
        // ? resolve(`todo bien el numero es ${number}`)
        ? resolve(number)
        : reject(`todo mal el numero es ${number}`)
    }, 1000);
});

function suma(num1, num2) {
    return num1 + num2
}
function multi(num1, num2) {
    return num1 * num2
}


//aca la ejecuto ESTO ES LO Q ME SALVA DEL CALLBACK HELL
promesa
.then((response) => {//este response tiene el valor  de resolve en este caso el number
    //esta linea me devuelve el numero de arriba del const es res1
    console.log('response1 ', response);
    //esta me suma ese numero mas 5 y es res2
    return suma(response, 5)
}).then((response) => {
    //aca me imprime res2
    console.log('response2 ', response);
    //aca multimplica el res2 x 5
    return multi(response, 5)
}).then((response) => {
    //aca devuelve la multiplicacion
    console.log('fin de operaciones el valor es: ' ,response);
}).catch((error) => {
    console.log('error ', error);
})