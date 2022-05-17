'use strict'
// EJERCICIO CLASE A LA MITAD MASO 09-05-22

//EJERCICIO CREAR UNA CLASE ANIMAL CON 3 PROPIEDADES Y UN METODO
// CREAR UNA CLASE HUMANO CON LAS PROPIEDADES DE ANIMAL(HEREDADAS) Y
// CON 3 PROPIEDADES
//CREAR UN OBJETO A PARTIR DE LAS CLASE DE HUMANO E IMPRIMIR LAS
//PROPIEDADES Y EL METODO DE HUMANO

class Animal {
    constructor(tipo, piel, habitat) {
        this.tipo = tipo,
        this.piel = piel,
        this.habitat = habitat
    }

    dondeViven() {
        return console.log(`vive en: ${this.habitat}`);
    }
}

class Humano extends Animal {
    constructor(tipo, piel, habitat, habla) {
        super(tipo, piel, habitat)
        this.habla = habla;
    }
} 

let persona = new Humano("latino", "carne", "ciudad", "si")

console.log(persona);
persona.dondeViven();
