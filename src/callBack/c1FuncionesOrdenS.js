'use strict'
//CLASE 27-04-22

//FORMA CLASICA DE DECLARAR UNA FUNCION
function saludo() {
    return console.log('hola');
}


//funcion anonima es = funcion sin nombre (anonymous function)
//funcion con una flecha => es una (arrow function)
//ASI SE DECLARA LA FUNCION TIPO FLECHA
//this no funciona en las arrow function
const saludo = () =>{
    return console.log('hola');
}
//asi tambien se ejecuta cuando solo tengo una cosa q ejecutar como 1 slolo log
const saludo = (nombre) => console.log('hola ' + nombre);

//ASI LA EJECUTO
saludo('cecilia');


//.........
//CREAR RESTA MULTIPLICAR Y DIVIDIR dos numeros
function suma(num1, num2) {
    return console.log(num1 + num2);
}
function resta(num1, num2) {
    return console.log(num1 - num2);
}
function multi(num1, num2) {
    return console.log(num1 * num2);
}
function divi(num1, num2) {
    return console.log(num1 / num2);
}

//esta es una funcion de orden superior porq recibe como parametro una funcion y los dos numeros
function calculadora(num1, num2, computo) {
    //este es el callback q es una funcion de orden superior q invoca a su parametro
    return computo(num1, num2);
}

calculadora(5, 6, suma);
calculadora(5, 6, resta);
calculadora(5, 6, divi);
calculadora(5, 6, multi);