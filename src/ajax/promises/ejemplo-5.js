'use strict'

//podemos hacer peticiones http
//Fetch nos devuelve una promesa



const showData = async () => {
    try {
        const resultado = await getData()
        console.log(`Url del gato ${resultado[0].url}`);
    }catch (error){
        console.error(error);
    }
}
//ASYNC y AWAIt SE USA PARA ACCEDER A LOS VALORES DE UNA PROMESA PR FUERA DE LA PROMES
//siempre que use async y await debo de usar las DOS PALABRAS
//siempre poner async antes de declarar la funcion
//podemos quitar el catch de la promesa cuando uso async porq el error lo trabajo arriba

const getData = () => {
    return fetch('https://api.thecatapi.com/v1/images/search/')
        .then(response => response.json())
        .then(data => console.log(data[0].nombre))
}

showData()