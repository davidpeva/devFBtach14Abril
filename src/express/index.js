'use strict'
//CLASE DEL 04-05-22 FINALIZANDO TAMBIEN VIMOS POSTMAN y clase del 09-05-22 COMO SE INSTALA NPM body parser para cuando hay datos sensibles los interprete en json 

//CON ESTE CODIGO y el npm express q instale LA PC es COMO EN UN SERVIDOR
//hace un require de express y lo guardo en la const
const express = require("express");
//ejecuta la funcion ;de express y guardalo en una const app
const app = express();

//aca importo el json q invente
const datosUsuarios = require('../datosJson/usuarios.json');

app.get("/", function (req, res) {
    res.send("mama estoy triunfando");
});

// le aplico a app un get y le paso una ruta q es como un callback
// app.get("/usuarios", function (req, res) {
    
//     console.log('datosUsuarios: ', datosUsuarios.datos);
    
//     console.log(req.query);
//     const parametros = req.query;

//     const respuesta = datosUsuarios.datos.find(dato => dato.id === parametros.id);


//     res.send(respuesta);
// });

app.get("/usuarios/:id", function (req, res) {
    const parametros = req.params;
    const datos = datosUsuarios.datos;
    const respuesta = [];

    datos.forEach(dato => {
    const posicion = dato.nombre.indexOf(parametros.id);
    if (posicion > -1) {
        respuesta.push(dato);
    }
    });

    res.send(respuesta);
});



// con post le mando info al servidor
app.post("/usuarios", function (req, res) {
    console.log('req ', req.query);
    console.log('req ', req.params);
    console.log('req ', req.body);
    //aca ya le envio parametros al servidor
    res.send('');
});

app.listen(4000);