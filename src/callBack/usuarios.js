'use strict'
//CLASE DEL 02-05-22
//UN POQUITO DE ASINCRONISMO Y APIS

// const info = {
//     valor: 'la info ',
//     unaF: () => {
//         console.log('importando con commonjs');
//     }
// };

// module.exports.info = info;
//....................................................................

module.exports = {
    usuarioSinc(id){
        const tiempoInicio = new Date().getTime();
        while (new Date().getTime() - tiempoInicio <= 3000){
            //esperando
        }
        return {
            "id" : id,
            "nombre" : `usuario ${id}`
        }
    },
    usuarioAsinc(id, callback){
        const usuario = {
            "id" : id,
            "nombre" : `usuario ${id}`
        }
        setTimeout(() => {
            callback(usuario)
        }, 3000);
    }
}