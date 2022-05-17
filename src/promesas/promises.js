'use strict'
//CLASE 03-05-22 TERMINANDO

//RESOLVE ES PARA CUANDO SE GENERA UNA RESPUESTA CORRECTA
//REJECT CUANDO SE GENERA UNA RESPUESTA INCORRECTA
const promesa = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

    setTimeout(() => {
        // este ? y este : son operadores como si fuera un if
        //? (si esto se cumple ejecuta), : (si no ejecuta esto)
        number > 5 
        ? resolve(number) 
        : reject(new Error("Menor a 5"));
    }, 2000)
});

//THEN ES === RESOLVE
//CATCH ES === REJECT
promesa
.then(respuesta => {
    console.log('el numero es ', respuesta);
}).catch(error => {
    console.log('error ', error);
});
