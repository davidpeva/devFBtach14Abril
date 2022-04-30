'use strict'
//CLASE 27-04-22

//recibe dos parametros: una funcion y un tiempo de espera
function hola() {
    console.log('hola mundo');
}

//setTimeOut es una funcion del navegador
//el hola es un callback }
//para usar asi necesito la funcion de arriba
setTimeout(hola, 3000);


//esta es una forma como usarla sola
//funcion de orden superior, funcion que ejecuta ese parametro
//funcion asincrona
setTimeout(() => {
    console.log('hola');
}, 3000);


//CON ESTE EJECUTO UN CODIGO N CANTIDAD DE VECES
let i = 0;

setInterval(() => {
    console.log(i++);
}, 1000);
