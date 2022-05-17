'use strict'

//Ejercicio
//1.Crear una funcion que salude al nombre que le paso como parametro
//2.Todas las funciones sean arrow functions
//3.Para ejecutar el JS hacerlo con script del pachage

const buenas = (nombre) => console.log('hola ' + nombre);

const saludito = (nombre, otrasFuncion) => {return otrasFuncion(nombre)};

saludito('juan', buenas);