'use strict'
//CLASE DEL 28-04-22 ARRANCANDO CLASE

function saludar() {
    console.log('hola mundo!');
}

function ejecutarFuncion(otraFuncion) {
    return otraFuncion()
}

ejecutarFuncion(saludar);
