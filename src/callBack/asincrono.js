'use strict'
// CLASE DEL 02-05-22

const {usuarioAsinc} = require('./usuarios.js');

console.log('inicio del programa');

console.time('inicio');

usuarioAsinc(1, (usuario) =>{
    console.log(usuario);
});
usuarioAsinc(2, (usuario) =>{
    console.log(usuario);
    console.timeEnd('inicio');
});

console.log('fin del programa');