'use strict'

const promesa = new Promise((resolve, reject) => {
    if (true) {
        resolve('Resuelta')
    }else{
        reject('Rechazada')
    }
})

promesa
    //el primer .then de una promesa recibe como response el resolve ya los que siguen reciben lo que quiera
    .then(response => {
        console.log(response);
    })
    .then(() => console.log('Hola Mundo'))
    .then(() => {
        console.log('david')
        return 150
    })
    //no importa el nombre que le ponga al parametro aca me recibe el return del then anterior si lo llamo solamente
    //en el siguente then lo puedo usar
    .then((perro) => console.log(perro * 3))
    .catch(error => {
        console.error(error);
    })