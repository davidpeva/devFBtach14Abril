'use strict'
// CLASE DEL 10-05-22 FINALIZANDO

//PARA HACER UNA PROMESA 1ro necesito definir la estructura de mi promesa aca la instancio y creo un objeto
//despues de Promise va un callback q siempre lleva resolve y reject
//ESTO ES UN ONJETO DE TIPO PROMISE
let x = 10;
const promesa = new Promise((resolve, reject) => {
    if (x === 10 ) {
        resolve('la variable es igual a 10')
    }else{
        reject('la variable no es igual a 10')
    }
})

//recibo la data de mi primesa
//.json parsea algo q me llego de una respuesta de una promesa y lo paso a json
promesa 
    .then(response => {
        console.log('success: ' + response);
    })
    .catch(error  => console.error('error: ' + error))

    //CREAR 5 PROMESAS CON MENSAJES