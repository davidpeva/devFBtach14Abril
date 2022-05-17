'use strict'
//CLASE 04-05-22
//INSTALAMOS NODEMON CON NPM PARA Q SE ACTUALICE LO Q HAGO EN JS AUTOMATICAMENTE

//VERME OTRA VEZ LO DE LA INSTALACION DE PAQUETES AUNQUE LOS INSTALE Y ESTAN BIEN ME FALTO ENTENDER MEJOR

//aca pido el paquete que instale de axios con npm
const axios = require('axios');

//aca le hago la peticion al lin de  la api
// axios.get("https://rickandmortyapi.com/api/character/")
axios.get("http://localhost:4000/usuarios")
.then((response) => {
    //con axios me ahorro el if  el otro then de fecth y response.data me da los resultados exactos sin hacer json
    console.log('response ', response.data);
}).catch((error) => {
    console.log('error ', error.message);
})