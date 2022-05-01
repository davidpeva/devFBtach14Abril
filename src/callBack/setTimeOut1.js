'use strict'
//CLASE 27-04-22
//recibe dos parametros; una funcion y un tiempo de espera el del final q va en milisegundos
function hola() {
    return console.log('hola mundo');
}

//la funcion setTimeOut ya esta definida internamente en js
// setTimeout((hola) => { }, 3000);
setTimeout(hola, 3000);

//:...........
//ASI LA PUEDO USAR SI USO SOLO EL SETTIMEOUT Y ME QUEDA CON UNA FUNCION ANONIMA
//FUNCION DEL NAVEGADOR
//ES FUNCION DE ORDEN SUPERIOR, EJECUTA UN CALLBACK(PARAMETRO), Y ES ASINCRONA
setTimeout(() => {
    console.log('hola mundo');
}, 3000);


//........
//los colgas siempre se usan como funciones anonimas
let i = 0;

setTimeout(() => {
    console.log(i++);
    if(i = 10){
        return
    }
}, 1000);