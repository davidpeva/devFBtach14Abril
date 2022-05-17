'use strict'
// CLASE DEL 02-05-22
// const datos = require('./usuarios.js');

// const funcionC = datos.info.unaF;

// funcionC();
//............................................................
//tambien puedo escribirlo con el import se esta usando mucho para el front
const {usuarioSinc} = require('./usuarios.js');

console.log('inicio del programa');

console.time('inicio');

console.log(usuarioSinc(1));
console.log(usuarioSinc(2));

console.timeEnd('inicio');
console.log('fin del programa');