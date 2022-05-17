'use strict'
//CLASE DEL 04-05-22

//ES UNA HERRAMIENTA Q AYUDA A HACE PETICIONES A UN SERVIDOR
//POR DECIRLO ASI ES LA NUEVA FORMA DE XMLHTTPREQUEST

//fecth no hay q instalarlo como xml pero como es url hya q usarlo en el navegador

// fetch('https://rickandmortyapi.com/api/character/')
// .then(response => response.json())
// .then(data => {
//     //ESTE IF ES PORQUE SI HAY UN ERROR Y EJECUTA EL THEN ME MUESTRE ERROR
//     if (data.error) {
//         //este return es como si hay un error para tdo y muestra error y ya no muestra texto si no que ya se rompe como el ciclo
//         return ('hubo un error');
//     }
//     console.log('Retorno: ',data);
// })
// //este catch retorna info correcta pero mostrando un error
// .catch((error) => {
//     console.log('error ', error);
// })

fetch("http://localhost:3000/usuarios")
.then((response) => response.json())
.then((response) => {
    console.log("response: ", response);
})
//este catch retorna info correcta pero mostrando un error
.catch((error) => {
    console.log("error ", error);
})

