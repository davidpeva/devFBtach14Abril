'use strict'
// CLASE DEL 10-05-2022 EMPEZANDO PROGRAMACION ORIENTADA A OBJETOS

//este es el molde
class Animal {
    //con este le agrego atributos
    //para que sea dinamico entre los parentesis de constructor le doy los parametros
    //aca no importa el orden de los parametros
    //ESTAS SON LAS PROPIEDADES
    constructor(color, sonido, especie) {
        //la clace de esos atributos se indica por medio de this.propiedad y su valor de asignacion es la derecha = este es el siggno de asignacion
        this.especie = especie,
        this.color = color,
        this.sonido = sonido
    }
    //ESTE ES UN METODO DEL OBJETO(es una funcion que vive dentro de una class)
    emitirSonido() {
        return console.log(`emitiendo sonido: ${this.sonido}`);
    }
}

//ACA CREO OTRA CLASE con herencia
//extends me ayuda a q las herede(la herencia nada mas entre class)
class Jirafa extends Animal {
    constructor(nombre, color, sonido, tam) {
        //super es la que me dice q ya las heredo
        super(nombre, color, sonido)
        this.tam = tam;
    }
}

//aca instancio un nuevo objeto
//TENGO Q MIRAR BIEN COMO AGREGAR LOS PARAMETROS EL ORDEN
let giraf = new Jirafa("blanca", "brrr", "giraf", "4m");

console.log(giraf);

//esta es una instancia de la clase(es un objeto nuevo que estoy creando)
//cuando lo creo nuevo dentro de los parentesis de animal agrego las caract de los parametors
//al instanciarlo aca si importa el orden de los parametros
let gato = new Animal("rojo", "miau", "gato");
let perro = new Animal("cafe", "guau", "perro");
let vaca = new Animal("pinta", "muu", "vaca");


//para aceder a las propiedades y metodos del objeto lo hago con la notacion de punto
console.log(gato);
console.log(gato.color);
console.log(gato.sonido);

//aca ya estoy es emitiendo el metodo
gato.emitirSonido()
vaca.emitirSonido()

