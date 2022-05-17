'use strict'
//CLASE DEL 27-04-22 FINALIZANDO

//AJAX es peticiones http de forma asincrona la info se pasa por XML O JSON pero la q se usa ahora es JSON

//XMLHTTPREQUEST ES UNA CLASS CREADA POR MICROSOFT PARA HACER PETICIONES DE HTTO usando verbos http como el GET POST PUT PATCH DELETE ETC
//con esto importo el paquete para poderlo usar en este archivo en especifico
//para usarlo con npm y se pueda usar con node.js
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//aca defino la url endpoint a la que le quiero hacer la peticion
let url = 'https://rickandmortyapi.com/api/character/';

function getData(url, callback) {
    //el new al lado de el nombre es una INSTANCIA DE UNA CLASE estoy creando un objeto xhttp a partir de el xml
    //para poder usar sus metodos y propiedades
let xhttp = new XMLHttpRequest();

//abro la peticion GET para pedirle datos a la url
//uso el metodo open sobe el nuevo objeto el true hace q sea peticion asincrona
xhttp.open('GET', url, true);

//ejecuto una funcion q venga desde la clase xmlhttprequest
//deice q cuando haya una respuedsta

xhttp.onreadystatechange = () => {
    //si la respuesta ya esta lista?  hay 4 estados el 4 es ya esta proceso
    if (xhttp.readyState === 4) {
        //la respuesta es satisfactoria? el 200 quiere decir que si ya esta listo EJEMPLO PAGINA STATUS CON LOS GATOS
        if (xhttp.status === 200) {
            //esto me va a responder en un string de texto
            // console.log(xhttp.responseText);
            callback(null, JSON.parse(xhttp.responseText));
        }else{
            //si no es satisfactoria cree este objeto OBJETO ERROR
            //va a mostrar el error de donde proviene
            let error = new Error('error: ' + url);
            return callback(error, null);
        }
    }
}
//ACA ENVIO LA PETICION
xhttp.send();
}

//al llamar getData aca el ejecuta la funcion de arriba para esta
//aca le digo q si no hay error muestrame el json
//recibe un url y una funcion q es un callback (con error y data)
//encadenamiento de callbacks pero si uso cada vez mas me puede dar un callback hell
getData (url, (error, data) => {
    //si hay un errror muestrame el error
    if(error) return console.error(error);
    return getData(url + data.results[0].id, (error2, data2) => {
        if(error2) return console.error(error2);
        console.log(data2);
        return getData(url + data.results[1].id, (error3, data3) => {
            if(error3) return console.error(error3);
            console.log(data3);
        })
    })
});

